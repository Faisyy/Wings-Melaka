# APP_KNOWLEDGE — PicExchange (PECS App)

> Single-source knowledge doc for the **PicExchange** Android app, the PECS half of the
> FYP *"Wings Melaka: Website Revamp/Maintenance & PECS App Building"* by
> Muhammad Faisyman Haiqal bin Mohd Fadzli (MMU FIST, ID 1221305591;
> Supervisor: Roy Chang Kwang Yang; Project ID T87M743).
>
> Last updated: 2026-06-10. Branch: `build/picexchange-app`. Status: **feature-complete (M0–M7)**.

---

## 1. What this app is

**PicExchange** is an offline Android communication aid built for **Wings Melaka** (an autism/
special-needs centre in Melaka). It is a digital replacement for the traditional **PECS**
(Picture Exchange Communication System) paper binder.

A **learner** taps picture cards and sentence-starter cards (e.g. *"I want"* + *"water"*) onto a
**sentence strip**, then presses **Speak** — an on-device text-to-speech engine reads the strip
aloud, in order. A **teacher/parent** can add, edit, delete, and organize cards and categories.

It exists to solve the report's three problems with paper PECS: high maintenance cost, lack of a
reliable communication medium for non-verbal children, and lack of a portable/customizable tool.

### Two actors (role-gated)
- **Learner / Child** (default mode): browse categories & cards, build a sentence on the strip,
  play TTS. *All editing is hidden.*
- **Teacher / Parent**: everything the learner can do **plus** full CRUD on cards & categories.
  Entered via an app-bar toggle protected by a **parental PIN child-lock**.

---

## 2. Report objectives → build status

All three project objectives (report §1.3) and every in-scope feature (§1.4 / Ch 4 use cases) are met.

### Objectives (§1.3)
| Objective | Status | Where |
|---|---|---|
| **Obj 2** — reliable communication medium (picture + sentence-starter → strip → speech) | ✅ Done | `ui/strip/SentenceStrip.kt`, `ui/strip/StripViewModel.kt` |
| **Obj 3** — customizable + portable (custom pictures, own categories, any Android device, offline) | ✅ Done | Teacher CRUD + 100% on-device storage |

*(Obj 1 — the Wings Melaka **website** revamp — is the other half of the FYP and is NOT in this
codebase. This repo is the app only.)*

### In-scope features (§1.4 + Ch 4 use-case diagram)
| Feature | Status | Where |
|---|---|---|
| Add custom images + sentence starters | ✅ Done | `data/image/ImageStore.kt` (gallery + camera), `ui/editor/CardEditorScreen.kt` |
| Organize cards into own categories | ✅ Done | `ui/editor/CategoryEditorScreen.kt` |
| Drag cards onto the sentence strip | ⚠️ **Built as TAP** (see §6 caveat 1) | `ui/strip/` |
| Text-to-speech iterating the strip (Android TTS) | ✅ Done | `tts/TtsManager.kt` |
| Browse categories & cards | ✅ Done | `ui/home/`, `ui/library/` |
| Edit / delete cards | ✅ Done | `ui/editor/`, `ui/components/Dialogs.kt` |
| Create / edit categories | ✅ Done | `ui/editor/CategoryEditorScreen.kt` |
| Teacher/Parent vs Learner/Child roles | ✅ Done | `ui/AppModeViewModel.kt`, `data/settings/AppMode.kt` |

### Out of scope (correctly excluded — hard guardrails)
- Login / authentication (the parental PIN is a **local child-lock only**, not auth).
- Cloud sync / backup — `allowBackup=false`.
- Multi-language management — TTS only uses **already-installed offline voices**.
- iOS / cross-platform, payments, analytics, local export/import (all future work).

---

## 3. Tech stack

**Locked architecture:**
- **Kotlin + Jetpack Compose** (NOT XML — see §6 caveat 2)
- Single-Activity **MVVM + UDF** (unidirectional data flow)
- **Hilt** dependency injection
- **Room** as the single source of truth (offline DB)
- **DataStore** (Preferences) for app-mode + PIN
- On-device **`TextToSpeech`**
- **100% offline** — no network, no backend, no cloud

**As-built versions (build-verified — pinned to the late-2025 toolchain, NOT the report's
aspirational 2026 stack):**
Gradle 8.14.3 · AGP 8.12.0 · Kotlin 2.2.21 · KSP 2.2.21-2.0.5 · Hilt 2.57.2 ·
Compose BOM 2025.12.01 · activity-compose 1.11.0 · lifecycle 2.9.4 ·
navigation-compose 2.9.4 · coil3 3.2.0. **minSdk 26 / target+compile 36 · Java 17 / JDK 21.**

> Why pinned: Studio 252 / AGP 8.12 forces Hilt 2.57.2 ↔ Kotlin 2.2.x. Hilt 2.58+ needs AGP 9;
> Hilt 2.57.2's metadata reader maxes at Kotlin 2.2. Bumping to the AGP-9 / 2026 stack later is a
> single version-catalog edit (app code unchanged) once Studio is updated.

**Build:** Gradle isn't on PATH — use the wrapper `./gradlew` with `JAVA_HOME=/c/Program Files/Java/jdk-21`.

---

## 4. Architecture & key files

Package root: `com.wings.picexchange`. Full design doc: `docs/architecture.md`.

### Data layer (Room)
- `data/local/entity/CategoryEntity.kt`, `CardEntity.kt` — Long ids, `ForeignKey CASCADE`, indexed `categoryId`.
- `data/local/dao/CategoryDao.kt`, `CardDao.kt` — Flow reads, suspend writes.
- `data/local/PicExchangeDatabase.kt` — v1, schema exported to `app/schemas/1.json`.
- `data/local/SeedCallback.kt` + `SeedData.kt` — deterministic seed (4 categories + 14 cards incl. sentence starters) via `execSQL` in `onCreate`.
- `data/PicExchangeRepository.kt` — the single repo over both DAOs.
- `domain/ImageRef.kt` — typed `drawable:` / `file:` reference (JVM-pure).
- `data/image/DrawableCatalog.kt` — explicit compile-time name→`R.drawable` map (R8-safe, fails loud on unknown name).
- `data/image/ImageStore.kt` — imports from gallery (`PickVisualMedia`) + camera (FileProvider + runtime CAMERA permission), downscales to 1024px, copies into `filesDir` as a `file:` ImageRef.

### UI layer (Compose)
- `MainActivity.kt` → `ui/PicExchangeRoot.kt` — single Activity hosts the NavHost; root owns window insets.
- `ui/navigation/PicExchangeNavHost.kt`, `Routes.kt` — Home → Library/{categoryId}; calm fade+scale transitions.
- `ui/home/` — adaptive category grid (HomeViewModel/HomeUiState).
- `ui/library/` — card grid per category (LibraryViewModel/LibraryUiState).
- `ui/strip/` — `StripItem.kt` (`@Parcelize`, snapshots label+imageRef at add-time, UUID key), `StripViewModel.kt` (**Activity-scoped, above the NavHost** so the sentence persists across Home↔Library; `SavedStateHandle` survives rotation/process death — never in Room), `SentenceStrip.kt` (persistent bottom bar; tap card to append, tap chip to remove, Clear + Undo snackbar; polite live region announces the sentence to TalkBack).
- `ui/starters/` — `StartersViewModel.kt` + `SentenceStartersRow.kt`: an always-visible "Quick words" row of sentence-starter pills, pinned above the grid on **both** Home and Library so core words ("I want", "I need"…) are one tap away without navigating back.
- `ui/editor/` — CardEditor + CategoryEditor screens & view models (add+edit, image preview, validation).
- `ui/components/` — `Tiles.kt`, `ImageRefImage.kt` (resolves drawable:/file: via Coil), `Dialogs.kt` (ManageItem / ConfirmDelete), `PinDialog.kt`, `Motion.kt` (`bounceClick` gentle press-squish, suppressed under reduce-motion).
- `ui/theme/` — cohesive teal Material3 light+dark (`Theme.kt`, `Color.kt`), `CategoryPalette.kt` (6 soft swatches, stable per id), `Type.kt` (system fonts only — offline, no downloadable fonts).
- `ui/util/ReduceMotion.kt` — `rememberReduceMotion()`: honours the system "remove animations" setting; the strip/speak pulses fall back to static cues (borders, colour) for sensory-sensitive users.

### Settings / roles
- `data/settings/AppMode.kt` — `{LEARNER, TEACHER}` enum in DataStore, default LEARNER.
- `data/settings/PinStore.kt` — salted SHA-256 child-lock (framed as obfuscation, not auth; no recovery beyond clear-data).
- `ui/LocalAppMode.kt`, `ui/AppModeViewModel.kt` — `compositionLocalOf` exposes mode; Learner hides all mutating affordances; write-paths no-op in Learner (defence-in-depth).

### TTS
- `tts/Speaker.kt` (interface → enables `FakeSpeaker` in tests) + `tts/TtsManager.kt` (process-`@Singleton`, Hilt `@Binds`). Speaks strip in order via per-card utterances (QUEUE_FLUSH then QUEUE_ADD); `UtteranceProgressListener` drives per-card highlight; device-locale + English fallback; `NO_ENGINE`/`LANG_MISSING` → install banner (`ACTION_INSTALL_TTS_DATA`); `stop()` on background via `ProcessLifecycleOwner`, never `shutdown()` in `onCleared`.

---

## 5. Build milestones (M0–M7)

Each milestone is a runnable APK mapped to the report's prototyping phases; each got a
code-reviewer pass before commit.

| Milestone | Commit | What landed |
|---|---|---|
| **M0** scaffold | — | Project skeleton, Hilt, theme baseline |
| **M1** data layer | — | Room entities/DAOs/DB v1, deterministic seed, repository, ImageRef + DrawableCatalog. 17 Robolectric tests |
| **M2** navigation | `60ea00c` | Nav-Compose graph, Home/Library VMs + UiState, adaptive grids, Coil image rendering |
| **M3** sentence strip | `fa379f2` | Activity-scoped StripViewModel (persists across nav), tap-to-add/remove, Clear+Undo. 23 tests |
| **M4** TTS | `5768a25` | Offline TextToSpeech, per-card highlight, Speak↔Stop, install banner. 25 tests |
| **M5** Teacher CRUD | `f852603` | ImageStore (gallery+camera), Card/Category editors, long-press manage, confirm-delete, FABs |
| **M6** role gating | `7daddcf` | AppMode (default LEARNER), PinStore child-lock, Learner hides editing, Teacher/Lock toggle |
| **M7** polish | `38ce955` | Cohesive teal Material3 light+dark, 72dp tap-to-remove chips (fixed <48dp target), a11y labels |
| UI polish pass | `6801aeb` | Child-friendly redesign: coloured tiles + icon badges + bounce, 18 distinct concept vectors, calm motion |
| Snackbar fix | `fdf111e` | Snackbar stays 5s, dismisses on tap, Undo still restores |
| UX & a11y pass | _uncommitted_ | Pinned "Quick words" starters row (Home + Library); honour system reduce-motion for pulses; TalkBack section headings + polite sentence live region; larger decorative ✕; Speak/Clear spacing. Build + 30 tests green |

**Tests: 30 unit tests green** (Room DAO incl. cross-category cascade isolation + seed determinism, StripViewModel, TTS via FakeSpeaker).

> Note: `main` still has only the first commit + docs. Merge `build/picexchange-app` when ready.

---

## 6. ⚠️ Caveats & deviations from the report

These are the gaps between what the written report promises and what the code does. Know them
before the defense.

### Caveat 1 — "drag-and-drop" is implemented as TAP (functional discrepancy)
The report repeatedly promises **drag**: §1.4 *"drag the pictures and sentence starter to a
sentence strip"* and the Ch 4 use case *"Build a sentence on the strip (drag cards)."*
The app uses **tap-to-add / tap-to-remove**, not drag.

- **Why:** tap is the more reliable path for sensory/motor-challenged learners, and it sidesteps
  the small drag-target / <48dp accessibility problem. This was a deliberate accessibility choice.
- **Impact:** this is the **one true functional contradiction** with the report wording.
- **Fix options:** (a) implement drag-to-add + drag-reorder so the app matches the report, or
  (b) soften the report wording to *"tap or drag"* (cheaper). Drag is documented as the only
  remaining optional enhancement; tap fully covers the use case.

### Caveat 2 — "XML layouts" vs Jetpack Compose (doc-wording mismatch)
Report §3.1 / Ch 3 says the app uses *"Kotlin... and XML layouts."* The app is actually built with
**Jetpack Compose** and has **no XML layouts**. This is purely a documentation fix — amend the
relevant Ch 3 sentence to *"Kotlin with Jetpack Compose."* Functionally a non-issue (Compose is
the modern, Google-recommended successor to XML layouts).

### Caveat 3 — seed icons are placeholders (production blocker, not a fulfillment gap)
The 18 seed icons are **placeholder concept vectors**, pending Wings Melaka sign-off on real seed
content and a license-clear icon set (recommended: **Material Symbols, Apache-2.0**). The custom-
image pipeline (gallery/camera → `file:` card) is fully real; only the bundled defaults are stand-ins.

### Minor — manual real-device check still worth doing
Emulator couldn't supply a real photo, so the gallery/camera photo-pick → `file:` card render and
the delete-through dialog were verified by code/DB cascade tests rather than captured on-device.
Both use standard Android APIs. A quick check on a physical device is recommended before handover.

---

## 7. Quick reference

- **Repo root:** `d:\Code\pecs-app`
- **Active branch:** `build/picexchange-app`
- **Package:** `com.wings.picexchange`
- **Design doc:** `docs/architecture.md`
- **Build:** `./gradlew assembleDebug` with `JAVA_HOME=/c/Program Files/Java/jdk-21`
- **Test:** `./gradlew test`
- **Scope guardrails to flag if creep appears:** auth, cloud sync, multi-language, cross-platform, payments, analytics, export/import.

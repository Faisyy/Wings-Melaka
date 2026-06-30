/* Wings Melaka — minimal vanilla JS (no framework, no build).
   Handles the mobile menu toggle and active-link highlighting. */

document.addEventListener('DOMContentLoaded', function () {
  // ----- mobile menu toggle -----
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    // close the menu when a real link inside it is tapped
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // ----- highlight the current page in the nav -----
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main .nav-item > a, .mobile-menu > a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // ----- contact / volunteer forms via Web3Forms (no backend needed) -----
  // Set your free access key from https://web3forms.com in each form's
  // hidden "access_key" field. Submissions are emailed to the address you
  // registered that key with. Until a real key is added, a notice is shown.
  document.querySelectorAll('form[data-web3forms]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    var btn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var keyField = form.querySelector('input[name="access_key"]');
      var key = keyField ? keyField.value : '';

      if (!key || key.indexOf('YOUR_WEB3FORMS') === 0) {
        setStatus('⚠️ The email form isn’t connected yet. Please email us directly for now.', 'err');
        return;
      }

      var label = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending…';
      setStatus('', '');

      fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function (json) {
          if (json.success) {
            form.reset();
            setStatus('✓ Thank you! Your message has been sent.', 'ok');
          } else {
            setStatus('Sorry, something went wrong: ' + (json.message || 'please try again.'), 'err');
          }
        })
        .catch(function () {
          setStatus('Network error — please email us directly instead.', 'err');
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = label;
        });
    });

    function setStatus(msg, kind) {
      if (!status) return;
      status.textContent = msg;
      status.className = 'form-status' + (kind ? ' ' + kind : '');
    }
  });
});

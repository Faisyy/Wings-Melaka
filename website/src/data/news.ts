// Wings Melaka news archive — content carried over from the old site's News page.
// Original typos lightly cleaned for the revamp. Newest first.
//
// IMAGES live in  website/public/news/<slug>/ . Each image's `file` is the raw filename;
// the News page builds the URL as  /news/<slug>/<encoded filename> .

export type NewsImage = { caption: string; file?: string }

export type NewsEntry = {
  slug: string
  date: string
  title: string
  body: string[]
  images: NewsImage[]
}

export const news: NewsEntry[] = [
  {
    slug: 'dec-2024',
    date: 'December 2024',
    title: 'Graduation & Christmas Party',
    body: [
      'We held our annual Graduation & Christmas Party, attended by our students and their families, as well as donors and individuals who have supported us over the years. The event was sponsored by Hatten Hotel, Melaka, and we celebrated 8 students who graduated from our programmes this year.',
      'We were graced by special dance performances from our EIP & SAP students and a sketch presentation by SAP titled "The Great Big Turnip". All of our students and their siblings exchanged Christmas gifts, and families had the opportunity to bond and get to know one another over high-tea.',
    ],
    images: [
      { caption: 'Hatten — thank you!', file: '01 Hatten Thank you.jpeg' },
      { caption: 'Student graduation', file: '02 Graduate.jpeg' },
      { caption: 'Student graduation', file: '03 Graduate.jpeg' },
      { caption: 'Story telling', file: '04 Story telling.jpeg' },
      { caption: 'EIP dance', file: '05 EIP_dance.jpeg' },
      { caption: 'SAP sketch', file: '06 SAP sketch.jpeg' },
      { caption: 'All staff and personnel', file: '07 All staff and personnel.jpeg' },
    ],
  },
  {
    slug: 'jul-sep-2021',
    date: 'July – September 2021',
    title: 'Persevering Through the Pandemic',
    body: [
      'We are encouraged by what we have overcome — the scepticism around online and virtual lessons during the prolonged lockdown caused by the COVID-19 pandemic. While the effectiveness of physical lessons still prevailed, virtual learning kept the routine going and dynamic, thanks to the joint efforts of Wings teachers and the parents who never gave up on their child’s learning journey.',
      'Throughout the months of online lessons, we reduced student contributions by 50% across the board. Some parents continued paying in full, while those most affected financially during this crisis received a 100% waiver from the Board.',
      'As the Malaysian Government began reopening, we prepared the centre to meet the stringent SOP requirements. With the last quarter of our learning calendar underway and the risk of a rebound in cases, almost 50% of parents preferred to remain on online lessons until January 2022, so the Board decided to continue virtual lessons until further notice.',
    ],
    images: [
      { caption: 'EIP virtual lesson', file: 'EIP Virtual Lesson.jpg' },
      { caption: 'SAP virtual lesson', file: 'SAP Virtual Lesson.jpg' },
      { caption: 'Ground maintenance to prepare for centre reopening', file: 'Ground Maintenance.jpg' },
      { caption: 'Ground maintenance to prepare for centre reopening', file: 'Ground maintenance 2.jpg' },
    ],
  },
  {
    slug: 'mar-jun-2021',
    date: 'March – June 2021',
    title: 'Adapting to the New Norm',
    body: [
      'It has been a challenging season for all parents, students and service providers since the outbreak of the COVID-19 pandemic. Routines were disrupted and activities suspended due to the Movement Control Orders, yet everyone strove to adapt to the new norm in line with the real learning and growth needs of the special children we serve.',
      'Based on the MCO schedules — MCO 2.0 (12 Jan – 28 Feb 2021, online), physical lessons in March–April 2021, and MCO 3.0 from 17 May — we could only run physical lessons for less than two months over the period. Nevertheless, virtual lessons remained the constant avenue of support for parents and students.',
      'Many families were affected emotionally and financially, but we continued to encourage and empower them to the best of our ability. We are not giving up — demand is great, with new students on our waiting list — and we continue to pray and hope for the best.',
    ],
    images: [
      { caption: 'EIP group with social distancing', file: 'group_photo_Large.jpg' },
      { caption: 'EIP virtual lesson', file: 'EIP_virtual_lesson_Large.jpg' },
      { caption: 'YAP physical cooking lesson', file: 'YAP_cooking_lesson_Large.jpg' },
      { caption: 'YAP virtual lesson', file: 'YAP_virtual_lesson_Large.jpg' },
      { caption: 'Exco members visitation', file: 'Exco_members_visitation_Large.jpg' },
    ],
  },
  {
    slug: 'jan-feb-2021',
    date: 'January – February 2021',
    title: 'A Fresh Start with Spring Cleaning',
    body: [
      'We were honoured to have the team from our Chairman Dato’ Chee Kong Chi’s legal firm, M/s Chee Siah Le Kee & Partners, kick off 2021 with a massive spring cleaning on 3 January 2021. Held in conjunction with the firm’s 40th anniversary, this CSR project was a joint, voluntary effort among the business partners, staff and Wings team to prepare for the school reopening on 11 January 2021.',
      'With much joy we started physical lessons on 11 January 2021, but were ordered to close again on 13 January 2021 following a new Movement Control Order. The MCO was extended to 18 February 2021, and the centre remained closed until further notice.',
      'Despite challenges such as sensory issues, conducive learning atmosphere, availability of teaching tools and IT devices, we progressed steadily through the cooperation, determination and diligence of all.',
    ],
    images: [
      { caption: 'Chee Siah Le Kee & Partners', file: 'cslk grp.jpg' },
      { caption: 'Men in action', file: 'men in action.jpg' },
      { caption: 'OT room cleaning', file: 'OT room cleaning.jpg' },
      { caption: 'Mr Chairman in action', file: 'Mr Chairman in action.jpg' },
      { caption: 'Student', file: 'Student 1.jpg' },
      { caption: 'Student', file: 'Student 2.jpg' },
      { caption: 'Student', file: 'Student 3.jpg' },
      { caption: 'Student', file: 'student 4.jpg' },
      { caption: 'Student', file: 'Student 5.jpg' },
      { caption: 'Student', file: 'student 6.jpg' },
      { caption: 'YAP Zoom lesson', file: 'YAP Zoom lesson2.jpg' },
    ],
  },
  {
    slug: 'aug-nov-2020',
    date: 'August – November 2020',
    title: 'Restoring Our Operations',
    body: [
      'Running our programmes during the COVID-19 season was challenging for everyone — management, teachers, students and parents alike. Through it all we continued to soar beneath the wings of God and sail through the difficult conditions, grateful for the spirit of "when the going gets tough, the tough get going" amid manpower, compliance and financial constraints.',
      'Moving from the Conditional MCO to the Recovery MCO imposed until 31 December 2020 nationwide, we gradually restored operations toward a normal pace, while staying fully alert and compliant as several states experienced a third wave.',
      'There were some dropouts due to personal reasons, but these were readily filled by new students as demand always outstrips supply in our field. Workshops and parent support group meetings were temporarily suspended.',
    ],
    images: [
      { caption: 'EIP group lesson', file: 'EIP Grp lesson.jpg' },
      { caption: 'EIP teacher with student', file: 'EIP Teacher vs student.jpg' },
      { caption: 'SAP classroom lesson', file: 'SAP classroom lesson.jpg' },
      { caption: 'SAP gym', file: 'SAP Gym.jpg' },
      { caption: "SAP let's dance", file: "SAP Let's dance.jpg" },
      { caption: 'YAP — YY can cook', file: 'YAP YY Can cook.jpg' },
      { caption: 'YAP — I can aim too', file: 'YAP I can aim too.jpg' },
    ],
  },
  {
    slug: 'jul-2020',
    date: 'July 2020',
    title: 'Bomba Sanitises the Centre',
    body: [
      'Bomba (the Fire & Rescue Department) came and sanitised our entire centre before we welcomed back all our students.',
    ],
    images: [
      { caption: 'Sanitised the activity room', file: 'bomba1.jpg' },
      { caption: 'Bomba crews', file: 'bomba2.jpg' },
      { caption: 'Sanitised the walkway', file: 'bomba3.jpg' },
    ],
  },
  {
    slug: 'jun-2020',
    date: 'June 2020',
    title: 'Preparing to Reopen',
    body: [
      'After the Recovery Movement Control Order restrictions were lifted, staff resumed work from 10 June 2020 and carried out cleaning and sanitising in line with SOP requirements.',
      'Schools and centres were still not permitted to open until further notice, so EIP and SAP students continued with virtual lessons and Google Classroom.',
    ],
    images: [
      { caption: 'Centre cleaning', file: 'Cleaning_of_centre_Grid7.jpg' },
      { caption: 'Sanitised the stimulation room', file: 'Sanitizing_of_Stimulation_Room_Grid7.jpg' },
      { caption: 'Paint activity room', file: 'Picture1_Grid7.png' },
    ],
  },
  {
    slug: 'mar-jun-2020',
    date: 'March – June 2020',
    title: 'COVID-19 Lockdown',
    body: [
      'The whole nation was placed under lockdown and, thereafter, under the MCO and RMCO due to the COVID-19 pandemic. Our centre remained closed throughout that period, from 18 March 2020 to 9 June 2020.',
      'During the lockdown, we conducted virtual lessons with our EIP students and Google Classroom with our SAP students.',
    ],
    images: [{ caption: 'Online lesson during COVID lockdown', file: 'Online_lesson1_Grid7.jpg' }],
  },
  {
    slug: 'feb-2020',
    date: 'February 2020',
    title: 'Chinese New Year Lou Sang',
    body: [
      'The women’s bible study group, who have regularly supported the café work of our Young Adult Programme, initiated a Chinese New Year Lou Sang luncheon at our centre on 12 February 2020.',
    ],
    images: [
      { caption: 'Fresh and colourful homemade lou sang', file: 'Lousang_Grid7.jpg' },
      { caption: 'The ladies and their pretty organic lou sang', file: 'Lousang_2020_Grid7.jpg' },
    ],
  },
  {
    slug: 'jan-2020',
    date: 'January 2020',
    title: 'OT Training by Ms Teo Lee Fun',
    body: [
      'Ms Teo Lee Fun, an Occupational Therapist trained in New Zealand, came to share with and train Wings’ teachers on sensory diet and ideas for stimulation activities for our students.',
    ],
    images: [
      { caption: 'Ms Teo Lee Fun sharing with Wings staff and volunteers', file: 'SR.jpg' },
      { caption: 'Wings staff and volunteers', file: 'SR2.jpg' },
    ],
  },
]

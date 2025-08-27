// Translation data for Arabic and English
const translations = {
  ar: {
    dir: 'rtl',
    title: '🌊 برنامج السفارية – مارينا (5 أيام / 4 ليالي)',
    subtitle: 'الرحلة في مارينا – الساحل الشمالي لمدة 5 أيام / 4 ليالي.\nالإجمالي: <strong>18,145 جنيه</strong> (شامل البنزين + رسوم سويفيل).\nعدد الأفراد: <strong>7</strong>.\nنصيب الفرد: <strong>≈ 2,592 جنيه</strong> (من غير الفطار أو رفاهيات إضافية).',
    organisersTitle: 'المسؤولون عن الرحلة والإدارة',
    costTitle: 'تفاصيل التكلفة',
    colItem: 'البند',
    colCost: 'المبلغ (جنيه)',
    costItems: [
      { item: 'إيجار الشاليه (5 أيام/4 ليالي)', cost: '6,000' },
      { item: 'الغداء + الأكل', cost: '7,000' },
      { item: 'البنزين + رسوم سويفيل', cost: '3,075' },
      { item: 'البحر', cost: '700' },
      { item: 'مياه', cost: '200' },
      { item: 'مراسي (QR2)', cost: '400' },
      { item: 'تسالي', cost: '520' },
      { item: 'نت', cost: '230' },
      { item: 'كاوتش', cost: '20' },
      { item: '<strong>الإجمالي الكلي</strong>', cost: '<strong>18,145</strong>', isTotal: true }
    ],
    perPerson: 'نصيب الفرد = الإجمالي ÷ 7 ≈ 2,592 جنيه للفرد',
    activitiesTitle: 'اقتراحات لنشاطات / مطاعم',
    activitiesList: [
      "مطعم مرحبتين ومرحبا – <a href='https://drive.google.com/file/d/1KtwZpDaOyxtM_I2slpj1FmLq_5g3Zy6h/view?usp=sharing' target='_blank'>القائمة</a>",
      "مطعم عم شلتت – <a href='https://www.menuegypt.com/ar/%D8%B9%D9%85-%D8%B4%D9%84%D8%AA%D8%AA' target='_blank'>المنيو والمعلومات</a>",
      "مطعم بريموز – <a href='https://drive.google.com/file/d/1OhGnQPqvXnchivIMnV0LB5cTo8YIApx1/view?usp=sharing' target='_blank'>القائمة</a>"
    ],
    ctaTitle: 'هل ترغب في المشاركة؟',
    attendLabel: 'هل أنت موافق على حضور السفارية ودفع نصيب الفرد؟',
    attendOptions: { yes: 'نعم', no: 'لا' },
    commentsLabel: 'هل ترغب في اقتراح نشاط إضافي أو لديك أي ملاحظات؟',
    commentsPlaceholder: 'اكتب هنا...',
    submitBtn: 'إرسال',
    thankYou: 'شكراً لمشاركتك! سيتم التواصل معك قريباً.',
    langBtn: 'English'
  },
  en: {
    dir: 'ltr',
    title: '🌊 Marina Trip Program (5 Days / 4 Nights)',
    subtitle: 'The trip will take place in Marina – North Coast for 5 days / 4 nights.\nTotal cost: <strong>EGP 18,145</strong> (including fuel & Swvl fees).\nNumber of participants: <strong>7</strong>.\nCost per person: <strong>≈ EGP 2,592</strong> (excluding breakfast & extra amenities).',
    organisersTitle: 'Responsible organizers',
    costTitle: 'Cost details',
    colItem: 'Item',
    colCost: 'Amount (EGP)',
    costItems: [
      { item: 'Chalet rent (5 days/4 nights)', cost: '6,000' },
      { item: 'Lunch + food', cost: '7,000' },
      { item: 'Fuel + Swvl fees', cost: '3,075' },
      { item: 'Beach', cost: '700' },
      { item: 'Water', cost: '200' },
      { item: 'Marassi (QR2)', cost: '400' },
      { item: 'Snacks', cost: '520' },
      { item: 'Internet', cost: '230' },
      { item: 'Couch', cost: '20' },
      { item: '<strong>Total</strong>', cost: '<strong>18,145</strong>', isTotal: true }
    ],
    perPerson: 'Cost per person = Total ÷ 7 ≈ EGP 2,592',
    activitiesTitle: 'Suggested activities / restaurants',
    activitiesList: [
      "Marhabtayn & Marhaba restaurant – <a href='https://drive.google.com/file/d/1KtwZpDaOyxtM_I2slpj1FmLq_5g3Zy6h/view?usp=sharing' target='_blank'>Menu</a>",
      "Am Sheltet restaurant – <a href='https://www.menuegypt.com/ar/%D8%B9%D9%85-%D8%B4%D9%84%D8%AA%D8%AA' target='_blank'>Menu & info</a>",
      "Primo’s restaurant – <a href='https://drive.google.com/file/d/1OhGnQPqvXnchivIMnV0LB5cTo8YIApx1/view?usp=sharing' target='_blank'>Menu</a>"
    ],
    ctaTitle: 'Would you like to participate?',
    attendLabel: 'Do you agree to join the trip and pay your share?',
    attendOptions: { yes: 'Yes', no: 'No' },
    commentsLabel: 'Would you like to suggest any additional activity or have any comments?',
    commentsPlaceholder: 'Write here...',
    submitBtn: 'Submit',
    thankYou: 'Thank you for your feedback! We will contact you soon.',
    langBtn: 'العربية'
  }
};

// Current language state; default to Arabic
let currentLang = 'ar';

// DOM elements
const htmlEl = document.documentElement;
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const organisersTitleEl = document.getElementById('organisers-title');
const costTitleEl = document.getElementById('cost-title');
const colItemEl = document.getElementById('col-item');
const colCostEl = document.getElementById('col-cost');
const costTableBody = document.getElementById('cost-table-body');
const perPersonEl = document.getElementById('per-person');
const activitiesTitleEl = document.getElementById('activities-title');
const activitiesListEl = document.getElementById('activities-list');
const ctaTitleEl = document.getElementById('cta-title');
const attendLabelEl = document.getElementById('attend-label');
const attendSelect = document.getElementById('attend');
const commentsLabelEl = document.getElementById('comments-label');
const submitBtnEl = document.getElementById('submit-btn');
const thankYouEl = document.getElementById('thank-you');
const toggleLangBtn = document.getElementById('toggle-lang');
const feedbackForm = document.getElementById('feedback-form');

// Update UI according to the current language
function updateLanguage() {
  const t = translations[currentLang];
  // Set direction and lang attribute
  htmlEl.setAttribute('dir', t.dir);
  htmlEl.setAttribute('lang', currentLang);
  // Update hero content
  titleEl.innerText = t.title;
  subtitleEl.innerHTML = t.subtitle.replace(/\n/g, '<br>');
  // Update organisers title (list of names remains same)
  organisersTitleEl.innerText = t.organisersTitle;
  // Update cost table title
  costTitleEl.innerText = t.costTitle;
  colItemEl.innerText = t.colItem;
  colCostEl.innerText = t.colCost;
  // Populate cost rows
  costTableBody.innerHTML = '';
  t.costItems.forEach(row => {
    const tr = document.createElement('tr');
    if (row.isTotal) tr.classList.add('total-row');
    const tdItem = document.createElement('td');
    const tdCost = document.createElement('td');
    tdItem.innerHTML = row.item;
    tdCost.innerHTML = row.cost;
    tr.appendChild(tdItem);
    tr.appendChild(tdCost);
    costTableBody.appendChild(tr);
  });
  // Update per person line
  perPersonEl.innerText = t.perPerson;
  // Update activities
  activitiesTitleEl.innerText = t.activitiesTitle;
  activitiesListEl.innerHTML = '';
  t.activitiesList.forEach(itemHtml => {
    const li = document.createElement('li');
    li.innerHTML = itemHtml;
    activitiesListEl.appendChild(li);
  });
  // Update CTA section
  ctaTitleEl.innerText = t.ctaTitle;
  attendLabelEl.innerText = t.attendLabel;
  // Update options in select
  attendSelect.options[0].text = t.attendOptions.yes;
  attendSelect.options[1].text = t.attendOptions.no;
  commentsLabelEl.innerText = t.commentsLabel;
  // Update comments placeholder
  const commentsEl = document.getElementById('comments');
  // Update placeholder attribute and property for comments textarea
  commentsEl.setAttribute('placeholder', t.commentsPlaceholder);
  commentsEl.placeholder = t.commentsPlaceholder;
  submitBtnEl.innerText = t.submitBtn;
  thankYouEl.innerText = t.thankYou;
  // Update language button text
  toggleLangBtn.innerText = t.langBtn;
}

// Toggle language on button click
toggleLangBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  updateLanguage();
});

// Handle form submission
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Hide form and show thank you message
  feedbackForm.style.display = 'none';
  thankYouEl.classList.remove('hidden');
});

// Initial update
updateLanguage();

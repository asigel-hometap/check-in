// prototype.js
// Minimal rebuild for rapid iteration, based on user flow blueprint

function formatDate(date) {
  if (!(date instanceof Date)) date = new Date(date);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

const settlementDeadline = new Date('2031-05-01');

// --- Data Model ---
const questions = [
  {
    id: 'settlement_timeline',
    type: 'radio',
    title: 'First off, when do you think you’ll settle your Investment?',
    helperText: `There's no rush! You can settle at any time before <span style='font-weight: bold'>May 1, 2031</span>`,
    options: [
      { value: 'within_year', text: 'In the next 12 months' },
      { value: 'within_three_years', text: 'In 1 – 3 years' },
      { value: 'more_than_three_years', text: 'In more than 3 years' },
      { value: 'not_sure', text: 'Not sure' }
    ]
  },
  {
    id: 'settlement_funding',
    type: 'radio',
    title: 'How do you plan to fund your settlement?',
    helperText: 'No worries if you’re unsure — you can always change your mind later.',
    options: [
      { value: 'refinancing', text: 'Refinancing mortgage or other debts' },
      { value: 'cash_savings', text: 'Savings or cash on hand' },
      { value: 'loan_heloc', text: 'Home Equity Loan or Home Equity Line of Credit (HELOC)' },
      { value: 'home_sale', text: 'Proceeds from a home sale' },
      { value: 'not_sure', text: 'Not sure' }
    ]
  },
  {
    id: 'commitment',
    type: 'radio',
    title: 'How committed are you to your settlement plan?',
    helperText: 'We’ll use this info to share resources that meet you where you are',
    options: [
      { value: 'still_deciding', text: "I'm still deciding if my settlement plan is right for me" },
      { value: 'committed_not_started', text: "I'm committed to my settlement plan, but haven't gotten started" },
      { value: 'committed_active', text: "I've started working on my settlement plan" },
      { value: 'working_with_hometap', text: "I'm actively working with Hometap to settle" }
    ]
  },
  {
    id: 'steps_taken',
    type: 'text',
    title: 'What steps towards settlement have you taken so far?',
    //helperText: 'Type your response or choose from the examples below.',
    placeholder: "Example: I've started talking to a realtor",
  },
  // Financial picture landing (no question)
  {
    id: 'focus_areas_landing',
    type: 'info',
    title: 'Financial picture',
    text: 'This section introduces your focus areas. Placeholder copy here.'
  },
  {
    id: 'life_events_past',
    type: 'checkbox',
    title: `In the <span style="color: #19A274; font-weight: 700;">past</span> 6 months, have you experienced any of these life events?`,
    //helperText: 'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    options: [
      { value: 'marriage', text: 'Marital status change' },
      { value: 'birth', text: 'Growing family' },
      { value: 'job_change', text: 'Employment change' },
      { value: 'financial_windfall', text: 'Major bonus, inheritance, or other financial windfall' },
      { value: 'medical', text: 'Major medical expense' },
      { value: 'home_repair', text: 'Major home repair or renovation' },
      { value: 'property_transaction', text: 'Bought or sold a property' },
      { value: 'disaster', text: 'Fire, flood, or natural disaster' },
      { value: 'business', text: 'Other significant expense' },
      { value: 'not_say', text: "I'd rather not say" },
      { value: 'none', text: 'None of the above' }
    ]
  },
  {
    id: 'life_events_future',
    type: 'checkbox',
    title: `Do you expect any of these life events in the <span style="color: #19A274; font-weight: 700;">next</span> 6 months?`,
    helperText: 'We know you can\'t predict the future, but take your best guess',
    options: [
      { value: 'marriage', text: 'Marital status change' },
      { value: 'birth', text: 'Growing family' },
      { value: 'job_change', text: 'Employment change' },
      { value: 'financial_windfall', text: 'Major bonus, inheritance, or windfall' },
      { value: 'medical', text: 'Major medical expense' },
      { value: 'home_repair', text: 'Major home repair or renovation' },
      { value: 'property_transaction', text: 'Buy or sell another property' },
      { value: 'business', text: 'Other significant expense' },
      { value: 'not_sure', text: "I'm not sure" },
      { value: 'none', text: 'None of the above' }
    ]
  },
  {
    id: 'financial_wellbeing',
    type: 'checkbox',
    title: 'What\'s most important to your financial wellbeing?',
    //helperText: 'We know that we\'re just one piece of your larger financial picture. Let us know what\'s most important to you so we can provide the most relevant information.',  
    options: [
      { value: 'financial_education', text: 'Learning about personal finance' },
      { value: 'increasing_liquidity', text: 'Accessing equity or increasing cash on hand' },
      { value: 'hei_questions', text: 'Understanding your Hometap Investment' },
      { value: 'home_renovation', text: 'Planning home renovations or upgrades' },
      { value: 'lower_payments', text: 'Reducing monthly payments or financial obligations' },
      { value: 'other', text: 'Something else' }
    ]
  }
];

// Recommendations data model
const recommendations = {
  settlement_timeline: {
    within_year: [
      {
        id: 'timeline_soon',
        title: 'Contact Investment Support',
        helperText: 'Ready to start your settlement? Our Investment Support team is here to help',
        content_type: 'Personal Coaching',
        time_estimate: 15,
        img: 'assets/desk.png',
        category: 'game_plan'
      }
    ],
    within_three_years: [
      {
        id: 'timeline_medium',
        title: 'Try the Settlement Calculator',
        helperText: 'Estimate your settlement amount at different home values and dates',
        content_type: 'Calculator',
        time_estimate: 7,
        img: 'assets/laptop.png',
        category: 'on_track'
      }
    ],
    more_than_three_years: [
      {
        id: 'timeline_far',
        title: 'Review your Quarterly Account Statement',
        helperText: 'Stay informed about your home value, equity, and Investment details',
        content_type: 'Guides & More',
        time_estimate: 10,
        img: 'assets/laptop.png',
        category: 'prep_future'
      }
    ],
    not_sure: [
      {
        id: 'timeline_not_sure',
        title: 'Understanding Your Settlement Options',
        helperText: 'Explore different ways to settle your Home Equity Investment',
        content_type: 'Video',
        time_estimate: 6,
        img: 'assets/desk.png',
        category: 'game_plan'
      }
    ]
  },
  settlement_funding: {
    refinancing: [
      {
        id: 'funding_refi',
        title: 'Settling Your Home Equity Investment with a Refinance',
        helperText: 'Learn about the refinancing process, what to consider, and how to prepare for settlement',
        content_type: 'Article',
        time_estimate: 3,
        img: 'assets/house-photo.jpg',
        category: 'game_plan'
      },
      {
        id: 'funding_refi_simplified',
        title: 'Save on refinance closing costs with Simplist',
        helperText: 'Eligible Hometap homeowners are eligible for $1,000 off closing costs with Simplist',
        content_type: 'Guides & More',
        time_estimate: 10,
        img: 'assets/room.png',
        category: 'game_plan'
      }
    ],
    cash_savings: [
      {
        id: 'funding_savings',
        title: 'Settling Your Home Equity Investment with Cash Savings',
        helperText: 'A comprehensive guide to settling your investment with cash savings',
        content_type: 'Article',
        time_estimate: 3,
        img: 'assets/room.png',
        category: 'game_plan'
      }
    ],
    loan_heloc: [
      {
        id: 'funding_heloc',
        title: 'Settling with a Home Equity Line of Credit',
        helperText: 'Learn how to settle your Investment with a Home Equity Line of Credit.',
        content_type: 'Article',
        time_estimate: 3,
        img: 'assets/room.png',
        category: 'game_plan'
      }
    ],
    home_sale: [
      {
        id: 'funding_sale',
        title: 'Settling your Home Equity Investment with a home sale',
        helperText: 'A comprehensive guide to settling your investment through a home sale.',
        content_type: 'Article',
        time_estimate: 3,
        img: 'assets/room.png',
        category: 'game_plan'
      }
    ]
  },
  commitment: {
    still_deciding: [
      {
        id: 'commitment_still_deciding',
        title: 'Review your settlement options',
        helperText: 'There are several ways to settle your investment. This overview will help you understand your options so you can choose what\'s best for you.',
        content_type: 'Video',
        time_estimate: 10,
        img: 'assets/doors.png',
        category: 'prep_future'
      }
    ],
    committed_not_started: [
      {
        id: 'working_with_hometap',
        title: 'Request a settlement statement',
        helperText: 'If you haven\'t done so yet, request a personalized settlement statement from our Investment Support team',
        content_type: 'Personal Coaching',
        time_estimate: 30,
        img: 'assets/dashboard.png',
        category: 'game_plan'
      }
    ]
  },
  life_events: {
    marriage: [
      {
        id: 'event_marriage',
        title: 'Marriage and Your Home Investment',
        helperText: 'Learn how to manage your Investment during major life events',
        content_type: 'Article',
        time_estimate: 7,
        img: 'assets/house-photo.jpg',
        category: 'game_plan',
      }
    ],
    birth: [
      {
        id: 'event_birth',
        title: 'Growing Family Guide',
        helperText: 'Financial planning for growing families.',
        content_type: 'Video',
        time_estimate: 6,
        img: 'assets/room.png',
        category: 'game_plan'
      }
    ],
    job_change: [
      {
        id: 'event_job',
        title: 'Career transitions and your Home Equity Investment',
        helperText: 'Learn how to manage your Investment during major life events',
        content_type: 'Article',
        time_estimate: 3,
        img: 'assets/desk.png',
        category: 'prep_future'
      }
    ],
    financial_windfall: [
      {
        id: 'event_windfall',
        title: 'Making the most of a financial windfall',
        helperText: 'Learn how to factor your HEI into unexpected financial gains',
        content_type: 'Article',
        time_estimate: 4,
        img: 'assets/doors.png',
        category: 'game_plan'
      }
    ],
    medical: [
      {
        id: 'event_medical',
        title: 'Health & Financial Wellness',
        helperText: 'Learn how to manage your investment during major life events.',
        content_type: 'Article',
        time_estimate: 3,
        img: 'assets/laptop.png',
        category: 'game_plan'
      }
    ],
    home_repair: [
      {
        id: 'event_repair',
        title: 'Plan a home renovation',
        helperText: 'Try our renovation calculator to see how much equity you can add with an upgrade',
        content_type: 'Calculator',
        time_estimate: 5,
        img: 'assets/desk.png',
        category: 'game_plan'
      },
      {
        id: 'event_repair_warranty',
        title: 'Avoid surprise costs with a home warranty',
        helperText: 'If you\'re worried about large repair bills, a home warranty is budget friendly and offers discounts on replacement appliances and systems',
        content_type: 'Guides & More',
        time_estimate: 10,
        img: 'assets/house-photo.jpg',
        category: 'prep_future'
      }
    ],
    property_transaction: [
      {
        id: 'event_property',
        title: 'Our guide to buying and selling',
        helperText: 'Learn how your HEI factors into your property transaction',
        content_type: 'Article',
        time_estimate: 10,
        img: 'assets/doors.png',
        category: 'game_plan'
      }
    ],
    disaster: [
      {
        id: 'event_disaster',
        title: 'Disaster Recovery',
        helperText: 'Contact a member of our team and we\'ll do everything we can to help you',
        content_type: 'Personal Coaching',
        time_estimate: 20,
        img: 'assets/doors.png',
        category: 'game_plan'
      }
    ],
    business: [
      {
        id: 'event_business',
        title: 'Business owner resources',
        helperText: 'Learn how to make the best use of funds',
        content_type: 'Personal Coaching',
        time_estimate: 12,
        img: 'assets/laptop.png',
        category: 'on_track'
      }
    ]
  },
  // --- Add financial_wellbeing recommendations ---
  financial_wellbeing: {
    financial_education: [
      {
        id: 'wellbeing_education',
        title: 'Explore the Financial Health Hub',
        helperText: 'Gain confidence and plan for the future with our free suite of personal finance tools, courses, and resources',
        content_type: 'Guides & More',
        time_estimate: 30,
        img: 'assets/laptop.png',
        category: 'prep_future'
      }
    ],
    increasing_liquidity: [
      {
        id: 'wellbeing_liquidity',
        title: 'Learn about Investment Increases',
        helperText: 'If you didn\'t take the full amount from Hometap the first time around, you may be able to access more of your own equity',
        content_type: 'Article',
        time_estimate: 5,
        img: 'assets/doors.png',
        category: 'on_track'
      }
    ],
    hei_questions: [
      {
        id: 'wellbeing_hei_faq',
        title: 'Answers to Common HEI Questions',
        helperText: 'Get answers to frequently asked questions about your Home Equity Investment',
        content_type: 'FAQ',
        time_estimate: 2,
        img: 'assets/room.png',
        category: 'game_plan'
      },
      {
        id: 'wellbeing_hei_contact',
        title: 'Contact the Hometap team',
        helperText: 'Schedule a time with our Investment Support team to learn anything you may want to know about your investment',
        content_type: 'Personal Coaching',
        time_estimate: 15,
        img: 'assets/desk.png',
        category: 'game_plan'
      }
    ],
    home_renovation: [
      {
        id: 'wellbeing_renovation',
        title: 'Planning a Home Renovation',
        helperText: 'Tips and calculators for planning your next home project.',
        content_type: 'Calculator',
        time_estimate: 5,
        img: 'assets/house-photo.jpg',
        category: 'prep_future'
      }
    ],
    lower_payments: [
      {
        id: 'wellbeing_payments_ownwell',
        title: 'Get help lowering your property taxes',
        helperText: 'Eligible homeowners can save an average of $1,100 on their property taxes with Ownwell',
        content_type: 'Guides & More',
        time_estimate: 10,
        img: 'assets/desk.png',
        category: 'game_plan'
      },
      {
        id: 'wellbeing_payments_enrich',
        title: 'Explore budget solutions with the Financial Health Hub',
        helperText: 'The Financial Health Hub offers a free suite of tools and resources to help you make the most of your money',
        content_type: 'Guides & More',
        time_estimate: 10,
        img: 'assets/laptop.png',
        category: 'game_plan'
      }
    ],
    other: [
      {
        id: 'wellbeing_other',
        title: 'Personalized Support',
        helperText: 'Contact our team for personalized support with your financial goals',
        content_type: 'Personal Coaching',
        time_estimate: 10,
        img: 'assets/desk.png',
        category: 'game_plan'
      }
    ]
  }
};

// --- State ---
let stepIndex = 0;
let answers = {};
let toastVisible = false;

// --- Edit mode state ---
let isEditMode = false;
let playbookState = null; // { grouped, alsoLike }

// --- Main Render Function ---
function render() {
  // Clear main content
  document.body.innerHTML = '';

  // Top nav
  renderTopNav();

  // Step/page rendering
  switch (getCurrentStepId()) {
    case 'landing':
      renderLanding();
      break;
    case 'goals_intro':
      renderGoalsIntro();
      break;
    case 'settlement_timeline':
    case 'settlement_funding':
    case 'commitment':
    case 'steps_taken':
    case 'life_events_past':
    case 'life_events_future':
    case 'financial_wellbeing':
      renderQuestionPage();
      break;
    case 'focus_areas_landing':
      renderFocusAreasLanding();
      break;
    case 'results_breakdown':
      renderResultsBreakdown();
      break;
    case 'loading':
      renderLoadingScreen();
      break;
    case 'customize_plan':
      renderCustomizePlan();
      break;
    case 'closing':
      renderClosingPage();
      break;
    default:
      renderLanding();
  }

  // Navigation (skip on customize_plan)
  if (getCurrentStepId() !== 'customize_plan') {
    renderNavButtons();
  }

  // Render toast if visible
  if (toastVisible) {
    renderToast();
  }
}

// --- Step/Flow Logic ---
const stepOrder = [
  'landing',
  'goals_intro',
  'settlement_timeline',
  'settlement_funding',
  'commitment',
  'steps_taken',
  'focus_areas_landing',
  'life_events_past',
  'life_events_future',
  'financial_wellbeing',
  'results_breakdown',
  'loading',
  'customize_plan',
  'closing'
];

function getCurrentStepId() {
  return stepOrder[stepIndex];
}

function goToNextStep() {
  // Special: after results_breakdown, show loading for 4s
  if (getCurrentStepId() === 'results_breakdown') {
    stepIndex++;
    render();
    setTimeout(() => {
      stepIndex++;
      render();
    }, 1000); // 1 second spinner
    return;
  }
  
  // Special: if on settlement_funding and toast is visible, dismiss it
  if (getCurrentStepId() === 'settlement_funding' && toastVisible) {
    toastVisible = false;
  }
  
  // Normal advance
  stepIndex++;
  render();
}

function goToPrevStep() {
  // Don't allow back from landing or customize_plan or closing
  if (stepIndex === 0 || getCurrentStepId() === 'customize_plan' || getCurrentStepId() === 'closing') return;
  
  // Special: if on loading, go back to results_breakdown
  if (getCurrentStepId() === 'loading') {
    stepIndex = stepOrder.indexOf('results_breakdown');
    render();
    return;
  }
  
  // Special: if toast is visible, hide it instead of going back
  if (toastVisible) {
    toastVisible = false;
    render();
    return;
  }
  
  stepIndex--;
  render();
}

// --- Render Functions (stubs/structure, to be filled in) ---
function renderTopNav() {
  // Remove any existing header
  const oldHeader = document.getElementById('prototype-header');
  if (oldHeader) oldHeader.remove();

  // Create header
  const header = document.createElement('header');
  header.id = 'prototype-header';
  header.style.position = 'sticky';
  header.style.top = '0';
  header.style.background = 'white';
  header.style.zIndex = '100';
  header.style.boxShadow = '0 2px 8px rgba(26,51,101,0.04)';
  header.style.display = 'flex';
  header.style.flexDirection = 'column';
  header.style.width = '100%';
  header.style.padding = '0';

  // Top row
  const topRow = document.createElement('div');
  topRow.style.display = 'flex';
  topRow.style.alignItems = 'center';
  topRow.style.justifyContent = 'space-between';
  topRow.style.height = '64px';
  topRow.style.padding = '0 40px';

  // Left: Home equity coach label
  const brand = document.createElement('div');
  brand.textContent = 'Home equity coach';
  brand.style.color = '#434C5E';
  brand.style.fontFamily = 'Mulish, sans-serif';
  brand.style.fontWeight = '700';
  brand.style.fontSize = '16px';
  brand.style.lineHeight = '26px';
  brand.style.letterSpacing = '0';
  brand.style.flex = '0 0 auto';
  topRow.appendChild(brand);

  // Center: Progress nav
  const nav = document.createElement('nav');
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';
  nav.style.justifyContent = 'center';
  nav.style.flex = '1 1 auto';
  nav.style.gap = '0';

  const sections = ['Settlement goals', 'Financial picture', 'Playbook'];
  const currentStep = getCurrentStepId();
  let activeSectionIdx = 0;
  if ([
    'focus_areas_landing', 'life_events_past', 'life_events_future', 'financial_wellbeing'
  ].includes(currentStep)) {
    activeSectionIdx = 1;
  } else if ([
    'results_breakdown', 'loading', 'customize_plan', 'closing'
  ].includes(currentStep)) {
    activeSectionIdx = 2;
  }

  sections.forEach((section, idx) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.textContent = section;
    sectionDiv.style.fontFamily = 'Mulish, sans-serif';
    sectionDiv.style.fontWeight = '700';
    sectionDiv.style.fontSize = '16px';
    sectionDiv.style.lineHeight = '26px';
    sectionDiv.style.color = idx === activeSectionIdx ? '#366CED' : '#687183';
    sectionDiv.style.transition = 'color 0.3s';
    sectionDiv.style.margin = '0 12px';
    nav.appendChild(sectionDiv);
    if (idx < sections.length - 1) {
      // Dot and line separator
      const sep = document.createElement('span');
      sep.innerHTML = `<svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#D1D6DF"/><rect x="8" y="3" width="24" height="2" rx="1" fill="#D1D6DF"/><circle cx="36" cy="4" r="4" fill="#D1D6DF"/></svg>`;
      sep.style.display = 'inline-block';
      sep.style.verticalAlign = 'middle';
      sep.style.margin = '0 0px';
      nav.appendChild(sep);
    }
  });
  topRow.appendChild(nav);

  // Right: Save & Exit or I'm done button
  const saveExit = document.createElement('button');
  // If on customize_plan, change label and behavior
  if (getCurrentStepId() === 'customize_plan') {
    saveExit.textContent = "I'm done";
    saveExit.onclick = () => {
      window.location.href = 'https://asigel-hometap.github.io/check-in/success';
    };
  } else {
    saveExit.textContent = 'Save & Exit';
    saveExit.onclick = () => { /* existing or default behavior */ };
  }
  saveExit.style.background = 'white';
  saveExit.style.color = '#434C5E';
  saveExit.style.fontFamily = 'Mulish, sans-serif';
  saveExit.style.fontWeight = '600';
  saveExit.style.fontSize = '15px';
  saveExit.style.border = '1px solid #D1D6DF';
  saveExit.style.borderRadius = '6px';
  saveExit.style.padding = '8px 20px';
  saveExit.style.cursor = 'pointer';
  saveExit.style.boxShadow = '0 1px 2px rgba(26,51,101,0.04)';
  saveExit.style.transition = 'background 0.2s, color 0.2s';
  saveExit.onmouseover = () => { saveExit.style.background = '#F5F7FA'; };
  saveExit.onmouseout = () => { saveExit.style.background = 'white'; };
  topRow.appendChild(saveExit);

  header.appendChild(topRow);

  // Progress bar
  const progressBar = document.createElement('div');
  progressBar.style.display = 'flex';
  progressBar.style.height = '4px';
  progressBar.style.width = '100%';
  progressBar.style.background = '#D1D6DF';
  progressBar.style.marginTop = '0px';
  progressBar.style.transition = 'background 0.3s';

  // Three sections
  for (let i = 0; i < 3; i++) {
    const sectionBar = document.createElement('div');
    sectionBar.style.flex = '1';
    sectionBar.style.transition = 'background 0.5s';
    sectionBar.style.background = i <= activeSectionIdx ? '#366CED' : '#D1D6DF';
    progressBar.appendChild(sectionBar);
  }
  header.appendChild(progressBar);

  // Add Mulish font if not present
  if (!document.getElementById('mulish-font-link')) {
    const fontLink = document.createElement('link');
    fontLink.id = 'mulish-font-link';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap';
    document.head.appendChild(fontLink);
  }

  // Add header to body (before main content)
  document.body.insertBefore(header, document.body.firstChild);
}

function renderLanding() {
  // Remove any existing header/footer
  const oldHeader = document.getElementById('prototype-header');
  if (oldHeader) oldHeader.remove();
  const oldFooter = document.getElementById('prototype-footer');
  if (oldFooter) oldFooter.remove();

  // Add landing page styles if not present
  if (!document.getElementById('prototype-landing-style')) {
    const style = document.createElement('style');
    style.id = 'prototype-landing-style';
    style.textContent = `
      .landing-root {
        display: flex;
        min-height: 100vh;
        background: #FAFBFC;
      }
      .landing-sidebar {
        width: 320px;
        background: #fff;
        border-right: 1px solid #F0F2F5;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 32px 0 0 0;
        min-height: 100vh;
      }
      .landing-sidebar .sidebar-header {
        padding: 0 32px 32px 32px;
        border-bottom: 1px solid #F0F2F5;
        margin-bottom: 24px;
      }
      .landing-sidebar .sidebar-header .address {
        font-family: 'Mulish', sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: #152033;
      }
      .landing-sidebar .sidebar-header .city {
        font-family: 'Mulish', sans-serif;
        font-size: 15px;
        color: #687183;
        margin-top: 2px;
      }
      .landing-sidebar .sidebar-nav {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0 32px;
      }
      .landing-sidebar .sidebar-nav .nav-item {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        color: #434C5E;
        padding: 10px 12px;
        border-radius: 8px;
        cursor: default;
      }
      .landing-sidebar .sidebar-nav .nav-item.active {
        background: #F5F7FA;
        color: #366CED;
        font-weight: 700;
      }
      .landing-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background: #FAFBFC;
        min-height: 100vh;
        position: relative;
      }
      .landing-card {
        margin-top: 64px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 16px rgba(26, 51, 101, 0.08);
        display: flex;
        align-items: center;
        padding: 48px 56px 48px 48px;
        max-width: 900px;
        width: 100%;
        min-height: 320px;
      }
      .landing-card-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .landing-card .time-badge {
        font-family: 'Mulish', sans-serif;
        font-size: 13px;
        font-weight: 700;
        color: #687183;
        background: #F5F7FA;
        border-radius: 6px;
        padding: 4px 12px;
        margin-bottom: 16px;
        display: inline-block;
      }
      .landing-card .landing-title {
        font-family: 'Tiempos Headline', serif;
        font-size: 32px;
        font-weight: 700;
        color: #152033;
        margin-bottom: 12px;
      }
      .landing-card .landing-description {
        font-family: 'Mulish', sans-serif;
        font-size: 20px;
        color: #434C5E;
        margin-bottom: 32px;
        line-height: 1.4;
      }
      .landing-card .get-started-btn {
        border-radius: 6px;
        background: #366CED;
        color: #FFF;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        padding: 16px 32px;
        border: none;
        cursor: pointer;
        box-shadow: 0 1px 2px rgba(26,51,101,0.04);
        transition: background 0.2s;
      }
      .landing-card .get-started-btn:hover {
        background: #2852b9;
      }
      .landing-card-image {
        flex: 0 0 auto;
        margin-left: 40px;
        width: 320px;
        height: 220px;
        background: url('assets/couch-dog.png') center/contain no-repeat;
        border-radius: 12px;
      }
    `;
    document.head.appendChild(style);
  }

  // Root container
  const root = document.createElement('div');
  root.className = 'landing-root';

  // Sidebar
  const sidebar = document.createElement('div');
  sidebar.className = 'landing-sidebar';
  sidebar.innerHTML = `
    <div class="sidebar-header">
      <div class="address">2 Second Rd</div>
      <div class="city">Cleveland, OH 44113</div>
    </div>
    <div class="sidebar-nav">
      <div class="nav-item">Overview</div>
      <div class="nav-item">Investments</div>
      <div class="nav-item active">Home equity coach</div>
      <div class="nav-item">Home equity forecast</div>
      <div class="nav-item">Scenario planner</div>
      <div class="nav-item">Resources</div>
    </div>
  `;
  root.appendChild(sidebar);

  // Main content
  const main = document.createElement('div');
  main.className = 'landing-main';

  const card = document.createElement('div');
  card.className = 'landing-card';

  const cardContent = document.createElement('div');
  cardContent.className = 'landing-card-content';
  cardContent.innerHTML = `
    <div class="time-badge">5 MINUTES</div>
    <div class="landing-title">Home equity coach</div>
    <div class="landing-description">Get a personalized playbook to tackle homeownership and your financial goals</div>
  `;
  const getStarted = document.createElement('button');
  getStarted.className = 'get-started-btn';
  getStarted.textContent = 'Get started';
  getStarted.onclick = goToNextStep;
  cardContent.appendChild(getStarted);
  card.appendChild(cardContent);

  // Illustration
  const cardImage = document.createElement('div');
  cardImage.className = 'landing-card-image';
  card.appendChild(cardImage);

  main.appendChild(card);
  root.appendChild(main);

  document.body.innerHTML = '';
  document.body.appendChild(root);
}

function renderGoalsIntro() {
  renderTopNav();

  // Remove only the main content, not the header
  let mainContent = document.getElementById('goals-intro-main-content');
  if (mainContent) mainContent.remove();

  // Add goals intro styles if not present
  if (!document.getElementById('prototype-goals-intro-style')) {
    const style = document.createElement('style');
    style.id = 'prototype-goals-intro-style';
    style.textContent = `
      .goals-intro-root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        width: 100%;
      }
      .goals-intro-card {
        margin-top: 64px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 16px rgba(26, 51, 101, 0.08);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px 48px;
        gap: 32px;
        max-width: 900px;
        width: 750px;
      }
      .goals-intro-label {
        font-family: 'Mulish', sans-serif;
        font-size: 13px;
        font-weight: 700;
        color: #919aac;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        margin-bottom: 12px;
      }
      .goals-intro-title {
        font-family: 'Tiempos Headline', serif;
        font-size: 32px;
        font-weight: 700;
        color: #152033;
        margin-bottom: 12px;
        line-height: 40px;
        text-align: left;
      }
      .goals-intro-title .blue {
        color: #366CED;
        font-weight: 700;
      }
      .goals-intro-desc {
        font-family: 'Mulish', sans-serif;
        font-size: 20px;
        color: #434C5E;
        margin-bottom: 20px;
        line-height: 1.4;
        text-align: left;
      }
      .goals-intro-timeline-card {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 16px rgba(26, 51, 101, 0.08);
        padding: 32px 32px 24px 32px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
      }
      .goals-intro-timeline-bar {
        width: 100%;
        height: 20px;
        border-radius: 4px;
        background: transparent;
        overflow: visible;
        margin-bottom: 32px;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .goals-intro-timeline-segment {
        height: 100%;
        border-radius: 4px;
        margin-right: 4px;
        background: #e9ecf5;
        flex: 1;
        position: relative;
        transition: background 0.5s;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      .goals-intro-timeline-segment.filled {
        background: #0C2E7D;
      }
      .goals-intro-timeline-segment.partial {
        background: linear-gradient(to right, #0C2E7D 50%, #e9ecf5 50%);
      }
      .goals-intro-timeline-today-circle {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border-radius: 20px;
        border: 4px solid #FFF;
        background: #0C2E7D;
        box-shadow: 0px 2px 10px 0px rgba(32, 53, 104, 0.12);
        z-index: 11;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .goals-intro-timeline-label {
        position: absolute;
        top: -44px;
        left: 0;
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #1a3365;
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(26,51,101,0.08);
        padding: 4px 12px;
        white-space: nowrap;
        z-index: 12;
        min-width: 48px;
        text-align: center;
        transform: translateX(-50%);
        pointer-events: none;
      }
      .goals-intro-timeline-label::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #fff;
        filter: drop-shadow(0 2px 4px rgba(26,51,101,0.08));
      }
      .goals-intro-timeline-years {
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        color: #919aac;
        margin-top: 8px;
      }
      .goals-intro-address {
        display: flex;
        align-items: center;
        font-family: 'Mulish', sans-serif;
        font-size: 18px;
        color: #434C5E;
        margin-bottom: 16px;
        gap: 8px;
        font-weight: 600;
      }
      .goals-intro-address .home-icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
      }
      .goals-intro-timeline-legend {
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        color: #152033;
        margin-top: 12px;
        font-weight: 600;
      }
      .goals-intro-timeline-legend-dot {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: #0C2E7D;
        display: inline-block;
      }
    `;
    document.head.appendChild(style);
  }

  // Main root
  const root = document.createElement('div');
  root.className = 'goals-intro-root';
  root.id = 'goals-intro-main-content';

  // Card
  const card = document.createElement('div');
  card.className = 'goals-intro-card';

  // Section label
  const label = document.createElement('div');
  label.className = 'goals-intro-label';
  label.textContent = 'Goals';
  card.appendChild(label);

  // Title (with blue highlight)
  const title = document.createElement('div');
  title.className = 'goals-intro-title';
  title.innerHTML = `Let's chat about your <span class="blue">settlement goals</span>`;
  card.appendChild(title);

  // Description
  const desc = document.createElement('div');
  desc.className = 'goals-intro-desc';
  desc.textContent = `Your answers won’t affect your Investment — they’ll just help us share resources to get you where you want to go`;
  card.appendChild(desc);

  // Timeline card
  const timelineCard = document.createElement('div');
  timelineCard.className = 'goals-intro-timeline-card';

  // Address row (above timeline)
  const address = '2 Second Rd., Cleveland, OH 44113';
  const addressRow = document.createElement('div');
  addressRow.className = 'goals-intro-address';
  addressRow.innerHTML = `<img class="home-icon" src="assets/house.svg" alt="Home"> ${address}`;
  timelineCard.appendChild(addressRow);

  // Timeline bar with segments and today marker
  const effectiveDate = new Date('2021-05-01');
  const deadlineDate = new Date('2031-05-01');
  const today = new Date('2025-07-01');
  const totalMs = deadlineDate - effectiveDate;
  const elapsedMs = today - effectiveDate;
  const elapsedPct = Math.max(0, Math.min(100, (elapsedMs / totalMs) * 100));
  const startYear = effectiveDate.getFullYear();
  const endYear = deadlineDate.getFullYear();
  const years = [];
  for (let y = startYear; y <= endYear; y += 1) years.push(y);
  const numSegments = years.length - 1;

  const timelineBar = document.createElement('div');
  timelineBar.className = 'goals-intro-timeline-bar';

  // Render segments (only blue for elapsed, grey for the rest)
  for (let i = 0; i < numSegments; i++) {
    const segStart = new Date(startYear + i, 4, 1).getTime();
    const segEnd = new Date(startYear + i + 1, 4, 1).getTime();
    const segTotal = segEnd - segStart;
    const segElapsed = Math.max(0, Math.min(segTotal, today - segStart));
    const segPct = segElapsed / segTotal;
    let segmentClass = 'goals-intro-timeline-segment';
    if (today > segEnd) {
      segmentClass += ' filled';
    } else if (today >= segStart && today <= segEnd) {
      segmentClass += ' partial';
    }
    const segment = document.createElement('div');
    segment.className = segmentClass;
    if (segmentClass.includes('partial')) {
      segment.style.background = `linear-gradient(to right, #0C2E7D ${segPct * 100}%, #e9ecf5 ${segPct * 100}%)`;
    }
    timelineBar.appendChild(segment);
  }

  // Add today circle and caret
  const segments = timelineBar.querySelectorAll('.goals-intro-timeline-segment');
  let todaySegmentIdx = 0;
  let todaySegmentPct = 0;
  for (let i = 0; i < numSegments; i++) {
    const segStart = new Date(startYear + i, 4, 1).getTime();
    const segEnd = new Date(startYear + i + 1, 4, 1).getTime();
    if (today >= segStart && today <= segEnd) {
      todaySegmentIdx = i;
      todaySegmentPct = (today - segStart) / (segEnd - segStart);
      break;
    }
  }
  if (segments.length > 0) {
    const seg = segments[todaySegmentIdx];
    setTimeout(() => {
      const left = seg.offsetLeft + seg.offsetWidth * todaySegmentPct;
      // Today circle
      let todayCircle = document.createElement('div');
      todayCircle.className = 'goals-intro-timeline-today-circle';
      todayCircle.style.left = `${left}px`;
      timelineBar.appendChild(todayCircle);
      // Caret label
      let todayLabel = document.createElement('div');
      todayLabel.className = 'goals-intro-timeline-label';
      todayLabel.innerText = 'Today';
      todayLabel.style.left = `${left}px`;
      timelineBar.appendChild(todayLabel);
    }, 0);
  }
  timelineCard.appendChild(timelineBar);

  // Years (every other year)
  const yearsRow = document.createElement('div');
  yearsRow.className = 'goals-intro-timeline-years';
  years.forEach((y, i) => {
    if (i % 2 === 0) {
      const year = document.createElement('div');
      year.textContent = y;
      yearsRow.appendChild(year);
    } else {
      const spacer = document.createElement('div');
      spacer.textContent = '';
      yearsRow.appendChild(spacer);
    }
  });
  timelineCard.appendChild(yearsRow);

  // Legend
  const legend = document.createElement('div');
  legend.className = 'goals-intro-timeline-legend';
  legend.innerHTML = `<span class="goals-intro-timeline-legend-dot"></span> HEI to date`;
  timelineCard.appendChild(legend);

  card.appendChild(timelineCard);
  root.appendChild(card);

  document.body.appendChild(root);
}

// Update renderNavButtons to accept custom continue label
function renderNavButtons(continueLabel) {
  // Hide footer on landing page
  if (getCurrentStepId() === 'landing') return;

  // Remove any existing footer
  const oldFooter = document.getElementById('prototype-footer');
  if (oldFooter) oldFooter.remove();

  const navContainer = document.createElement('div');
  navContainer.id = 'prototype-footer';
  navContainer.style.position = 'fixed';
  navContainer.style.left = '0';
  navContainer.style.right = '0';
  navContainer.style.bottom = '0';
  navContainer.style.background = 'white';
  navContainer.style.display = 'flex';
  navContainer.style.justifyContent = 'space-between';
  navContainer.style.alignItems = 'center';
  navContainer.style.padding = '24px 40px 24px 40px';
  navContainer.style.boxShadow = '0 -2px 8px rgba(26,51,101,0.04)';
  navContainer.style.zIndex = '200';

  const backButton = document.createElement('button');
  backButton.textContent = 'Back';
  backButton.onclick = goToPrevStep;
  backButton.style.display = 'flex';
  backButton.style.justifyContent = 'center';
  backButton.style.alignItems = 'center';
  backButton.style.gap = '10px';
  backButton.style.height = '68px';
  backButton.style.padding = '16px 24px';
  backButton.style.background = 'none';
  backButton.style.color = '#366CED';
  backButton.style.fontFamily = 'Mulish, sans-serif';
  backButton.style.fontWeight = '700';
  backButton.style.fontSize = '16px';
  backButton.style.lineHeight = '24px';
  backButton.style.border = 'none';
  backButton.style.borderRadius = '6px';
  backButton.style.cursor = 'pointer';
  backButton.style.transition = 'background 0.2s, color 0.2s';
  backButton.style.outline = 'none';
  if (stepIndex === 0 || getCurrentStepId() === 'customize_plan' || getCurrentStepId() === 'closing') {
    backButton.disabled = true;
    backButton.style.opacity = '0.5';
    backButton.style.cursor = 'default';
  }
  navContainer.appendChild(backButton);

  const continueButton = document.createElement('button');
  continueButton.textContent = continueLabel || 'Continue';
  continueButton.onclick = goToNextStep;
  continueButton.style.display = 'flex';
  continueButton.style.justifyContent = 'center';
  continueButton.style.alignItems = 'center';
  continueButton.style.gap = '10px';
  continueButton.style.height = '68px';
  continueButton.style.padding = '16px 24px';
  continueButton.style.borderRadius = '6px';
  continueButton.style.background = '#366CED';
  continueButton.style.color = '#FFF';
  continueButton.style.textAlign = 'center';
  continueButton.style.fontFamily = 'Mulish, sans-serif';
  continueButton.style.fontSize = '16px';
  continueButton.style.fontWeight = '700';
  continueButton.style.lineHeight = '24px';
  continueButton.style.border = 'none';
  continueButton.style.cursor = 'pointer';
  continueButton.style.transition = 'background 0.2s, color 0.2s';
  continueButton.style.boxShadow = '0 1px 2px rgba(26,51,101,0.04)';
  continueButton.style.outline = 'none';
  if (getCurrentStepId() === 'closing') {
    continueButton.disabled = true;
    continueButton.style.opacity = '0.5';
    continueButton.style.cursor = 'default';
  }
  navContainer.appendChild(continueButton);

  document.body.appendChild(navContainer);
}

function renderResultsBreakdown() {
  // Remove any existing main content
  let mainContent = document.getElementById('results-breakdown-main-content');
  if (mainContent) mainContent.remove();

  // Add styles for results breakdown if not present
  if (!document.getElementById('prototype-results-breakdown-style')) {
    const style = document.createElement('style');
    style.id = 'prototype-results-breakdown-style';
    style.textContent = `
      .results-breakdown-root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        width: 100%;
      }
      .results-breakdown-card {
        margin: 64px auto 0 auto;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 16px rgba(26, 51, 101, 0.08);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px 48px;
        gap: 32px;
        max-width: 900px;
        width: 750px;
      }
      .results-breakdown-label {
        font-family: 'Mulish', sans-serif;
        font-size: 13px;
        font-weight: 700;
        color: #919aac;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        margin-bottom: 12px;
      }
      .results-breakdown-title {
        font-family: 'Tiempos Headline', serif;
        font-size: 32px;
        font-weight: 700;
        color: #152033;
        margin-bottom: 12px;
        line-height: 40px;
        text-align: left;
      }
      .results-breakdown-desc {
        font-family: 'Mulish', sans-serif;
        font-size: 20px;
        color: #434C5E;
        margin-bottom: 20px;
        line-height: 1.4;
        text-align: left;
      }
      .results-breakdown-timeline-card {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 16px rgba(26, 51, 101, 0.08);
        padding: 32px 32px 24px 32px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
      }
      .results-breakdown-timeline-bar {
        width: 100%;
        height: 20px;
        border-radius: 4px;
        background: transparent;
        overflow: visible;
        margin-bottom: 32px;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .results-breakdown-timeline-segment {
        height: 100%;
        border-radius: 4px;
        margin-right: 4px;
        background: #e9ecf5;
        flex: 1;
        position: relative;
        transition: background 0.5s;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      .results-breakdown-timeline-segment.filled {
        background: #0C2E7D;
      }
      .results-breakdown-timeline-segment.purple {
        background: #b79cff;
      }
      .results-breakdown-timeline-segment.partial {
        background: linear-gradient(to right, #0C2E7D 50%, #e9ecf5 50%);
      }
      .results-breakdown-timeline-today-circle {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border-radius: 20px;
        border: 4px solid #FFF;
        background: #0C2E7D;
        box-shadow: 0px 2px 10px 0px rgba(32, 53, 104, 0.12);
        z-index: 11;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .results-breakdown-timeline-label {
        position: absolute;
        top: -44px;
        left: 0;
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #1a3365;
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(26,51,101,0.08);
        padding: 4px 12px;
        white-space: nowrap;
        z-index: 12;
        min-width: 48px;
        text-align: center;
        transform: translateX(-50%);
        pointer-events: none;
      }
      .results-breakdown-timeline-label::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #fff;
        filter: drop-shadow(0 2px 4px rgba(26,51,101,0.08));
      }
      .results-breakdown-timeline-years {
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        color: #919aac;
        margin-top: 8px;
      }
      .results-breakdown-timeline-legend {
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        color: #152033;
        margin-top: 12px;
        font-weight: 600;
      }
      .results-breakdown-timeline-legend-dot {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: #0C2E7D;
        display: inline-block;
      }
      .results-breakdown-timeline-legend-dot-purple {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: #b79cff;
        display: inline-block;
      }
      .results-breakdown-focus-areas-section {
        margin-top: 32px;
        width: 100%;
      }
      .results-breakdown-focus-areas-title {
        font-family: 'Mulish', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #152033;
        margin-bottom: 16px;
      }
      .results-breakdown-focus-area-item {
        background: #F5F7FA;
        border-radius: 8px;
        padding: 16px 20px;
        margin-bottom: 12px;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        color: #434C5E;
        line-height: 1.5;
        display: inline-block;
        margin-right: 12px;
      }
      .results-breakdown-focus-areas-group {
        margin-bottom: 24px;
      }
      .results-breakdown-focus-areas-group-title {
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #366CED;
        margin-bottom: 8px;
      }
    `;
    document.head.appendChild(style);
  }

  // Main root
  const root = document.createElement('div');
  root.className = 'results-breakdown-root';
  root.id = 'results-breakdown-main-content';
  root.style.paddingBottom = "120px";

  // Card
  const card = document.createElement('div');
  card.className = 'results-breakdown-card';

  // Section label
  const label = document.createElement('div');
  label.className = 'results-breakdown-label';
  label.textContent = 'YOUR RESULTS';
  card.appendChild(label);

  // Title
  const title = document.createElement('div');
  title.className = 'results-breakdown-title';
  title.textContent = "Here's what we learned about your goals";
  card.appendChild(title);

  // --- Dynamic summary sentence ---
  let summarySentence = '';
  const timelineMap = {
    within_year: 'in the next 12 months',
    within_three_years: 'in 1 to 3 years',
    more_than_three_years: 'in more than 3 years',
    not_sure: 'at a future date to be determined'
  };
  const fundingMap = {
    refinancing: 'a refinance',
    cash_savings: 'cash savings',
    loan_heloc: 'a home equity loan or HELOC',
    home_sale: 'a home sale',
    not_sure: 'a method to be determined'
  };
  if (answers.settlement_timeline) {
    const timelineText = timelineMap[answers.settlement_timeline] || '';
    const fundingText = fundingMap[answers.settlement_funding] || '';
    const dynamicPart = `${fundingText ? 'through ' + fundingText + ' ' : ''}${timelineText}`;
    summarySentence = `You plan to settle your HEI <b>${dynamicPart}</b>.`;
  }
  if (summarySentence) {
    const desc = document.createElement('div');
    desc.className = 'results-breakdown-desc';
    desc.innerHTML = summarySentence;
    card.appendChild(desc);
  }

  // --- Timeline visualization (year-based segments with white lines/gaps) ---
  const effectiveDate = new Date('2021-05-01');
  const deadlineDate = new Date('2031-05-01');
  const today = new Date();
  const startYear = effectiveDate.getFullYear();
  const endYear = deadlineDate.getFullYear();
  const years = [];
  for (let y = startYear; y <= endYear; y += 1) years.push(y);
  const numSegments = years.length - 1;

  // Calculate purple segment (possible settlement window) based on answer
  let purpleStartDate = null, purpleEndDate = null;
  if (answers.settlement_timeline === 'within_year') {
    purpleStartDate = today;
    purpleEndDate = new Date(today);
    purpleEndDate.setFullYear(today.getFullYear() + 1);
  } else if (answers.settlement_timeline === 'within_three_years') {
    purpleStartDate = today;
    purpleEndDate = new Date(today);
    purpleEndDate.setFullYear(today.getFullYear() + 3);
  } else if (answers.settlement_timeline === 'more_than_three_years') {
    purpleStartDate = new Date(today);
    purpleStartDate.setFullYear(today.getFullYear() + 3);
    purpleEndDate = new Date(today);
    purpleEndDate.setFullYear(today.getFullYear() + 5);
  }
  // Clamp purpleEndDate to deadline
  if (purpleEndDate && purpleEndDate > deadlineDate) purpleEndDate = new Date(deadlineDate);
  if (purpleStartDate && purpleStartDate > deadlineDate) purpleStartDate = new Date(deadlineDate);

  // Timeline card
  const timelineCard = document.createElement('div');
  timelineCard.className = 'results-breakdown-timeline-card';

  // Address row (above timeline)
  const address = '2 Second Rd., Cleveland, OH 44113';
  const addressRow = document.createElement('div');
  addressRow.className = 'goals-intro-address';
  addressRow.innerHTML = `<img class="home-icon" src="assets/house.svg" alt="Home"> ${address}`;
  timelineCard.appendChild(addressRow);

  // Timeline bar with year-based segments
  const timelineBar = document.createElement('div');
  timelineBar.className = 'results-breakdown-timeline-bar';
  for (let i = 0; i < numSegments; i++) {
    const segStart = new Date(startYear + i, 4, 1).getTime();
    const segEnd = new Date(startYear + i + 1, 4, 1).getTime();
    let segmentClass = 'results-breakdown-timeline-segment';
    // Determine color for this segment
    if (today > segEnd) {
      segmentClass += ' filled';
    } else if (
      purpleStartDate && purpleEndDate &&
      segEnd > purpleStartDate.getTime() && segStart < purpleEndDate.getTime()
    ) {
      segmentClass += ' purple';
    }
    const segment = document.createElement('div');
    segment.className = segmentClass;
    timelineBar.appendChild(segment);
  }

  // Add today circle and caret
  const segments = timelineBar.querySelectorAll('.results-breakdown-timeline-segment');
  let todaySegmentIdx = 0;
  let todaySegmentPct = 0;
  for (let i = 0; i < numSegments; i++) {
    const segStart = new Date(startYear + i, 4, 1).getTime();
    const segEnd = new Date(startYear + i + 1, 4, 1).getTime();
    if (today >= segStart && today <= segEnd) {
      todaySegmentIdx = i;
      todaySegmentPct = (today - segStart) / (segEnd - segStart);
      break;
    }
  }
  if (segments.length > 0) {
    const seg = segments[todaySegmentIdx];
    setTimeout(() => {
      const left = seg.offsetLeft + seg.offsetWidth * todaySegmentPct;
      // Today circle
      let todayCircle = document.createElement('div');
      todayCircle.className = 'results-breakdown-timeline-today-circle';
      todayCircle.style.left = `${left}px`;
      timelineBar.appendChild(todayCircle);
      // Caret label
      let todayLabel = document.createElement('div');
      todayLabel.className = 'results-breakdown-timeline-label';
      todayLabel.innerText = 'Today';
      todayLabel.style.left = `${left}px`;
      timelineBar.appendChild(todayLabel);
    }, 0);
  }
  timelineCard.appendChild(timelineBar);

  // Years (every other year)
  const yearsRow = document.createElement('div');
  yearsRow.className = 'results-breakdown-timeline-years';
  years.forEach((y, i) => {
    if (i % 2 === 0) {
      const year = document.createElement('div');
      year.textContent = y;
      yearsRow.appendChild(year);
    } else {
      const spacer = document.createElement('div');
      spacer.textContent = '';
      yearsRow.appendChild(spacer);
    }
  });
  timelineCard.appendChild(yearsRow);

  // Legend
  const legend = document.createElement('div');
  legend.className = 'results-breakdown-timeline-legend';
  legend.innerHTML = `<span class="results-breakdown-timeline-legend-dot"></span> HEI to date &nbsp;&nbsp; <span class="results-breakdown-timeline-legend-dot-purple"></span> Possible settlement window`;
  timelineCard.appendChild(legend);

  card.appendChild(timelineCard);

  // --- Financial picture section: Focusing on, Preparing for, Managing ---
  const focusGroups = [
    {
      key: 'financial_wellbeing',
      label: 'Focusing on',
      answers: answers.financial_wellbeing,
    },
    {
      key: 'life_events_future',
      label: 'Preparing for',
      answers: answers.life_events_future,
    },
    {
      key: 'life_events_past',
      label: 'Managing',
      answers: answers.life_events_past,
    },
  ];
  const hasAnyFocus = focusGroups.some(g => Array.isArray(g.answers) && g.answers.length > 0);
  if (hasAnyFocus) {
    const focusSection = document.createElement('div');
    focusSection.className = 'results-breakdown-focus-areas-section';
    const focusTitle = document.createElement('div');
    focusTitle.className = 'results-breakdown-focus-areas-title';
    focusTitle.textContent = 'Financial picture';
    focusSection.appendChild(focusTitle);
    focusGroups.forEach(group => {
      if (Array.isArray(group.answers) && group.answers.length > 0) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'results-breakdown-focus-areas-group';
        const groupTitle = document.createElement('div');
        groupTitle.className = 'results-breakdown-focus-areas-group-title';
        groupTitle.textContent = group.label;
        groupDiv.appendChild(groupTitle);
        group.answers.forEach(val => {
          const question = questions.find(q => q.id === group.key);
          const opt = question && question.options.find(o => o.value === val);
          if (opt) {
            const item = document.createElement('span');
            item.className = 'results-breakdown-focus-area-item';
            item.textContent = opt.text;
            groupDiv.appendChild(item);
          }
        });
        groupDiv.style.maxWidth = 'none';
        groupDiv.style.width = '100%';
        focusSection.appendChild(groupDiv);
      }
    });
    card.appendChild(focusSection);
  }

  root.appendChild(card);
  document.body.appendChild(root);
}

function renderLoadingScreen() {
  // Remove any existing loading content
  document.body.innerHTML = '';

  // Add loading screen styles if not present
  if (!document.getElementById('prototype-loading-style')) {
    const style = document.createElement('style');
    style.id = 'prototype-loading-style';
    style.textContent = `
      .loading-root {
        min-height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, rgba(250, 251, 252, 0.75) 15%, rgba(225, 233, 252, 0.56) 92.87%), #FFF;
      }
      .loading-card {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 16px rgba(26, 51, 101, 0.08);
        padding: 48px 56px;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 340px;
        min-height: 200px;
      }
      .loading-title {
        font-family: 'Tiempos Headline', serif;
        font-size: 28px;
        font-weight: 700;
        color: #152033;
        margin-bottom: 32px;
        text-align: center;
        line-height: 40px;
      }
      .loading-spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #366CED;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 0 auto;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // Root container
  const root = document.createElement('div');
  root.className = 'loading-root';

  // Card
  const card = document.createElement('div');
  card.className = 'loading-card';

  // Title
  const title = document.createElement('div');
  title.className = 'loading-title';
  title.textContent = 'Building your playbook';
  card.appendChild(title);

  // Spinner
  const spinner = document.createElement('div');
  spinner.className = 'loading-spinner';
  card.appendChild(spinner);

  root.appendChild(card);
  document.body.appendChild(root);
}

function renderCustomizePlan() {
  // Remove any existing wrapper/sidebar/main content
  const oldWrapper = document.getElementById('customize-wrapper');
  if (oldWrapper) oldWrapper.remove();
  const oldSidebar = document.querySelector('.customize-sidebar');
  if (oldSidebar) oldSidebar.remove();
  const oldMain = document.querySelector('.customize-main-content');
  if (oldMain) oldMain.remove();

  // Add styles for recommendation cards, sidebar, and wrapper if not present
  if (!document.getElementById('prototype-recommendation-card-style')) {
    const style = document.createElement('style');
    style.id = 'prototype-recommendation-card-style';
    style.textContent = `
      .customize-wrapper {
        display: flex;
        flex-direction: row;
        min-height: 100vh;
        width: 100vw;
        background: none;
      }
      .customize-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        min-width: 300px;
        width: 300px;
        height: 100vh;
        background: #fff;
        border-right: 1px solid #F0F2F5;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(26,51,101,0.04);
      }
      .customize-sidebar-logo {
        width: 48px;
        height: 48px;
        margin: 32px 0 24px 32px;
      }
      .customize-sidebar-address {
        font-family: 'Mulish', sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: #152033;
        margin-left: 32px;
        margin-bottom: 2px;
      }
      .customize-sidebar-city {
        font-family: 'Mulish', sans-serif;
        font-size: 15px;
        color: #687183;
        margin-left: 32px;
        margin-bottom: 24px;
      }
      .customize-sidebar-nav {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-left: 0;
        width: 100%;
        margin-top: 12px;
      }
      .customize-sidebar-nav-item {
        display: flex;
        align-items: center;
        gap: 16px;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        color: #434C5E;
        padding: 12px 32px;
        border-radius: 8px 0 0 8px;
        cursor: default;
        margin-right: 24px;
        transition: background 0.2s, color 0.2s;
      }
      .customize-sidebar-nav-item.active {
        background: #F5F7FA;
        color: #366CED;
        font-weight: 700;
      }
      .customize-sidebar-nav-icon {
        width: 24px;
        height: 24px;
        background: #E5E8EF;
        border-radius: 6px;
        display: inline-block;
      }
      .customize-main-content {
        margin-left: 300px;
        width: calc(100vw - 300px);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0 40px 0;
        min-height: 100vh;
        background: none;
      }
      .customize-header-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 32px;
        margin-top: 8px;
      }
      .customize-header-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
      }
      .customize-header-label {
        color: #434C5E;
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        margin-bottom: 0;
      }
      .customize-header-title {
        color: #152033;
        font-family: 'Tiempos Headline', serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px;
        margin-bottom: 0;
      }
      .customize-header-dates {
        color: #434C5E;
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        margin-bottom: 0;
      }
      .customize-header-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #E7EEFF;
        color: #366CED;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        font-weight: 700;
        border-radius: 8px;
        padding: 8px 20px;
        height: 40px;
        min-width: 120px;
        justify-content: center;
        box-shadow: none;
        letter-spacing: 0.5px;
        margin-top: 8px;
      }
      .customize-header-badge img {
        width: 20px;
        height: 20px;
        margin-right: 4px;
        display: inline-block;
      }
      .rec-category-group {
        margin-bottom: 36px;
        width: 100%;
        max-width: 900px;
      }
      .rec-category-title {
        font-family: 'Tiempos Headline', serif;
        font-size: 24px;
        font-weight: 700;
        color: #152033;
        margin-bottom: 18px;
        margin-left: 8px;
        margin-top: 70px;
        text-align: left;
      }
      .recommendation-card {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 24px;
        border-radius: 12px;
        background: #FFF;
        box-shadow: 0px 2px 10px 0px rgba(32, 53, 104, 0.12);
        padding: 24px 32px;
        margin-bottom: 24px;
        max-width: 900px;
        width: 100%;
        transition: box-shadow 0.2s;
      }
      .recommendation-card:hover {
        box-shadow: 0px 4px 20px 0px rgba(32, 53, 104, 0.18);
      }
      .rec-card-img {
        width: 120px;
        height: 120px;
        border-radius: 8px;
        object-fit: cover;
        flex-shrink: 0;
        background: #F0F2F5;
      }
      .rec-card-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        min-width: 0;
      }
      .rec-card-title {
        color: #152033;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
        margin: 0 0 0 0;
        text-align: left;
        word-break: break-word;
      }
      .rec-card-helper {
        color: #434C5E;
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        margin: 0 0 0 0;
        text-align: left;
        word-break: break-word;
      }
      .rec-card-meta {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        margin-top: 0px;
      }
      .rec-card-meta-type {
        color: #687183;
        font-family: 'Mulish', sans-serif;
        font-size: 13px;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .rec-card-meta-dot {
        width: 4px;
        height: 4px;
        background: #D1D6DF;
        display: inline-block;
      }
      .rec-card-meta-time {
        color: #687183;
        font-family: 'Mulish', sans-serif;
        font-size: 13px;
        font-weight: 400;
      }
      @media (max-width: 1000px) {
        .customize-header-row, .customize-main-content {
          max-width: 100vw;
        }
      }
      .edit-btn, .save-btn, .cancel-btn {
        border-radius: 6px;
        background: #366CED;
        color: #FFF;
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        padding: 12px 28px;
        border: none;
        cursor: pointer;
        box-shadow: 0 1px 2px rgba(26,51,101,0.04);
        transition: background 0.2s;
        margin-left: 16px;
      }
      .edit-btn { background: #366CED; }
      .edit-btn:hover { background: #2852b9; }
      .save-btn { background: #366CED; }
      .save-btn:hover { background: #2852b9; }
      .cancel-btn { background: #fff; color: #366CED; border: 1.5px solid #366CED; }
      .cancel-btn:hover { background: #F5F7FA; }
      .rec-card-remove {
        background: none;
        border: none;
        cursor: pointer;
        margin-left: 12px;
        margin-top: 2px;
        align-self: flex-start;
        transition: transform 0.15s, opacity 0.15s;
        opacity: 0.7;
      }
      .rec-card-remove:hover { opacity: 1; transform: scale(1.15); }
      .rec-card-add {
        background: #366CED;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        font-size: 22px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-left: 12px;
        margin-top: 2px;
        transition: background 0.15s, transform 0.15s, opacity 0.15s;
        opacity: 0.85;
      }
      .rec-card-add:hover { background: #2852b9; opacity: 1; transform: scale(1.15); }
      .rec-card-fade {
        animation: fadeMove 0.3s;
      }
      @keyframes fadeMove {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  // --- Playbook state management ---
  // Assign categories to placeholders
  const placeholders = [
    {
      title: 'Understanding Home Equity',
      helperText: 'A quick guide to the basics of home equity and how it works.',
      content_type: 'Article',
      time_estimate: 5,
      img: 'assets/house-photo.jpg',
      category: 'game_plan'
    },
    {
      title: 'Tips for First-Time Sellers',
      helperText: 'Key things to know if you are considering selling your home for the first time.',
      content_type: 'Video',
      time_estimate: 7,
      img: 'assets/house-photo.jpg',
      category: 'on_track'
    },
    {
      title: 'How to Boost Your Home Value',
      helperText: 'Simple improvements that can increase your home\'s value before settlement.',
      content_type: 'Guides & More',
      time_estimate: 4,
      img: 'assets/house-photo.jpg',
      category: 'prep_future'
    }
  ];

  // On first render, initialize playbook state
  if (!playbookState) {
    const recs = getRecommendations();
    const grouped = { game_plan: [], on_track: [], prep_future: [] };
    recs.forEach(rec => { if (grouped[rec.category]) grouped[rec.category].push(rec); });
    playbookState = {
      grouped,
      alsoLike: [...placeholders]
    };
  }

  // If not in edit mode, use playbookState; if in edit mode, use a working copy
  let workingState = isEditMode && playbookState._editCopy ? playbookState._editCopy : playbookState;
  if (isEditMode && !playbookState._editCopy) {
    // Deep copy for edit mode
    playbookState._editCopy = {
      grouped: {
        game_plan: [...playbookState.grouped.game_plan],
        on_track: [...playbookState.grouped.on_track],
        prep_future: [...playbookState.grouped.prep_future]
      },
      alsoLike: [...playbookState.alsoLike]
    };
    workingState = playbookState._editCopy;
  }

  // --- Wrapper ---
  const wrapper = document.createElement('div');
  wrapper.className = 'customize-wrapper';
  wrapper.id = 'customize-wrapper';

  // Sidebar
  const sidebar = document.createElement('div');
  sidebar.className = 'customize-sidebar';
  // Logo
  const logo = document.createElement('img');
  logo.className = 'customize-sidebar-logo';
  logo.src = 'assets/logomark.svg';
  logo.alt = 'Logo';
  sidebar.appendChild(logo);
  // Address
  const address = document.createElement('div');
  address.className = 'customize-sidebar-address';
  address.textContent = '2 Second Rd., Cleveland OH 44113';
  sidebar.appendChild(address);
  // Nav
  const nav = document.createElement('div');
  nav.className = 'customize-sidebar-nav';
  const navItems = [
    { label: 'Overview' },
    { label: 'Investments' },
    { label: 'Home equity coach', active: true },
    { label: 'Home equity forecast' },
    { label: 'Scenario planner' },
    { label: 'Resources' }
  ];
  navItems.forEach(item => {
    const navItem = document.createElement('div');
    navItem.className = 'customize-sidebar-nav-item' + (item.active ? ' active' : '');
    const icon = document.createElement('span');
    icon.className = 'customize-sidebar-nav-icon';
    navItem.appendChild(icon);
    const label = document.createElement('span');
    label.textContent = item.label;
    navItem.appendChild(label);
    nav.appendChild(navItem);
  });
  sidebar.appendChild(nav);
  wrapper.appendChild(sidebar);

  // Main content
  const container = document.createElement('div');
  container.className = 'customize-main-content';
  container.style.padding = '40px 32px 40px 32px';

  // --- Header Row ---
  const headerRow = document.createElement('div');
  headerRow.className = 'customize-header-row';
  headerRow.style.justifyContent = 'flex-start';
  headerRow.style.alignItems = 'flex-start';
  headerRow.style.textAlign = 'left';
  headerRow.style.width = '100%';
  headerRow.style.margin = '0';
  headerRow.style.paddingLeft = '32px';

  // Left side
  const headerLeft = document.createElement('div');
  headerLeft.className = 'customize-header-left';
  headerLeft.style.width = '100%';
  headerLeft.style.margin = '0';
  // Label
  const label = document.createElement('div');
  label.className = 'customize-header-label';
  label.textContent = 'Home equity coach';
  headerLeft.appendChild(label);
  // Title
  const title = document.createElement('div');
  title.className = 'customize-header-title';
  title.textContent = 'Your quarterly playbook';
  headerLeft.appendChild(title);
  headerRow.appendChild(headerLeft);

  container.appendChild(headerRow);

  // Instruction box (moved below title)
  const instructionBox = document.createElement('div');
  instructionBox.className = 'instruction-box';
  instructionBox.style.borderRadius = '12px';
  instructionBox.style.background = 'linear-gradient(269deg, #D4F4FF 0%, #EAFAFF 100%)';
  instructionBox.style.color = '#152033';
  instructionBox.style.fontFamily = 'Mulish, sans-serif';
  instructionBox.style.fontSize = '18px';
  instructionBox.style.fontStyle = 'normal';
  instructionBox.style.fontWeight = '400';
  instructionBox.style.lineHeight = '26px';
  instructionBox.style.padding = '24px 32px';
  instructionBox.style.marginBottom = '32px';
  instructionBox.style.maxWidth = '100%';
  instructionBox.style.margin = '0 0 32px 0';
  instructionBox.style.position = 'relative';
  instructionBox.style.transition = 'opacity 0.3s, transform 0.3s';
  instructionBox.style.opacity = '1';
  instructionBox.style.transform = 'translateY(0)';
  instructionBox.style.paddingTop = '36px';
  instructionBox.style.paddingRight = '48px';

  // Close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '20px';
  closeButton.style.right = '24px';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '24px';
  closeButton.style.color = '#152033';
  closeButton.style.cursor = 'pointer';
  closeButton.style.padding = '8px 12px';
  closeButton.style.lineHeight = '1';
  closeButton.style.opacity = '0.6';
  closeButton.style.transition = 'opacity 0.2s';
  closeButton.onmouseover = () => { closeButton.style.opacity = '1'; };
  closeButton.onmouseout = () => { closeButton.style.opacity = '0.6'; };
  closeButton.onclick = () => {
    instructionBox.style.opacity = '0';
    instructionBox.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      instructionBox.style.display = 'none';
    }, 300);
  };
  instructionBox.appendChild(closeButton);

  // Text content
  const instructionText = document.createElement('div');
  instructionText.innerHTML = "We've prepared your first home equity playbook of personalized tools and resources to help you plan your finances with confidence and prepare for a successful settlement. We'll check in another 90 days from now on your goals and progress. Click the <b>Edit</b> button to customize the playbook to fit your needs and available time.";
  instructionBox.appendChild(instructionText);

  container.appendChild(instructionBox);

  // --- Tab Bar ---
  const tabBar = document.createElement('div');
  tabBar.className = 'customize-tab-bar';
  tabBar.style.display = 'flex';
  tabBar.style.gap = '0';
  tabBar.style.margin = '0 0 32px 0';
  tabBar.style.borderBottom = '2px solid #E5E8EF';
  tabBar.style.width = '100%';
  tabBar.style.maxWidth = 'none';
  tabBar.style.background = 'none';

  const tabs = [
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'summary', label: 'Summary' }
  ];
  let activeTab = window.__customizeActiveTab || 'recommendations';
  function setActiveTab(tab) {
    window.__customizeActiveTab = tab;
    renderCustomizePlan();
  }
  tabs.forEach(tab => {
    const tabBtn = document.createElement('button');
    tabBtn.textContent = tab.label;
    tabBtn.className = 'customize-tab-btn';
    tabBtn.style.background = 'none';
    tabBtn.style.border = 'none';
    tabBtn.style.outline = 'none';
    tabBtn.style.cursor = 'pointer';
    tabBtn.style.fontFamily = 'Mulish, sans-serif';
    tabBtn.style.fontSize = '18px';
    tabBtn.style.padding = '16px 32px 12px 32px';
    tabBtn.style.margin = '0';
    tabBtn.style.borderBottom = tab.id === activeTab ? '4px solid #20A277' : '4px solid transparent';
    tabBtn.style.color = tab.id === activeTab ? '#20A277' : '#687183';
    tabBtn.style.fontWeight = tab.id === activeTab ? '700' : '400';
    tabBtn.onclick = () => setActiveTab(tab.id);
    tabBar.appendChild(tabBtn);
  });
  container.appendChild(tabBar);

  // --- Tab Content ---
  const tabContent = document.createElement('div');
  tabContent.className = 'customize-tab-content';
  tabContent.style.width = '100%';
  tabContent.style.maxWidth = 'none';
  tabContent.style.background = 'none';
  tabContent.style.padding = '0';

  if (activeTab === 'recommendations') {
    // --- Row: time estimate, date range, edit/save/cancel ---
    const topRow = document.createElement('div');
    topRow.style.display = 'flex';
    topRow.style.alignItems = 'center';
    topRow.style.justifyContent = 'space-between';
    topRow.style.width = '100%';
    topRow.style.marginBottom = '32px';

    // Left: time estimate and date range
    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    left.style.gap = '18px';
    // Time badge
    const badge = document.createElement('div');
    badge.className = 'customize-header-badge';
    const clock = document.createElement('img');
    clock.src = 'assets/clock.svg';
    clock.alt = 'Clock';
    badge.appendChild(clock);
    const allPlaybookRecs = Object.values(workingState.grouped).flat();
    const totalTime = allPlaybookRecs.reduce((sum, rec) => sum + (rec.time_estimate || 0), 0);
    const badgeText = document.createElement('span');
    badgeText.textContent = `EST. ${totalTime} MIN`;
    badge.appendChild(badgeText);
    left.appendChild(badge);
    // Date range
    const today = new Date();
    const in90 = new Date();
    in90.setDate(today.getDate() + 90);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateRange = `${today.toLocaleDateString('en-US', options)} – ${in90.toLocaleDateString('en-US', options)}`;
    const dates = document.createElement('div');
    dates.className = 'customize-header-dates';
    dates.textContent = dateRange;
    left.appendChild(dates);
    topRow.appendChild(left);

    // Right: edit/save/cancel buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.alignItems = 'center';
    buttonContainer.style.marginLeft = 'auto';
    buttonContainer.style.gap = '12px';
    if (!isEditMode) {
      const editBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';
      editBtn.onclick = () => { isEditMode = true; renderCustomizePlan(); };
      buttonContainer.appendChild(editBtn);
    } else {
      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'cancel-btn';
      cancelBtn.textContent = 'Cancel';
      cancelBtn.onclick = () => { if (playbookState._editCopy) delete playbookState._editCopy; isEditMode = false; renderCustomizePlan(); };
      buttonContainer.appendChild(cancelBtn);
      const saveBtn = document.createElement('button');
      saveBtn.className = 'save-btn';
      saveBtn.textContent = 'Save';
      saveBtn.onclick = () => { if (playbookState._editCopy) { playbookState.grouped = playbookState._editCopy.grouped; playbookState.alsoLike = playbookState._editCopy.alsoLike; delete playbookState._editCopy; } isEditMode = false; renderCustomizePlan(); };
      buttonContainer.appendChild(saveBtn);
    }
    topRow.appendChild(buttonContainer);
    tabContent.appendChild(topRow);

    // --- Recommendation Groups (playbook) ---
    const categoryLabels = {
      game_plan: 'Game Plan',
      on_track: 'On Track',
      prep_future: 'Prep for the Future'
    };
    Object.entries(workingState.grouped).forEach(([cat, recs]) => {
      if (recs.length === 0) return;
      const groupDiv = document.createElement('div');
      groupDiv.className = 'rec-category-group';
      // REMOVE: rec-category-title (except for 'You might also like')
      // ...
      recs.forEach((rec, idx) => {
        const card = document.createElement('div');
        card.className = 'recommendation-card rec-card-fade';
        // Image (left)
        const img = document.createElement('img');
        img.className = 'rec-card-img';
        img.src = rec.img || 'assets/house-photo.jpg'; // Use rec.img if available, fallback to house-photo.jpg
        img.alt = 'Recommendation';
        card.appendChild(img);
        // Content (right)
        const content = document.createElement('div');
        content.className = 'rec-card-content';
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.alignItems = 'flex-start';
        content.style.justifyContent = 'flex-start';
        content.style.minWidth = '0';
        // Badge (top)
        const badge = document.createElement('div');
        const categoryColors = {
          'game_plan': '#A54F00', // Orange
          'on_track': '#366CED',  // Blue
          'prep_future': '#20A277', // Green
          'you might also like': '#687183', // Gray
        };
        const badgeColor = categoryColors[(cat || '').toLowerCase()] || '#A54F00';
        badge.textContent = (cat || '').replace(/_/g, ' ').toUpperCase();
        badge.style.color = badgeColor;
        badge.style.fontFamily = 'Mulish, sans-serif';
        badge.style.fontSize = '11px';
        badge.style.fontStyle = 'normal';
        badge.style.fontWeight = '700';
        badge.style.lineHeight = 'normal';
        badge.style.letterSpacing = '1px';
        badge.style.display = 'flex';
        badge.style.padding = '4px';
        badge.style.justifyContent = 'center';
        badge.style.alignItems = 'center';
        badge.style.background = 'rgba(0,0,0,0.04)';
        badge.style.borderRadius = '6px';
        badge.style.marginBottom = '8px';
        content.appendChild(badge);
        // Title
        const title = document.createElement('div');
        title.className = 'rec-card-title';
        title.textContent = rec.title;
        title.style.fontFamily = 'Tiempos Headline, serif';
        title.style.fontSize = '16px';
        title.style.fontStyle = 'normal';
        title.style.fontWeight = '600';
        title.style.lineHeight = '24px';
        content.appendChild(title);
        // Helper text
        const helper = document.createElement('div');
        helper.className = 'rec-card-helper';
        helper.textContent = rec.helperText;
        content.appendChild(helper);
        // Meta row
        const meta = document.createElement('div');
        meta.className = 'rec-card-meta';
        const type = document.createElement('span');
        type.className = 'rec-card-meta-type';
        type.textContent = rec.content_type;
        meta.appendChild(type);
        const dot = document.createElement('span');
        dot.className = 'rec-card-meta-dot';
        meta.appendChild(dot);
        const time = document.createElement('span');
        time.className = 'rec-card-meta-time';
        time.textContent = `${rec.time_estimate} min`;
        meta.appendChild(time);
        content.appendChild(meta);
        card.appendChild(content);
        // Remove button in edit mode
        if (isEditMode) {
          const removeBtn = document.createElement('button');
          removeBtn.className = 'rec-card-remove';
          removeBtn.title = 'Remove from playbook';
          removeBtn.innerHTML = `<img src='assets/remove.svg' alt='Remove' width='24' height='24'/>`;
          removeBtn.onclick = () => {
            // Animate out, then move to alsoLike
            card.style.opacity = '0';
            setTimeout(() => {
              workingState.grouped[cat].splice(idx, 1);
              workingState.alsoLike.push({ ...rec });
              renderCustomizePlan();
            }, 180);
          };
          card.appendChild(removeBtn);
        }
        groupDiv.appendChild(card);
        groupDiv.style.maxWidth = 'none';
        groupDiv.style.width = '100%';
      });
      tabContent.appendChild(groupDiv);
    });

    // --- You might also like section ---
    const alsoLikeSection = document.createElement('div');
    alsoLikeSection.className = 'rec-category-group';
    alsoLikeSection.style.marginTop = '24px';
    // Section title
    const alsoLikeTitle = document.createElement('div');
    alsoLikeTitle.className = 'rec-category-title';
    alsoLikeTitle.textContent = 'You might also like';
    alsoLikeSection.appendChild(alsoLikeTitle);
    // Cards
    workingState.alsoLike.forEach((rec, idx) => {
      const card = document.createElement('div');
      card.className = 'recommendation-card rec-card-fade';
      // Image (left)
      const img = document.createElement('img');
      img.className = 'rec-card-img';
      img.src = rec.img || 'assets/house-photo.jpg'; // Use rec.img if available, fallback to house-photo.jpg
      img.alt = 'Recommendation';
      card.appendChild(img);
      // Content (right)
      const content = document.createElement('div');
      content.className = 'rec-card-content';
      content.style.display = 'flex';
      content.style.flexDirection = 'column';
      content.style.alignItems = 'flex-start';
      content.style.justifyContent = 'flex-start';
      content.style.minWidth = '0';
      // Badge (top)
      const badge = document.createElement('div');
      badge.textContent = 'YOU MIGHT ALSO LIKE';
      badge.style.background = '#E5F0FB';
      badge.style.color = '#366CED';
      badge.style.fontFamily = 'Mulish, sans-serif';
      badge.style.fontSize = '13px';
      badge.style.fontWeight = '700';
      badge.style.textTransform = 'uppercase';
      badge.style.borderRadius = '8px';
      badge.style.padding = '4px 12px';
      badge.style.display = 'inline-block';
      badge.style.marginBottom = '8px';
      content.appendChild(badge);
      // Title
      const title = document.createElement('div');
      title.className = 'rec-card-title';
      title.textContent = rec.title;
      title.style.fontFamily = 'Tiempos Headline, serif';
      title.style.fontSize = '16px';
      title.style.fontStyle = 'normal';
      title.style.fontWeight = '600';
      title.style.lineHeight = '24px';
      content.appendChild(title);
      // Helper text
      const helper = document.createElement('div');
      helper.className = 'rec-card-helper';
      helper.textContent = rec.helperText;
      content.appendChild(helper);
      // Meta row
      const meta = document.createElement('div');
      meta.className = 'rec-card-meta';
      const type = document.createElement('span');
      type.className = 'rec-card-meta-type';
      type.textContent = rec.content_type;
      meta.appendChild(type);
      const dot = document.createElement('span');
      dot.className = 'rec-card-meta-dot';
      meta.appendChild(dot);
      const time = document.createElement('span');
      time.className = 'rec-card-meta-time';
      time.textContent = `${rec.time_estimate} min`;
      meta.appendChild(time);
      content.appendChild(meta);
      card.appendChild(content);
      // Add button in edit mode
      if (isEditMode) {
        const addBtn = document.createElement('button');
        addBtn.className = 'rec-card-add';
        addBtn.title = 'Add to playbook';
        addBtn.innerHTML = '+';
        addBtn.onclick = () => {
          // Animate out, then move to playbook
          card.style.opacity = '0';
          setTimeout(() => {
            const cat = rec.category;
            workingState.grouped[cat].push({ ...rec });
            workingState.alsoLike.splice(idx, 1);
            renderCustomizePlan();
          }, 180);
        };
        card.appendChild(addBtn);
      }
      alsoLikeSection.appendChild(card);
      alsoLikeSection.style.maxWidth = 'none';
      alsoLikeSection.style.width = '100%';
    });
    tabContent.appendChild(alsoLikeSection);
  } else if (activeTab === 'summary') {
    // --- Summary Tab: Two-column layout ---
    const summaryRoot = document.createElement('div');
    summaryRoot.style.display = 'flex';
    summaryRoot.style.gap = '32px';
    summaryRoot.style.width = '100%';
    summaryRoot.style.maxWidth = 'none';
    summaryRoot.style.flexWrap = 'wrap';
    summaryRoot.style.margin = '0 auto';

    // Card styling (reuse from results_breakdown)
    const cardStyle = `
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 16px rgba(26, 51, 101, 0.08);
      padding: 32px 40px 32px 40px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      min-width: 0;
      width: 100%;
      max-width: 520px;
      flex: 1 1 0;
    `;

    // --- Timeline Card ---
    const timelineCard = document.createElement('div');
    timelineCard.style = cardStyle;
    // Section label
    const timelineLabel = document.createElement('div');
    timelineLabel.style.fontFamily = 'Mulish, sans-serif';
    timelineLabel.style.fontSize = '13px';
    timelineLabel.style.fontWeight = '700';
    timelineLabel.style.color = '#919aac';
    timelineLabel.style.textTransform = 'uppercase';
    timelineLabel.style.letterSpacing = '1.2px';
    timelineLabel.style.marginBottom = '8px';
    timelineLabel.textContent = 'SETTLEMENT TIMELINE';
    timelineCard.appendChild(timelineLabel);
    // Dynamic summary sentence (reuse from results_breakdown)
    let summarySentence = '';
    const timelineMap = {
      within_year: 'in the next 12 months',
      within_three_years: 'in 1 to 3 years',
      more_than_three_years: 'in more than 3 years',
      not_sure: 'at a future date to be determined'
    };
    const fundingMap = {
      refinancing: 'a refinance',
      cash_savings: 'cash savings',
      loan_heloc: 'a home equity loan or HELOC',
      home_sale: 'a home sale',
      not_sure: 'a method to be determined'
    };
    if (answers.settlement_timeline) {
      const timelineText = timelineMap[answers.settlement_timeline] || '';
      const fundingText = fundingMap[answers.settlement_funding] || '';
      const dynamicPart = `${fundingText ? 'through ' + fundingText + ' ' : ''}${timelineText}`;
      summarySentence = `You plan to settle your HEI <b>${dynamicPart}</b>.`;
    }
    if (summarySentence) {
      const desc = document.createElement('div');
      desc.style.fontFamily = 'Mulish, sans-serif';
      desc.style.fontSize = '16px';
      desc.style.color = '#434C5E';
      desc.style.marginBottom = '8px';
      desc.innerHTML = summarySentence;
      timelineCard.appendChild(desc);
    }
    // Timeline visualization (reuse from results_breakdown)
    // ... copy timeline visualization code from renderResultsBreakdown ...
    // --- Timeline visualization code start ---
    const effectiveDate = new Date('2021-05-01');
    const deadlineDate = new Date('2031-05-01');
    const today = new Date();
    const startYear = effectiveDate.getFullYear();
    const endYear = deadlineDate.getFullYear();
    const years = [];
    for (let y = startYear; y <= endYear; y += 1) years.push(y);
    const numSegments = years.length - 1;
    // Calculate purple segment (possible settlement window) based on answer
    let purpleStartDate = null, purpleEndDate = null;
    if (answers.settlement_timeline === 'within_year') {
      purpleStartDate = today;
      purpleEndDate = new Date(today);
      purpleEndDate.setFullYear(today.getFullYear() + 1);
    } else if (answers.settlement_timeline === 'within_three_years') {
      purpleStartDate = today;
      purpleEndDate = new Date(today);
      purpleEndDate.setFullYear(today.getFullYear() + 3);
    } else if (answers.settlement_timeline === 'more_than_three_years') {
      purpleStartDate = new Date(today);
      purpleStartDate.setFullYear(today.getFullYear() + 3);
      purpleEndDate = new Date(today);
      purpleEndDate.setFullYear(today.getFullYear() + 5);
    }
    // Clamp purpleEndDate to deadline
    if (purpleEndDate && purpleEndDate > deadlineDate) purpleEndDate = new Date(deadlineDate);
    if (purpleStartDate && purpleStartDate > deadlineDate) purpleStartDate = new Date(deadlineDate);
    // Timeline bar
    const timelineBar = document.createElement('div');
    timelineBar.className = 'results-breakdown-timeline-bar';
    for (let i = 0; i < numSegments; i++) {
      const segStart = new Date(startYear + i, 4, 1).getTime();
      const segEnd = new Date(startYear + i + 1, 4, 1).getTime();
      let segmentClass = 'results-breakdown-timeline-segment';
      // Determine color for this segment
      if (today > segEnd) {
        segmentClass += ' filled';
      } else if (
        purpleStartDate && purpleEndDate &&
        segEnd > purpleStartDate.getTime() && segStart < purpleEndDate.getTime()
      ) {
        segmentClass += ' purple';
      }
      const segment = document.createElement('div');
      segment.className = segmentClass;
      timelineBar.appendChild(segment);
    }
    // Add today circle and caret
    const segments = timelineBar.querySelectorAll('.results-breakdown-timeline-segment');
    let todaySegmentIdx = 0;
    let todaySegmentPct = 0;
    for (let i = 0; i < numSegments; i++) {
      const segStart = new Date(startYear + i, 4, 1).getTime();
      const segEnd = new Date(startYear + i + 1, 4, 1).getTime();
      if (today >= segStart && today <= segEnd) {
        todaySegmentIdx = i;
        todaySegmentPct = (today - segStart) / (segEnd - segStart);
        break;
      }
    }
    if (segments.length > 0) {
      const seg = segments[todaySegmentIdx];
      setTimeout(() => {
        const left = seg.offsetLeft + seg.offsetWidth * todaySegmentPct;
        // Today circle
        let todayCircle = document.createElement('div');
        todayCircle.className = 'results-breakdown-timeline-today-circle';
        todayCircle.style.left = `${left}px`;
        timelineBar.appendChild(todayCircle);
        // Caret label
        let todayLabel = document.createElement('div');
        todayLabel.className = 'results-breakdown-timeline-label';
        todayLabel.innerText = 'Today';
        todayLabel.style.left = `${left}px`;
        timelineBar.appendChild(todayLabel);
      }, 0);
    }
    timelineCard.appendChild(timelineBar);
    // Years (every other year)
    const yearsRow = document.createElement('div');
    yearsRow.className = 'results-breakdown-timeline-years';
    years.forEach((y, i) => {
      if (i % 2 === 0) {
        const year = document.createElement('div');
        year.textContent = y;
        yearsRow.appendChild(year);
      } else {
        const spacer = document.createElement('div');
        spacer.textContent = '';
        yearsRow.appendChild(spacer);
      }
    });
    timelineCard.appendChild(yearsRow);
    // Legend
    const legend = document.createElement('div');
    legend.className = 'results-breakdown-timeline-legend';
    legend.innerHTML = `<span class="results-breakdown-timeline-legend-dot"></span> Your HEI to date &nbsp;&nbsp; <span class="results-breakdown-timeline-legend-dot-purple"></span> Possible settlement window`;
    timelineCard.appendChild(legend);
    // --- Timeline visualization code end ---
    summaryRoot.appendChild(timelineCard);

    // --- Financial picture card ---
    const focusCard = document.createElement('div');
    focusCard.style = cardStyle;
    // Section label
    const focusLabel = document.createElement('div');
    focusLabel.style.fontFamily = 'Mulish, sans-serif';
    focusLabel.style.fontSize = '13px';
    focusLabel.style.fontWeight = '700';
    focusLabel.style.color = '#919aac';
    focusLabel.style.textTransform = 'uppercase';
    focusLabel.style.letterSpacing = '1.2px';
    focusLabel.style.marginBottom = '8px';
    focusLabel.textContent = 'GOALS';
    focusCard.appendChild(focusLabel);
    // Goals summary
    const goalsSummary = document.createElement('div');
    goalsSummary.style.fontFamily = 'Mulish, sans-serif';
    goalsSummary.style.fontSize = '16px';
    goalsSummary.style.color = '#434C5E';
    goalsSummary.style.marginBottom = '8px';
    goalsSummary.textContent = 'You shared that your goals are ...';
    focusCard.appendChild(goalsSummary);
    // Financial picture chips (reuse from results_breakdown)
    const focusGroups = [
      {
        key: 'financial_wellbeing',
        label: 'Focusing on',
        answers: answers.financial_wellbeing,
      },
      {
        key: 'life_events_future',
        label: 'Preparing for',
        answers: answers.life_events_future,
      },
      {
        key: 'life_events_past',
        label: 'Managing',
        answers: answers.life_events_past,
      },
    ];
    focusGroups.forEach(group => {
      if (Array.isArray(group.answers) && group.answers.length > 0) {
        const groupDiv = document.createElement('div');
        groupDiv.style.marginBottom = '12px';
        const groupTitle = document.createElement('div');
        groupTitle.style.fontFamily = 'Mulish, sans-serif';
        groupTitle.style.fontSize = '15px';
        groupTitle.style.fontWeight = '700';
        groupTitle.style.color = '#366CED';
        groupTitle.style.marginBottom = '4px';
        groupTitle.textContent = group.label;
        groupDiv.appendChild(groupTitle);
        group.answers.forEach(val => {
          const question = questions.find(q => q.id === group.key);
          const opt = question && question.options.find(o => o.value === val);
          if (opt) {
            const item = document.createElement('span');
            item.style.background = '#F5F7FA';
            item.style.borderRadius = '8px';
            item.style.padding = '8px 16px';
            item.style.marginRight = '8px';
            item.style.fontFamily = 'Mulish, sans-serif';
            item.style.fontSize = '15px';
            item.style.color = '#434C5E';
            item.style.display = 'inline-block';
            item.style.marginBottom = '6px';
            item.textContent = opt.text;
            groupDiv.appendChild(item);
          }
        });
        focusCard.appendChild(groupDiv);
      }
    });
    summaryRoot.appendChild(focusCard);
    tabContent.appendChild(summaryRoot);
  }
  container.appendChild(tabContent);

  wrapper.appendChild(container);
  document.body.appendChild(wrapper);
}

function renderClosingPage() {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.textAlign = 'center';

  const title = document.createElement('h1');
  title.textContent = 'Thank You!';
  container.appendChild(title);

  const message = document.createElement('p');
  message.textContent = 'Your plan has been saved.';
  container.appendChild(message);

  document.body.appendChild(container);
}

// Function to get recommendations based on answers
function getRecommendations() {
  const userRecommendations = [];
  
  // Add recommendations based on settlement timeline
  if (answers.settlement_timeline && recommendations.settlement_timeline[answers.settlement_timeline]) {
    userRecommendations.push(...recommendations.settlement_timeline[answers.settlement_timeline]);
  }
  
  // Add recommendations based on settlement funding
  if (answers.settlement_funding && recommendations.settlement_funding[answers.settlement_funding]) {
    userRecommendations.push(...recommendations.settlement_funding[answers.settlement_funding]);
  }
  
  // Add recommendations based on life events
  if (answers.life_events_past) {
    answers.life_events_past.forEach(event => {
      if (recommendations.life_events[event]) {
        userRecommendations.push(...recommendations.life_events[event]);
      }
    });
  }
  
  if (answers.life_events_future) {
    answers.life_events_future.forEach(event => {
      if (recommendations.life_events[event]) {
        userRecommendations.push(...recommendations.life_events[event]);
      }
    });
  }
  
  // Add recommendations based on financial wellbeing
  if (answers.financial_wellbeing) {
    answers.financial_wellbeing.forEach(val => {
      if (recommendations.financial_wellbeing[val]) {
        userRecommendations.push(...recommendations.financial_wellbeing[val]);
      }
    });
  }
  
  return userRecommendations;
}

// Add body background gradient and font
if (!document.getElementById('prototype-body-style')) {
  const style = document.createElement('style');
  style.id = 'prototype-body-style';
  style.textContent = `
    body {
      background: linear-gradient(180deg, rgba(250, 251, 252, 0.75) 15%, rgba(225, 233, 252, 0.56) 92.87%), #FFF;
      font-family: 'Mulish', sans-serif;
      margin: 0;
      min-height: 100vh;
    }
    .tiempos-headline {
      font-family: 'Tiempos Headline', serif;
      color: #152033;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px;
      margin-top: 48px;
      margin-bottom: 8px;
      text-align: left;
    }
    .helper-text {
      color: #434C5E;
      font-family: 'Mulish', sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      margin-bottom: 32px;
      text-align: left;
      width: 100%;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .question-response {
      display: flex;
      padding: 20px 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      align-self: stretch;
      border-radius: 6px;
      background: #FFF;
      box-shadow: 0px 2px 10px 0px rgba(32, 53, 104, 0.12);
      margin: 16px auto;
      width: 100%;
      max-width: 600px;
      font-size: 16px;
      font-family: 'Mulish', sans-serif;
      font-weight: 400;
      color: #152033;
      line-height: 26px;
      border: 2px solid transparent;
      transition: background 0.2s, box-shadow 0.2s, border 0.2s;
    }
    .question-response.selected {
      background: #FFF;
      border: 2px solid #366CED !important;
      box-shadow: 0px 4px 16px 0px rgba(54, 108, 237, 0.10);
    }
  `;
  document.head.appendChild(style);
}
// Add Tiempos Headline font if not present
if (!document.getElementById('tiempos-font-link')) {
  const fontLink = document.createElement('link');
  fontLink.id = 'tiempos-font-link';
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Tinos:wght@700&display=swap'; // Fallback to Tinos if Tiempos not available
  document.head.appendChild(fontLink);
}

// --- Render Question Page ---
function renderQuestionPage() {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.textAlign = 'center';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  if (["life_events_past", "life_events_future", "financial_wellbeing"].includes(questions[stepIndex - 2].id)) {
    container.style.paddingBottom = "120px";
  }

  const currentQuestion = questions[stepIndex - 2]; // Adjust for landing and goals_intro
  if (!currentQuestion) {
    const message = document.createElement('p');
    message.textContent = 'No question available.';
    container.appendChild(message);
    document.body.appendChild(container);
    return;
  }

  // Title
  const title = document.createElement('div');
  title.className = 'tiempos-headline';
  title.innerHTML = currentQuestion.title;
  title.style.textAlign = 'left';
  title.style.width = '100%';
  title.style.maxWidth = '600px';
  container.appendChild(title);

  // Subheader/helper text
  if (currentQuestion.helperText) {
    const helper = document.createElement('div');
    helper.className = 'helper-text';
    helper.innerHTML = currentQuestion.helperText;
    container.appendChild(helper);
  }

  // Small caption for life_events_past and life_events_future
  if (currentQuestion.id === 'life_events_past' || currentQuestion.id === 'life_events_future') {
    const small = document.createElement('div');
    small.textContent = 'Select all that apply to you or an immediate family member.';
    small.style.fontFamily = 'Mulish, sans-serif';
    small.style.fontSize = '12px';
    small.style.color = '#687183';
    small.style.textAlign = 'left';
    small.style.width = '100%';
    small.style.maxWidth = '600px';
    small.style.marginBottom = '16px';
    container.appendChild(small);
  }

  if (currentQuestion.type === 'radio' || currentQuestion.type === 'checkbox') {
    currentQuestion.options.forEach(option => {
      // Custom checkbox for checkbox type
      if (currentQuestion.type === 'checkbox') {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.width = '100%';
        wrapper.style.maxWidth = '600px';
        wrapper.style.margin = '12px auto';
        wrapper.style.background = '#FFF';
        wrapper.style.borderRadius = '6px';
        wrapper.style.boxShadow = '0px 2px 10px 0px rgba(32, 53, 104, 0.08)';
        wrapper.style.padding = '0';
        wrapper.style.cursor = 'pointer';
        wrapper.style.transition = 'background 0.2s, box-shadow 0.2s, border 0.2s';
        wrapper.style.border = '2px solid transparent';
        // Highlight if selected
        if (answers[currentQuestion.id] && answers[currentQuestion.id].includes(option.value)) {
          wrapper.style.border = '2px solid #366CED';
          wrapper.style.boxShadow = '0px 4px 16px 0px rgba(54, 108, 237, 0.10)';
        }

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = answers[currentQuestion.id] && answers[currentQuestion.id].includes(option.value);
        checkbox.style.margin = '0 18px 0 20px';
        checkbox.style.width = '20px';
        checkbox.style.height = '20px';
        checkbox.style.accentColor = '#366CED';
        checkbox.style.flexShrink = '0';
        checkbox.onclick = (e) => {
          e.stopPropagation();
          if (!answers[currentQuestion.id]) answers[currentQuestion.id] = [];
          const index = answers[currentQuestion.id].indexOf(option.value);
          if (index === -1) {
            answers[currentQuestion.id].push(option.value);
            wrapper.style.border = '2px solid #366CED';
            wrapper.style.boxShadow = '0px 4px 16px 0px rgba(54, 108, 237, 0.10)';
          } else {
            answers[currentQuestion.id].splice(index, 1);
            wrapper.style.border = '2px solid transparent';
            wrapper.style.boxShadow = '0px 2px 10px 0px rgba(32, 53, 104, 0.08)';
          }
        };

        // Label
        const label = document.createElement('span');
        label.textContent = option.text;
        label.style.fontFamily = 'Mulish, sans-serif';
        label.style.fontSize = '16px';
        label.style.color = '#152033';
        label.style.fontWeight = '400';
        label.style.textAlign = 'left';
        label.style.padding = '20px 0';
        label.style.flex = '1';

        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        wrapper.onclick = () => { checkbox.click(); };
        container.appendChild(wrapper);
      } else {
        // Radio button
        const button = document.createElement('button');
        button.textContent = option.text;
        button.className = 'question-response';
        button.style.border = 'none';
        button.style.width = '100%';
        button.style.maxWidth = '600px';
        button.style.margin = '16px auto';
        button.style.fontWeight = '600';
        button.style.fontSize = '16px';
        button.style.textAlign = 'left';
        button.style.cursor = 'pointer';
        button.style.outline = 'none';
        button.style.boxSizing = 'border-box';
        button.style.transition = 'background 0.2s, box-shadow 0.2s';
        // Set initial state based on current answer
        let selected = false;
        if (answers[currentQuestion.id] === option.value) {
          button.classList.add('selected');
          selected = true;
        }
        button.onclick = () => {
          container.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('selected');
          });
          answers[currentQuestion.id] = option.value;
          button.classList.add('selected');
          // Special handling for settlement_funding question
          if (currentQuestion.id === 'settlement_funding' && option.value !== 'not_sure') {
            if (!toastVisible) {
              toastVisible = true;
              render();
            }
          }
        };
        container.appendChild(button);
      }
    });
  } else if (currentQuestion.type === 'text') {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = currentQuestion.placeholder;
    input.style.margin = '10px 0 0 0';
    input.style.padding = '20px 24px';
    input.style.width = '100%';
    input.style.maxWidth = '600px';
    input.style.fontFamily = 'Mulish, sans-serif';
    input.style.fontSize = '16px';
    input.style.border = '1.5px solid #D1D6DF';
    input.style.borderRadius = '6px';
    input.style.boxShadow = '0px 2px 10px 0px rgba(32, 53, 104, 0.12)';
    input.style.background = '#FFF';
    input.style.display = 'block';
    if (answers[currentQuestion.id]) {
      input.value = answers[currentQuestion.id];
    }
    input.onchange = (e) => {
      answers[currentQuestion.id] = e.target.value;
    };
    container.appendChild(input);

    // Read-only examples below the input
    if (currentQuestion.id === 'steps_taken') {
      const examplesText = document.createElement('div');
      examplesText.style.color = 'var(--Neutral-Dark-50---687183, var(--Neutral-300---Neutral-dark-50, #687183))';
      examplesText.style.fontFamily = 'Mulish, sans-serif';
      examplesText.style.fontSize = '14px';
      examplesText.style.fontStyle = 'normal';
      examplesText.style.fontWeight = '400';
      examplesText.style.lineHeight = 'normal';
      examplesText.style.margin = '24px 0 0 0';
      examplesText.style.maxWidth = '600px';
      examplesText.style.textAlign = 'left';
      //examplesText.innerHTML = `Examples:<br>I've started talking to a Realtor.<br>I've contacted Hometap to start the settlement process<br>I started a settlement savings goal`;
      container.appendChild(examplesText);
    }
  } else if (currentQuestion.type === 'info') {
    const message = document.createElement('p');
    message.textContent = currentQuestion.text;
    container.appendChild(message);
  }

  document.body.appendChild(container);
}

// --- Toast Notification ---
function renderToast() {
  if (!toastVisible) return;

  // Remove any existing toast
  const oldToast = document.getElementById('prototype-toast');
  if (oldToast) oldToast.remove();

  const toast = document.createElement('div');
  toast.id = 'prototype-toast';
  toast.style.position = 'fixed';
  toast.style.top = '32px';
  toast.style.right = '32px';
  toast.style.display = 'flex';
  toast.style.alignItems = 'flex-start';
  toast.style.minWidth = '420px';
  toast.style.maxWidth = '480px';
  toast.style.background = '#fff';
  toast.style.borderRadius = '12px';
  toast.style.boxShadow = '0 4px 24px 0 rgba(32, 53, 104, 0.10)';
  toast.style.borderLeft = '6px solid #2AC870';
  toast.style.padding = '24px 32px 24px 24px';
  toast.style.zIndex = '1000';
  toast.style.transition = 'transform 0.4s cubic-bezier(.4,1.3,.5,1), opacity 0.4s';
  toast.style.transform = 'translateX(40px)';
  toast.style.opacity = '0';
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  }, 10);

  // Checkmark icon
  const icon = document.createElement('img');
  icon.src = 'assets/checkmark.svg';
  icon.alt = 'Success';
  icon.style.width = '32px';
  icon.style.height = '32px';
  icon.style.marginRight = '20px';
  icon.style.marginTop = '2px';
  toast.appendChild(icon);

  // Text container
  const textContainer = document.createElement('div');
  textContainer.style.flex = '1';
  textContainer.style.display = 'flex';
  textContainer.style.flexDirection = 'column';
  textContainer.style.alignItems = 'flex-start';

  // Title
  const title = document.createElement('div');
  title.textContent = 'Recommendation found!';
  title.style.fontFamily = 'Mulish, sans-serif';
  title.style.fontWeight = '700';
  title.style.fontSize = '18px';
  title.style.color = '#152033';
  title.style.marginBottom = '4px';
  textContainer.appendChild(title);

  // Body
  const body = document.createElement('div');
  body.textContent = 'We found a recommendation for you and added it to your playbook. You can customize your playbook later.';
  body.style.fontFamily = 'Mulish, sans-serif';
  body.style.fontWeight = '400';
  body.style.fontSize = '16px';
  body.style.color = '#434C5E';
  textContainer.appendChild(body);

  toast.appendChild(textContainer);

  // Close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '24px';
  closeButton.style.color = '#687183';
  closeButton.style.cursor = 'pointer';
  closeButton.style.marginLeft = '16px';
  closeButton.style.marginTop = '2px';
  closeButton.style.lineHeight = '1';
  closeButton.style.padding = '0';
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.onclick = () => {
    toastVisible = false;
    render();
  };
  toast.appendChild(closeButton);

  document.body.appendChild(toast);
}

// --- Financial picture landing ---
function renderFocusAreasLanding() {
  // Remove only the main content, not the header
  let mainContent = document.getElementById('focus-areas-main-content');
  if (mainContent) mainContent.remove();

  // Add styles for financial picture landing if not present
  if (!document.getElementById('prototype-focus-areas-style')) {
    const style = document.createElement('style');
    style.id = 'prototype-focus-areas-style';
    style.textContent = `
      .focus-areas-root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        width: 100%;
      }
      .focus-areas-card {
        margin: 64px auto 0 auto;
        background: none;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 0;
        max-width: 600px;
        width: 100%;
      }
      .focus-areas-label {
        font-family: 'Mulish', sans-serif;
        font-size: 13px;
        font-weight: 700;
        color: #919aac;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        margin-bottom: 24px;
      }
      .focus-areas-title {
        font-family: 'Tiempos Headline', serif;
        font-size: 32px;
        font-weight: 700;
        color: #152033;
        margin-bottom: 20px;
        line-height: 40px;
        text-align: left;
        max-width: 700px;
      }
      .focus-areas-title .green {
        color: #19A274;
        font-weight: 700;
      }
      .focus-areas-helper {
        font-family: 'Mulish', sans-serif;
        font-size: 18px;
        color: #434C5E;
        margin-bottom: 32px;
        line-height: 1.4;
        text-align: left;
        max-width: 700px;
      }
      .focus-areas-image {
        margin-top: 16px;
        width: 700px;
        max-width: 100%;
        display: block;
      }
    `;
    document.head.appendChild(style);
  }

  // Main root
  const root = document.createElement('div');
  root.className = 'focus-areas-root';
  root.id = 'focus-areas-main-content';

  // Card
  const card = document.createElement('div');
  card.className = 'focus-areas-card';

  // Section label
  const label = document.createElement('div');
  label.className = 'focus-areas-label';
  label.textContent = 'Financial picture';
  card.appendChild(label);

  // Title (with green highlight)
  const title = document.createElement('div');
  title.className = 'focus-areas-title';
  title.innerHTML = `Let's take a look at your <span class="green">bigger financial picture</span>`;
  card.appendChild(title);

  // Helper text
  const helper = document.createElement('div');
  helper.className = 'focus-areas-helper';
  helper.textContent = `We’re committed to helping you meet your long-term goals, and your Hometap Investment is just one piece of the puzzle`;
  card.appendChild(helper);

  // Image
  const img = document.createElement('img');
  img.className = 'focus-areas-image';
  img.src = 'assets/focus-cloud.png';
  img.alt = 'Goals Cloud';
  card.appendChild(img);

  root.appendChild(card);
  document.body.appendChild(root);
}

// --- Start the app ---
render(); 
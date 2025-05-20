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
    title: 'How ready are you to settle your investment?',
    helperText: `As a reminder, your settlement must be settled on or before <span style='font-weight: bold'>May 1, 2031</span> but you can settle before then if you're ready. Let us know your plans and we'll share tips to put you in the best position possible. Your answer will not effect your investment in any way.`,
    options: [
      { value: 'within_year', text: 'In the next 12 months' },
      { value: 'within_three_years', text: 'In 1 to 3 years' },
      { value: 'more_than_three_years', text: 'In more than 3 years' },
      { value: 'not_sure', text: 'Not sure' }
    ]
  },
  {
    id: 'settlement_funding',
    type: 'radio',
    title: 'How do you plan to fund your settlement?',
    options: [
      { value: 'refinancing', text: 'Refinancing mortgage and other debts' },
      { value: 'cash_savings', text: 'Savings' },
      { value: 'loan_heloc', text: 'Home Equity Loan or HELOC' },
      { value: 'home_sale', text: 'Proceeds from a home sale' },
      { value: 'not_sure', text: 'Not sure' }
    ]
  },
  {
    id: 'commitment',
    type: 'radio',
    title: 'How much planning have you done so far?',
    options: [
      { value: 'still_deciding', text: 'Still deciding' },
      { value: 'committed_not_started', text: 'Committed, not started' },
      { value: 'committed_active', text: 'Taken steps' }
    ]
  },
  {
    id: 'steps_taken',
    type: 'text',
    title: 'What steps have you taken so far?',
    placeholder: "Tell us what you've been up to",
  },
  // Focus Areas Landing (no question)
  {
    id: 'focus_areas_landing',
    type: 'info',
    title: 'Focus Areas',
    text: 'This section introduces your focus areas. Placeholder copy here.'
  },
  {
    id: 'life_events_past',
    type: 'checkbox',
    title: 'Life events in the past 6 months',
    options: [
      { value: 'marriage', text: 'Marital status change' },
      { value: 'birth', text: 'Growing family' },
      { value: 'job_change', text: 'Employment change' },
      { value: 'financial_windfall', text: 'Major bonus, inheritance, or windfall' },
      { value: 'medical', text: 'Major medical expense' },
      { value: 'home_repair', text: 'Major home repair or renovation' },
      { value: 'property_transaction', text: 'Bought or sold another property' },
      { value: 'disaster', text: 'Fire, flood, or natural disaster' },
      { value: 'business', text: 'Other significant expense' },
      { value: 'none', text: 'None of the above' }
    ]
  },
  {
    id: 'life_events_future',
    type: 'checkbox',
    title: 'Life events in the next 6 months',
    options: [
      { value: 'marriage', text: 'Marital status change' },
      { value: 'birth', text: 'Growing family' },
      { value: 'job_change', text: 'Employment change' },
      { value: 'financial_windfall', text: 'Major bonus, inheritance, or windfall' },
      { value: 'medical', text: 'Major medical expense' },
      { value: 'home_repair', text: 'Major home repair or renovation' },
      { value: 'property_transaction', text: 'Buy or sell another property' },
      { value: 'business', text: 'Other significant expense' },
      { value: 'none', text: 'None of the above' }
    ]
  },
  {
    id: 'financial_wellbeing',
    type: 'checkbox',
    title: 'What is most important to your financial wellbeing?',
    options: [
      { value: 'financial_education', text: 'Building financial literacy and education' },
      { value: 'increasing_liquidity', text: 'Increasing liquidity/accessing equity' },
      { value: 'hei_questions', text: 'Getting answers to questions about my HEI' },
      { value: 'home_renovation', text: 'Planning a home renovation' },
      { value: 'lower_payments', text: 'Lowering my monthly payments or financial obligations' },
      { value: 'other', text: 'Other' }
    ]
  }
];

// Recommendations data model
const recommendations = {
  settlement_timeline: {
    within_year: [
      { id: 'timeline_soon', title: 'Settlement Planning Guide', description: 'Get ready for your upcoming settlement' }
    ],
    within_three_years: [
      { id: 'timeline_medium', title: 'Long-term Planning', description: 'Plan your settlement strategy' }
    ],
    more_than_three_years: [
      { id: 'timeline_far', title: 'Future Planning', description: 'Start thinking about your settlement' }
    ]
  },
  settlement_funding: {
    refinancing: [
      { id: 'funding_refi', title: 'Refinancing Guide', description: 'Learn about refinancing options' }
    ],
    cash_savings: [
      { id: 'funding_savings', title: 'Savings Strategy', description: 'Maximize your savings' }
    ],
    loan_heloc: [
      { id: 'funding_heloc', title: 'HELOC Information', description: 'Understanding HELOCs' }
    ],
    home_sale: [
      { id: 'funding_sale', title: 'Home Sale Guide', description: 'Prepare for your home sale' }
    ]
  },
  life_events: {
    marriage: [
      { id: 'event_marriage', title: 'Marriage Financial Planning', description: 'Financial planning for newlyweds' }
    ],
    birth: [
      { id: 'event_birth', title: 'Growing Family Guide', description: 'Financial planning for growing families' }
    ],
    job_change: [
      { id: 'event_job', title: 'Career Change Guide', description: 'Financial planning for career changes' }
    ],
    financial_windfall: [
      { id: 'event_windfall', title: 'Windfall Planning', description: 'Managing unexpected financial gains' }
    ],
    medical: [
      { id: 'event_medical', title: 'Medical Expense Planning', description: 'Managing healthcare costs' }
    ],
    home_repair: [
      { id: 'event_repair', title: 'Home Repair Planning', description: 'Managing home maintenance costs' }
    ],
    property_transaction: [
      { id: 'event_property', title: 'Property Transaction Guide', description: 'Managing property sales and purchases' }
    ],
    disaster: [
      { id: 'event_disaster', title: 'Disaster Recovery', description: 'Recovering from property damage' }
    ],
    business: [
      { id: 'event_business', title: 'Business Expense Planning', description: 'Managing business-related costs' }
    ]
  }
};

// --- State ---
let stepIndex = 0;
let answers = {};
let toastVisible = false;

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

  // Navigation
  renderNavButtons();

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
    }, 4000);
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

  const sections = ['Goals', 'Focus areas', 'Plan'];
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

  // Right: Save & Exit button
  const saveExit = document.createElement('button');
  saveExit.textContent = 'Save & Exit';
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
        background: url('assets/landing-background.png') center/contain no-repeat;
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
      <div class="address">123 Main St</div>
      <div class="city">Minneapolis, MN 55416</div>
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
        max-width: 700px;
        width: 700px;
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
  title.innerHTML = `Jane, you've had your Home Equity Investment for <span class="blue">over three years</span>`;
  card.appendChild(title);

  // Description
  const desc = document.createElement('div');
  desc.className = 'goals-intro-desc';
  desc.textContent = `Thank you for being a valued Hometap Homeowner! Let's get caught up on how things have been going with your investment and where you're at with achieving your goals.`;
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

  // Render segments
  let todaySegmentIdx = 0;
  let todaySegmentPct = 0;
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
    // If today is in this segment, record its index and percent
    if (today >= segStart && today <= segEnd) {
      todaySegmentIdx = i;
      todaySegmentPct = segPct;
    }
  }

  // Add today circle and caret
  const segments = timelineBar.querySelectorAll('.goals-intro-timeline-segment');
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

function renderQuestionPage() {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.textAlign = 'center';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';

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
  title.textContent = currentQuestion.title;
  container.appendChild(title);

  // Subheader/helper text
  if (currentQuestion.helperText) {
    const helper = document.createElement('div');
    helper.className = 'helper-text';
    helper.innerHTML = currentQuestion.helperText;
    container.appendChild(helper);
  }

  if (currentQuestion.type === 'radio' || currentQuestion.type === 'checkbox') {
    currentQuestion.options.forEach(option => {
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
      if (currentQuestion.type === 'radio' && answers[currentQuestion.id] === option.value) {
        button.classList.add('selected');
        selected = true;
      } else if (currentQuestion.type === 'checkbox' && 
                 answers[currentQuestion.id] && 
                 answers[currentQuestion.id].includes(option.value)) {
        button.classList.add('selected');
        selected = true;
      }
      button.onclick = () => {
        if (currentQuestion.type === 'radio') {
          // Reset all buttons to default style
          container.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('selected');
          });
          answers[currentQuestion.id] = option.value;
          button.classList.add('selected');
          console.log(`Question ${currentQuestion.id}: Selected ${option.value} (${option.text})`);
          // Special handling for settlement_funding question
          if (currentQuestion.id === 'settlement_funding' && option.value !== 'not_sure') {
            toastVisible = true;
            render();
          }
        } else {
          if (!answers[currentQuestion.id]) {
            answers[currentQuestion.id] = [];
          }
          const index = answers[currentQuestion.id].indexOf(option.value);
          if (index === -1) {
            answers[currentQuestion.id].push(option.value);
            button.classList.add('selected');
            console.log(`Question ${currentQuestion.id}: Added ${option.value} (${option.text})`);
          } else {
            answers[currentQuestion.id].splice(index, 1);
            button.classList.remove('selected');
            console.log(`Question ${currentQuestion.id}: Removed ${option.value} (${option.text})`);
          }
        }
      };
      container.appendChild(button);
    });
  } else if (currentQuestion.type === 'text') {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = currentQuestion.placeholder;
    input.style.margin = '10px auto';
    input.style.padding = '10px';
    input.style.width = '80%';
    input.style.maxWidth = '400px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '5px';
    if (answers[currentQuestion.id]) {
      input.value = answers[currentQuestion.id];
    }
    input.onchange = (e) => {
      answers[currentQuestion.id] = e.target.value;
      console.log(`Question ${currentQuestion.id}: Entered "${e.target.value}"`);
    };
    container.appendChild(input);
  } else if (currentQuestion.type === 'info') {
    const message = document.createElement('p');
    message.textContent = currentQuestion.text;
    container.appendChild(message);
  }

  document.body.appendChild(container);
}

function renderToast() {
  if (!toastVisible) return;

  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.top = '20px';
  toast.style.right = '20px';
  toast.style.padding = '10px';
  toast.style.backgroundColor = '#f0f0f0';
  toast.style.border = '1px solid #ccc';
  toast.style.borderRadius = '5px';
  toast.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  toast.style.zIndex = '1000';

  const message = document.createElement('p');
  message.textContent = 'This is a recommendation notification.';
  toast.appendChild(message);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.marginLeft = '10px';
  closeButton.onclick = () => {
    toastVisible = false;
    render();
  };
  toast.appendChild(closeButton);

  document.body.appendChild(toast);
}

function renderFocusAreasLanding() {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.textAlign = 'center';

  const title = document.createElement('h1');
  title.textContent = 'Focus Areas';
  container.appendChild(title);

  const message = document.createElement('p');
  message.textContent = 'This section introduces your focus areas. Placeholder copy here.';
  container.appendChild(message);

  document.body.appendChild(container);
}

function renderResultsBreakdown() {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.textAlign = 'center';

  const title = document.createElement('h1');
  title.textContent = 'Results Breakdown';
  container.appendChild(title);

  // Goals Section
  const goalsSection = document.createElement('div');
  goalsSection.style.marginTop = '30px';
  goalsSection.style.textAlign = 'left';
  goalsSection.style.maxWidth = '600px';
  goalsSection.style.margin = '0 auto';

  const goalsTitle = document.createElement('h2');
  goalsTitle.textContent = 'Your Goals';
  goalsTitle.style.marginBottom = '15px';
  goalsSection.appendChild(goalsTitle);

  const goalsList = document.createElement('ul');
  goalsList.style.listStyleType = 'none';
  goalsList.style.padding = '0';

  // Add settlement timeline goal
  if (answers.settlement_timeline) {
    const timelineGoal = document.createElement('li');
    timelineGoal.style.marginBottom = '10px';
    timelineGoal.style.padding = '10px';
    timelineGoal.style.backgroundColor = '#f5f5f5';
    timelineGoal.style.borderRadius = '5px';
    
    const question = questions.find(q => q.id === 'settlement_timeline');
    const selectedOption = question.options.find(opt => opt.value === answers.settlement_timeline);
    timelineGoal.textContent = `Settlement Timeline: ${selectedOption.text}`;
    goalsList.appendChild(timelineGoal);
  }

  // Add settlement funding goal
  if (answers.settlement_funding) {
    const fundingGoal = document.createElement('li');
    fundingGoal.style.marginBottom = '10px';
    fundingGoal.style.padding = '10px';
    fundingGoal.style.backgroundColor = '#f5f5f5';
    fundingGoal.style.borderRadius = '5px';
    
    const question = questions.find(q => q.id === 'settlement_funding');
    const selectedOption = question.options.find(opt => opt.value === answers.settlement_funding);
    fundingGoal.textContent = `Settlement Funding: ${selectedOption.text}`;
    goalsList.appendChild(fundingGoal);
  }

  goalsSection.appendChild(goalsList);
  container.appendChild(goalsSection);

  // Focus Areas Section
  const focusSection = document.createElement('div');
  focusSection.style.marginTop = '30px';
  focusSection.style.textAlign = 'left';
  focusSection.style.maxWidth = '600px';
  focusSection.style.margin = '30px auto 0';

  const focusTitle = document.createElement('h2');
  focusTitle.textContent = 'Your Focus Areas';
  focusTitle.style.marginBottom = '15px';
  focusSection.appendChild(focusTitle);

  const focusList = document.createElement('ul');
  focusList.style.listStyleType = 'none';
  focusList.style.padding = '0';

  // Add life events as focus areas
  const lifeEvents = [...(answers.life_events_past || []), ...(answers.life_events_future || [])];
  const uniqueEvents = [...new Set(lifeEvents)]; // Remove duplicates

  uniqueEvents.forEach(event => {
    const eventItem = document.createElement('li');
    eventItem.style.marginBottom = '10px';
    eventItem.style.padding = '10px';
    eventItem.style.backgroundColor = '#f5f5f5';
    eventItem.style.borderRadius = '5px';
    
    const question = questions.find(q => q.id === 'life_events_past');
    const selectedOption = question.options.find(opt => opt.value === event);
    eventItem.textContent = selectedOption.text;
    focusList.appendChild(eventItem);
  });

  // Add financial wellbeing focus areas
  if (answers.financial_wellbeing) {
    answers.financial_wellbeing.forEach(wellbeing => {
      const wellbeingItem = document.createElement('li');
      wellbeingItem.style.marginBottom = '10px';
      wellbeingItem.style.padding = '10px';
      wellbeingItem.style.backgroundColor = '#f5f5f5';
      wellbeingItem.style.borderRadius = '5px';
      
      const question = questions.find(q => q.id === 'financial_wellbeing');
      const selectedOption = question.options.find(opt => opt.value === wellbeing);
      wellbeingItem.textContent = selectedOption.text;
      focusList.appendChild(wellbeingItem);
    });
  }

  focusSection.appendChild(focusList);
  container.appendChild(focusSection);

  document.body.appendChild(container);
}

function renderLoadingScreen() {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.textAlign = 'center';

  const spinner = document.createElement('div');
  spinner.style.border = '4px solid #f3f3f3';
  spinner.style.borderTop = '4px solid #3498db';
  spinner.style.borderRadius = '50%';
  spinner.style.width = '40px';
  spinner.style.height = '40px';
  spinner.style.animation = 'spin 2s linear infinite';
  spinner.style.margin = '20px auto';

  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  container.appendChild(spinner);
  document.body.appendChild(container);
}

function renderCustomizePlan() {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.textAlign = 'center';

  const title = document.createElement('h1');
  title.textContent = 'Customize Your Plan';
  container.appendChild(title);

  const recommendations = getRecommendations();
  const recommendationsGrid = document.createElement('div');
  recommendationsGrid.style.display = 'grid';
  recommendationsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
  recommendationsGrid.style.gap = '20px';
  recommendationsGrid.style.marginTop = '20px';
  
  recommendations.forEach(rec => {
    const card = document.createElement('div');
    card.style.padding = '15px';
    card.style.border = '1px solid #ccc';
    card.style.borderRadius = '5px';
    card.style.cursor = 'pointer';
    
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = rec.title;
    card.appendChild(cardTitle);
    
    const cardDesc = document.createElement('p');
    cardDesc.textContent = rec.description;
    card.appendChild(cardDesc);
    
    // Add click handler to toggle selection
    card.onclick = () => {
      card.style.backgroundColor = card.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
    };
    
    recommendationsGrid.appendChild(card);
  });
  
  container.appendChild(recommendationsGrid);
  document.body.appendChild(container);
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

function renderNavButtons() {
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
  continueButton.textContent = 'Continue';
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

// --- Start the app ---
render(); 
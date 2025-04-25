// Calculate settlement deadline (900 days from today)
const settlementDeadline = new Date();
settlementDeadline.setDate(settlementDeadline.getDate() + 900);

// Format date as Month DD, YYYY
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
}

// Add this helper function at the top with other utility functions
function getTodayFormatted() {
    const today = new Date();
    return today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

// Survey data
const surveyData = {
    questions: [
        {
            id: 'settlement_timeline',
            section: 'Settlement',
            type: 'radio',
            title: 'When do you plan to settle your Home Equity Investment?',
            reminder: `As a reminder, your settlement must be settled on or before <span style='font-weight: bold'>${formatDate(settlementDeadline)}</span>.`,
            options: [
                {
                    value: 'within_year',
                    text: 'In the next 12 months',
                    insight: 'Okay, great! We will make sure to review all the steps for a smooth settlement process together.'
                },
                {
                    value: 'within_three_years',
                    text: 'In 1 to 3 years',
                    insight: 'Planning ahead is smart. We can help you understand your options and prepare for settlement.',
                    checkDeadline: true
                },
                {
                    value: 'more_than_three_years',
                    text: 'In more than 3 years',
                    insight: "It's important to note that your settlement deadline may be approaching. Let's discuss your options to ensure a timely settlement.",
                    checkDeadline: true
                },
                {
                    value: 'not_sure',
                    text: "Not sure",
                    insight: "That's okay! We're here to help you understand your options and create a settlement plan that works for you.",
                    checkDeadline: true
                }
            ]
        },
        {
            id: 2,
            text: "How do you plan to fund settlement?",
            // reminder: "You have several options, and we'll help you explore them all.",
            options: [
                {
                    text: "Refinancing mortgage and other debts",
                    value: "refinancing",
                    // helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Terrific. That's a popular option with our homeowners, and we have some excellent partners to help you through this process when you're ready."
                },
                {
                    text: "Savings",
                    value: "cash-savings",
                    // helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Okay! Whether you have the money on hand right now or plan to, we'll help you review the best ways to make the most of your savings.",
                },
                {
                    text: "Home Equity Loan or Home Equity Line of Credit (HELOC)",
                    value: "loan-heloc",
                    // helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Is this a sign that your credit score is in good shape? Good for you!",
                },
                {
                    text: "Proceeds from a home sale",
                    value: "home-sale",
                    // helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "I might have guessed! This is the most common option for homeowners, and we have some great resources to help you through the process.",
                    infoCard: {
                        title: "Settling Your Home Equity Investment with a Home Sale",
                        steps: [
                            {
                                number: 1,
                                text: "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis."
                            },
                            {
                                number: 2,
                                text: "Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem."
                            },
                            {
                                number: 3,
                                text: "Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh."
                            }
                        ]
                    }
                },
                {
                    text: "I'm not sure",
                    value: "not-sure",
                    insight: "That's okay! We'll help you explore your options and create a settlement plan that works for you.",
                }
            ]
        },
        {
            id: 3,
            text: "How much planning have you done so far?",
            // reminder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
            options: [
                {
                    text: "I'm still deciding if my settlement plan is right plan for me",
                    value: "still-deciding",
                    insight: "Taking time to evaluate your options is an important part of the process. We're here to help you make an informed decision."
                },
                {
                    text: "I'm committed, but haven't started making progress",
                    value: "committed-not-started",
                    insight: "Having a clear direction is the first step. We can help you start taking action towards your goal."
                },
                {
                    text: "I've taken steps towards my settlement plan",
                    value: "committed-active",
                    insight: "You're making great progress! We'll provide resources to help you maintain momentum and achieve your goals."
                }
            ]
        },
        {
            id: 4,
            text: "What steps have you taken so far?",
            reminder: "This helps us choose resources that'll meet you where you are",
            type: "text",
            placeholder: "Tell us what you've been up to",
            helper: "Ex: I've started talking to a Realtor."
        },
        {
            id: 5,
            text: "In the <span style='color: #25be8a'>past six months</span>, have you experienced any of the following life events?",
            reminder: "Select all that apply to you or an immediate family member",
            type: "checkbox",
            options: [
                {
                    text: "Marital status change",
                    value: "marital-change"
                },
                {
                    text: "Growing family",
                    value: "growing-family"
                },
                {
                    text: "Employment change",
                    value: "employment-change"
                },
                {
                    text: "Major bonus, inheritance, or other financial windfall",
                    value: "financial-windfall"
                },
                {
                    text: "Major medical expense",
                    value: "medical-expense"
                },
                {
                    text: "Major home repair or renovation",
                    value: "home-repair"
                },
                {
                    text: "Bought or sold another property",
                    value: "property-transaction"
                },
                {
                    text: "Fire, flood, or natural disaster",
                    value: "natural-disaster"
                },
                {
                    text: "Other significant expense",
                    value: "other-expense"
                }
            ]
        },
        {
            id: 6,
            text: "In <span style='color: #25be8a'>the next six months</span> do you expect to experience any of the following life events?",
            reminder: "Select all that apply to you or an immediate family member",
            type: "checkbox",
            options: [
                {
                    text: "Marital status change",
                    value: "marital-change"
                },
                {
                    text: "Growing family",
                    value: "growing-family"
                },
                {
                    text: "Employment change",
                    value: "employment-change"
                },
                {
                    text: "Major bonus, inheritance, or other financial windfall",
                    value: "financial-windfall"
                },
                {
                    text: "Major medical expense",
                    value: "medical-expense"
                },
                {
                    text: "Major home repair or renovation",
                    value: "home-repair"
                },
                {
                    text: "Buy or sell another property",
                    value: "property-transaction"
                },
                {
                    text: "Fire, flood, or natural disaster",
                    value: "natural-disaster"
                },
                {
                    text: "Other significant expense",
                    value: "other-expense"
                }
            ]
        },
        {
            id: 7,
            section: 'Financial wellbeing',
            type: 'multi_select_with_other',
            title: 'What is most important to your financial wellbeing?',
            reminder: 'Select all that apply',
            options: [
                {
                    value: 'financial_education',
                    text: 'Financial education',
                    insight: 'We offer resources and guidance to help you make informed financial decisions.'
                },
                {
                    value: 'increasing_liquidity',
                    text: 'Increasing liquidity/accessing equity',
                    insight: 'We can explore options to help you access your home equity.'
                },
                {
                    value: 'hei_questions',
                    text: 'Getting answers to questions about my HEI',
                    insight: 'Our team is here to help clarify any aspects of your Home Equity Investment.'
                },
                {
                    value: 'home_renovation',
                    text: 'Planning a home renovation',
                    insight: 'We can provide guidance on home improvement projects and financing options.'
                },
                {
                    value: 'lower_payments',
                    text: 'Lowering my monthly payments or financial obligations',
                    insight: 'We can discuss strategies to help manage your financial commitments.'
                }
            ],
            otherOption: {
                value: 'other_support',
                placeholder: 'Please specify...'
            }
        }
    ]
};

// DOM Elements
const continueBtn = document.querySelector('.continue-btn');
const backBtn = document.querySelector('.back-btn');
const questionContainer = document.querySelector('.question-container');
const progressSteps = document.querySelectorAll('.step');
const mainContent = document.querySelector('.main-content');

// State management
let currentQuestionIndex = 0;
let answers = {};
let totalAnswers = 0;
let recommendationPreferences = {};
let topRecommendation = null;
let categorizedRecommendations = {};

// Define all possible recommendations
const allRecommendations = {
    settlement: {
        'refinancing': {
            title: 'Settling Your Home Equity Investment with a Refinance',
            description: 'Learn about the refinancing process, what to consider, and how to prepare for settlement.',
            url: 'https://www.hometap.com/blog/settling-home-equity-investment-refinance',
            category: 'Plan for the future',
            type: 'Article',
            minutes_to_complete: 3
        },
        'home-sale': {
            title: 'Settling Your Home Equity Investment with a Home Sale',
            description: 'A comprehensive guide to settling your investment through a home sale.',
            url: 'https://www.hometap.com/blog/settling-home-equity-investment-home-sale',
            category: 'Plan for the future',
            type: 'Article',
            minutes_to_complete: 3
        },
        'cash-savings': {
            title: 'Using Cash Savings to Settle Your HEI',
            description: 'Learn how to settle your Investment with cash savings.',
            url: '#',
            category: 'Plan for the future',
            type: 'Article',
            minutes_to_complete: 3
        },
        'loan-heloc': {
            title: 'Settling with a Home Equity Line of Credit',
            description: 'Learn how to settle your Investment with a Home Equity Line of Credit.',
            url: '#',
            category: 'Plan for the future',
            type: 'Article',
            minutes_to_complete: 3
        }
    },
    timeline: {
        'within_year': {
            title: 'Contact Investment Support',
            description: 'Ready to start your settlement? Our Investment Support team is here to help.',
            action: 'Email',
            actionUrl: 'mailto:homeowners@hometap.com',
            category: 'Plan for the future',
            type: 'Contact',
            minutes_to_complete: 15
        },
        'within_three_years': {
            title: 'Settlement Calculator',
            description: 'Use our calculator to estimate your settlement amount and explore your options.',
            url: '#',
            category: 'Stay on track',
            type: 'Guides & More',
            minutes_to_complete: 5
        },
        'more_than_three_years': {
            title: 'Quarterly Account Statement',
            description: 'Review your latest statement to stay informed about your investment.',
            url: '#',
            category: 'Stay on track',
            type: 'Guides & More',
            minutes_to_complete: 10
        },
        'not_sure': {
            title: 'Understanding Your Settlement Options',
            description: 'Explore different ways to settle your Home Equity Investment.',
            url: '#',
            category: 'Plan for the future',
            type: 'Video',
            minutes_to_complete: 2
        }
    },
    lifeEvents: {
        'job_change': {
            title: 'Career Transitions and Your HEI',
            description: 'Learn how to manage your Investment during major life events.',
            url: 'https://go.hometap.com/dashboard/resources/your-home-equity-investment-through-life-events',
            category: 'Stay on track',
            type: 'Article',
            minutes_to_complete: 3
        },
        'retirement': {
            title: 'Planning for Retirement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Strategies for managing your HEI during retirement.',
            url: '#',
            category: 'Plan for the future',
            type: 'Article',
            minutes_to_complete: 2
        },
        'marriage': {
            title: 'Marriage and Your Home Investment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. What newlyweds should know about HEIs.',
            url: '#',
            category: 'Stay on track',
            type: 'Article',
            minutes_to_complete: 7
        },
        'divorce': {
            title: 'Managing Your HEI During Divorce',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Important considerations for your investment.',
            url: '#',
            category: 'Stay on track',
            type: 'Article',
            minutes_to_complete: 15
        },
        'birth': {
            title: 'Growing Family Guide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Financial planning for new parents.',
            url: '#',
            category: 'Plan for the future',
            type: 'Video',
            minutes_to_complete: 7
        },
        'medical': {
            title: 'Health & Financial Wellness',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Resources for managing medical expenses.',
            url: '#',
            category: 'Stay on track',
            type: 'Guides & More',
            minutes_to_complete: 10
        },
        'education': {
            title: 'Education Funding Options',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exploring ways to finance education.',
            url: '#',
            category: 'Plan for the future',
            type: 'Article',
            minutes_to_complete: 11
        },
        'business': {
            title: 'Business Owner Resources',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Managing your HEI while running a business.',
            url: '#',
            category: 'Plan for the future',
            type: 'Video',
            minutes_to_complete: 12
        },
        'relocation': {
            title: 'Relocation and Your HEI',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. What to know about moving with an HEI.',
            url: '#',
            category: 'Plan for the future',
            type: 'Article',
            minutes_to_complete: 3
        }
    },
    support: {
        'financial_education': {
            title: 'Financial Education Resources',
            description: 'Access our library of educational content to help you make informed financial decisions.',
            url: '#',
            category: 'Stay on track',
            type: 'Guides & More',
            minutes_to_complete: 20
        },
        'increasing_liquidity': {
            title: 'Home Equity Access Guide',
            description: 'Learn about different ways to tap into your home equity and which option might be right for you.',
            url: 'https://www.hometap.com/homeowner-resources/options-for-tapping-into-your-homes-equity',
            category: 'Stay on track',
            type: 'Guides & More',
            minutes_to_complete: 24
        },
        'hei_questions': {
            title: 'Schedule a HEI Review',
            description: 'Book a session with our team to review your Home Equity Investment and get answers to your questions.',
            url: 'mailto:homeowners@hometap.com',
            category: 'Stay on track',
            type: 'Contact',
            minutes_to_complete: 30
        },
        'home_renovation': {
            title: 'Renovation Calculator',
            description: 'Get guidance on planning and financing your home renovation projects.',
            url: 'https://www.hometap.com/blog/how-to-evaluate-your-home-renovation-estimate',
            category: 'Plan for the future',
            type: 'Guides & More',
            minutes_to_complete: 10
        },
        'lower_payments': {
            title: 'Financial Obligation Management',
            description: 'Explore strategies and options for managing your monthly payments and financial commitments.',
            url: '#',
            category: 'Stay on track',
            type: 'Guides & More',
            minutes_to_complete: 10
        }
    }
};

// Add this at the top of the file with other global variables
let selectedRecommendations = new Set();
let animatingNumber = null;

function animateNumber(start, end, element, duration = 1000) {
    if (animatingNumber) {
        cancelAnimationFrame(animatingNumber);
    }
    
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (end - start) * easeOutQuart);
        
        element.textContent = current;
        
        if (progress < 1) {
            animatingNumber = requestAnimationFrame(update);
        } else {
            animatingNumber = null;
        }
    }
    
    animatingNumber = requestAnimationFrame(update);
}

function updatePlanTotalMinutes() {
    const totalMinutesElement = document.getElementById('planTotalMinutes');
    if (!totalMinutesElement) return;

    let total = 0;

    // Add top recommendation minutes if selected
    if (selectedRecommendations.has('top-0')) {
        total += topRecommendation.minutes_to_complete;
    }

    // Add other selected recommendations minutes
    Object.entries(categorizedRecommendations).forEach(([category, items]) => {
        items.forEach((rec, index) => {
            if (selectedRecommendations.has(`${category}-${index}`)) {
                total += rec.minutes_to_complete;
            }
        });
    });

    totalMinutesElement.textContent = total;
}

function toggleRecommendation(category, index, button) {
    const recId = `${category}-${index}`;
    const plusIcon = button.querySelector('.plus-icon');
    const checkIcon = button.querySelector('.check-icon');
    
    if (selectedRecommendations.has(recId)) {
        selectedRecommendations.delete(recId);
        button.classList.remove('added');
        plusIcon.style.display = 'block';
        checkIcon.style.display = 'none';
    } else {
        selectedRecommendations.add(recId);
        button.classList.add('added');
        plusIcon.style.display = 'none';
        checkIcon.style.display = 'block';
    }
    
    // Update the plan section
    updatePlanSection();
    updatePlanTotalMinutes();
}

function updatePlanSection() {
    const planList = document.getElementById('planList');
    if (!planList) return;

    // Clear the current plan list
    planList.innerHTML = '';

    // Add top recommendation if selected
    if (selectedRecommendations.has('top-0')) {
        const planItem = document.createElement('div');
        planItem.className = 'plan-item';
        planItem.innerHTML = `
            <div class="time-estimate">${topRecommendation.minutes_to_complete} MIN</div>
            <div class="plan-item-text">
                <h3>${topRecommendation.title}</h3>
                <p>${topRecommendation.description}</p>
                <div class="recommendation-type">
                    <div class="recommendation-type-icon ${(topRecommendation.type || 'Article').toLowerCase()}"></div>
                    ${topRecommendation.type || 'Article'}
                </div>
            </div>
        `;
        planList.appendChild(planItem);
    }

    // Add other selected recommendations
    Object.entries(categorizedRecommendations).forEach(([category, items]) => {
        items.forEach((rec, index) => {
            if (selectedRecommendations.has(`${category}-${index}`)) {
                const planItem = document.createElement('div');
                planItem.className = 'plan-item';
                planItem.innerHTML = `
                    <div class="time-estimate">${rec.minutes_to_complete} MIN</div>
                    <div class="plan-item-text">
                        <h3>${rec.title}</h3>
                        <p>${rec.description}</p>
                        <div class="recommendation-type">
                            <div class="recommendation-type-icon ${(rec.type || 'Article').toLowerCase()}"></div>
                            ${rec.type || 'Article'}
                        </div>
                    </div>
                `;
                planList.appendChild(planItem);
            }
        });
    });
}

function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

function showOutcomeScreen() {
    // First, ensure we have the main content container
    let mainContent = document.querySelector('.main-content');
    if (!mainContent) {
        mainContent = document.createElement('div');
        mainContent.className = 'main-content';
        document.body.appendChild(mainContent);
    }

    // Generate recommendations
    const recommendations = generateRecommendations();
    if (!recommendations || !recommendations.topRecommendation) {
        console.error('Failed to generate recommendations');
        return;
    }

    // Update global variables
    topRecommendation = recommendations.topRecommendation;
    categorizedRecommendations = recommendations.categorizedRecommendations;

    // Ensure type exists for top recommendation
    const topRecType = (topRecommendation.type || 'Article').toLowerCase();
    console.log('Top recommendation type:', topRecType);

    // Reset selected recommendations
    selectedRecommendations.clear();
    selectedRecommendations.add('top-0');

    // Calculate dates
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 90);

    // Create the outcome screen container
    const outcomeScreen = document.createElement('div');
    outcomeScreen.className = 'outcome-screen';

    // Create main content section
    const outcomeMain = document.createElement('div');
    outcomeMain.className = 'outcome-main';

    // Add title and context
    outcomeMain.innerHTML = `
        <h1 class="outcome-title">Build your plan</h1>
        <p class="outcome-context">Choose from resources curated just for you</p>
    `;

    // Add top recommendation
    const topRecSection = document.createElement('div');
    topRecSection.className = 'recommendation-category';
    topRecSection.innerHTML = `
        <h2 class="category-header">Top recommendation</h2>
        <div class="recommendation-card">
            <div class="time-badge">
                ${topRecommendation.minutes_to_complete} MIN
            </div>
            <h3>${topRecommendation.title}</h3>
            <p>${topRecommendation.description}</p>
            <div class="recommendation-type">
                <div class="recommendation-type-icon ${topRecType}"></div>
                ${topRecommendation.type || 'Article'}
            </div>
            <button class="add-to-plan added" onclick="toggleRecommendation('top', 0, this)">
                <svg class="plus-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" style="display: none;">
                    <path d="M8 3.33333V12.6667M12.6667 8H3.33334" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg class="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" style="display: block;">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `;
    outcomeMain.appendChild(topRecSection);

    // Add other recommendations
    Object.entries(categorizedRecommendations)
        .filter(([category, items]) => items.length > 0)
        .forEach(([category, items]) => {
            const categorySection = document.createElement('div');
            categorySection.className = 'recommendation-category';
            categorySection.innerHTML = `
                <h2 class="category-header">${category}</h2>
                ${items.map((rec, index) => {
                    const recType = (rec.type || 'Article').toLowerCase();
                    return `
                        <div class="recommendation-card">
                            <div class="time-badge">
                                ${rec.minutes_to_complete} MIN
                            </div>
                            <h3>${rec.title}</h3>
                            <p>${rec.description}</p>
                            <div class="recommendation-type">
                                <div class="recommendation-type-icon ${recType}"></div>
                                ${rec.type || 'Article'}
                            </div>
                            <button class="add-to-plan" onclick="toggleRecommendation('${category}', ${index}, this)">
                                <svg class="plus-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 3.33333V12.6667M12.6667 8H3.33334" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <svg class="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" style="display: none;">
                                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    `;
                }).join('')}
            `;
            outcomeMain.appendChild(categorySection);
        });

    // Create sidebar
    const outcomeSidebar = document.createElement('div');
    outcomeSidebar.className = 'outcome-sidebar';
    outcomeSidebar.innerHTML = `
        <div class="personality-type">
            <p>[personality_type]</p>
            <p>To progress you should do xyz...</p>
        </div>
        <div class="plan-section">
            <div class="plan-header">
                <div class="plan-header-content">
                    <div class="plan-header-top">
                        <h2>Your plan</h2>
                        <div class="time-badge">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 4V8L10.6667 9.33333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="time-text">EST.</span> <span class="time-number" id="planTotalMinutes">0</span><span class="time-text">&nbsp;MIN</span>
                        </div>
                    </div>
                    <p class="plan-dates">${getTodayFormatted()} – ${formatDate(endDate)}</p>
                </div>
            </div>
            <div id="planList" class="plan-list">
                <!-- Plan items will be inserted here -->
            </div>
        </div>
    `;

    // Append main content and sidebar to outcome screen
    outcomeScreen.appendChild(outcomeMain);
    outcomeScreen.appendChild(outcomeSidebar);

    // Clear main content and append outcome screen
    mainContent.innerHTML = '';
    mainContent.appendChild(outcomeScreen);

    // Hide navigation if it exists
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        navigation.style.display = 'none';
    }

    // Create and append sticky footer
    const stickyFooter = document.createElement('div');
    stickyFooter.className = 'sticky-footer';
    stickyFooter.innerHTML = `
        <div class="footer-buttons">
            <button class="secondary-button">Back to questions</button>
            <button class="primary-button" onclick="handleSavePlan()">Save plan</button>
        </div>
    `;
    document.body.appendChild(stickyFooter);

    // Initialize the plan section
    try {
        updatePlanSection();
        updatePlanTotalMinutes();
    } catch (error) {
        console.error('Error initializing plan section:', error);
    }

    // Update progress to show step 3 as active
    currentQuestionIndex = surveyData.questions.length; // Set to end of questions
    updateProgressSteps();

    // Log success
    console.log('Outcome screen rendered successfully');
}

function showModal(message) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${message}</h2>
            <button onclick="this.closest('.modal').remove()">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Initialize event listeners
function initializeEventListeners() {
    // Navigation button clicks
    if (continueBtn) {
        continueBtn.addEventListener('click', handleContinue);
    }

    if (backBtn) {
        backBtn.addEventListener('click', handleBack);
    }

    // Save & Exit button
    const saveExitBtn = document.querySelector('.save-exit-btn');
    if (saveExitBtn) {
        saveExitBtn.addEventListener('click', handleSaveAndExit);
    }

    // Initialize radio button listeners
    initializeRadioListeners();
}

// Initialize radio button listeners
function initializeRadioListeners() {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(radio => {
        radio.addEventListener('change', handleOptionSelect);
    });
}

// Render current question
function renderQuestion(index) {
    const question = surveyData.questions[index];
    let container;

    switch (question.type) {
        case 'multi_select_with_other':
            container = renderMultiSelectWithOther(question);
            break;
        case 'text':
            container = renderTextQuestion(question);
            break;
        case 'checkbox':
            container = renderCheckboxQuestion(question);
            break;
        default:
            container = renderRadioQuestion(question);
    }

    // Clear existing content and append new container
    questionContainer.innerHTML = '';
    questionContainer.appendChild(container);

    // Update continue button text for last question
    if (continueBtn && index === surveyData.questions.length - 1) {
        continueBtn.textContent = 'Build my plan';
    } else if (continueBtn) {
        continueBtn.textContent = 'Continue';
    }

    // Remove any existing insight
    const existingInsight = document.querySelector('.insight-container');
    if (existingInsight) {
        existingInsight.remove();
    }

    // Initialize appropriate listeners based on question type
    if (question.type === 'text') {
        const textInput = container.querySelector('.text-input');
        textInput.addEventListener('input', handleTextInput);
    } else if (question.type === 'checkbox') {
        initializeCheckboxListeners();
    } else if (!question.type || question.type === 'radio') {
        initializeRadioListeners();

        // If there's a previously selected answer for this question, select it and show insight
        if (answers[index]) {
            const radioToCheck = container.querySelector(`input[type="radio"][value="${answers[index]}"]`);
            if (radioToCheck) {
                radioToCheck.checked = true;
                const selectedOption = question.options.find(opt => opt.value === answers[index]);
                if (selectedOption && selectedOption.insight) {
                    showInsight(selectedOption.insight);
                }
            }
        }
    }
}

// Helper function to render text question
function renderTextQuestion(question) {
    const container = document.createElement('div');
    container.className = 'question-container';
    container.innerHTML = `
        <h1 class="question-title">${question.text}</h1>
        <p class="question-reminder">${question.reminder}</p>
        <div class="text-input-container">
            <input type="text" 
                class="text-input" 
                placeholder="${question.placeholder}"
                value="${answers[currentQuestionIndex] || ''}"
            >
            <p class="input-helper">${question.helper}</p>
        </div>
    `;
    return container;
}

// Helper function to render checkbox question
function renderCheckboxQuestion(question) {
    const container = document.createElement('div');
    container.className = 'question-container';

    // Randomize options if this is question 5 or 6
    let displayOptions = [...question.options];
    if (question.id === 5 || question.id === 6) {
        // Fisher-Yates shuffle algorithm
        for (let i = displayOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [displayOptions[i], displayOptions[j]] = [displayOptions[j], displayOptions[i]];
        }
    }

    container.innerHTML = `
        <h1 class="question-title">${question.text}</h1>
        <p class="question-reminder">${question.reminder}</p>
        <div class="options multi-select">
            ${displayOptions.map(option => `
                <label class="option checkbox-option">
                    <input type="checkbox" 
                        value="${option.value}"
                        ${(answers[currentQuestionIndex] || []).includes(option.value) ? 'checked' : ''}
                    >
                    <span class="checkbox-custom"></span>
                    <span class="option-text">${option.text}</span>
                </label>
            `).join('')}
            <label class="option checkbox-option">
                <input type="checkbox" value="none">
                <span class="checkbox-custom"></span>
                <span class="option-text">None of the above</span>
            </label>
        </div>
    `;

    // Add event listeners for checkboxes and none option
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const noneCheckbox = container.querySelector('input[value="none"]');
    
    // Initialize answer array if not exists
    if (!answers[currentQuestionIndex]) {
        answers[currentQuestionIndex] = [];
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const value = e.target.value;
            const previousLength = answers[currentQuestionIndex].length;
            
            if (value === 'none' && e.target.checked) {
                // If "None of the above" is selected, uncheck all other options
                checkboxes.forEach(cb => {
                    if (cb !== noneCheckbox) {
                        cb.checked = false;
                    }
                });
                answers[currentQuestionIndex] = ['none'];
            } else if (value !== 'none' && e.target.checked) {
                // If any other option is selected, uncheck "None of the above"
                noneCheckbox.checked = false;
                answers[currentQuestionIndex] = answers[currentQuestionIndex].filter(v => v !== 'none');
                answers[currentQuestionIndex].push(value);
            } else {
                // Option was unchecked
                answers[currentQuestionIndex] = answers[currentQuestionIndex].filter(v => v !== value);
            }
            
            // Enable continue if at least one option is selected
            if (continueBtn) {
                continueBtn.disabled = answers[currentQuestionIndex].length === 0;
            }
        });
    });

    return container;
}

// Helper function to render radio question
function renderRadioQuestion(question) {
    const container = document.createElement('div');
    container.className = 'question-container';
    container.innerHTML = `
        <h1 class="question-title">${question.title || question.text}</h1>
        <p class="question-reminder">${question.reminder || ''}</p>
        <div class="options">
            ${question.options.map(option => `
                <label class="option-wrapper">
                    <input type="radio" name="question_${question.id}" value="${option.value}">
                    <div class="option">
                        <div class="option-text">
                            <span class="option-title">${option.text}</span>
                            ${option.helper ? `<span class="option-helper">${option.helper}</span>` : ''}
                        </div>
                        <div class="option-insight-wrapper" style="display: none;">
                            <div class="option-insight">
                                <p>${option.insight || ''}</p>
                            </div>
                        </div>
                    </div>
                </label>
            `).join('')}
        </div>
    `;
    return container;
}

// Render info card
function renderInfoCard(infoCard) {
    return `
        <div class="info-card">
            <h3>${infoCard.title}</h3>
            ${infoCard.steps.map(step => `
                <div class="info-step">
                    <strong>Step ${step.number}:</strong> ${step.text}
                </div>
            `).join('')}
        </div>
    `;
}

// Handle option selection
function handleOptionSelect(e) {
    console.log('Option selected:', e.target.value);
    const selectedValue = e.target.value;
    const currentQuestion = surveyData.questions[currentQuestionIndex];
    console.log('Current question:', currentQuestion);
    
    // Hide all insights first
    const allInsights = document.querySelectorAll('.option-insight-wrapper');
    allInsights.forEach(insight => {
        insight.style.display = 'none';
    });
    
    // Remove expanded class from all options
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => {
        option.classList.remove('expanded');
    });
    
    // Show insight for selected option
    const selectedOption = currentQuestion.options.find(opt => opt.value === selectedValue);
    if (selectedOption) {
        let insightText = selectedOption.insight;
        
        // Special handling for settlement timeline question
        if (currentQuestion.id === 'settlement_timeline' && selectedOption.checkDeadline) {
            const daysUntilDeadline = Math.ceil((settlementDeadline - new Date()) / (1000 * 60 * 60 * 24));
            
            if (selectedValue === 'within_three_years' && daysUntilDeadline < 1000) {
                insightText = `Great! Planning ahead is smart since your settlement deadline is coming up in less than 3 years. We'll work together to create a settlement plan that meets this timeline.`;
            } else if (selectedValue === 'more_than_three_years') {
                insightText = `Okay, we'll revisit this after you complete the check-in. Please note that your investment must be settled by ${formatDate(settlementDeadline)}. We're here to help keep that as stress-free as possible.`;
            } else if (selectedValue === 'not_sure') {
                insightText = `No problem. We'll be sure to review your HEI pricing and settlement options to help you make an informed decision well before your settlement deadline of ${formatDate(settlementDeadline)}.`;
            }
        }
        
        // Find and show the insight for the selected option
        const selectedOptionElement = e.target.closest('.option-wrapper').querySelector('.option');
        const insightWrapperElement = selectedOptionElement.querySelector('.option-insight-wrapper');
        const insightElement = selectedOptionElement.querySelector('.option-insight');
        if (insightElement) {
            insightElement.innerHTML = `<p>${insightText}</p>`;
            insightWrapperElement.style.display = 'block';
            selectedOptionElement.classList.add('expanded');
        }
    }

    // Update answers and continue button
    answers[currentQuestionIndex] = selectedValue;
    console.log('Updated answers:', answers);
    if (continueBtn) {
        continueBtn.disabled = false;
        console.log('Continue button enabled');
    }
}

// Show insight message
function showInsight(insightText) {
    let insightContainer = document.querySelector('.insight-container');
    if (!insightContainer) {
        insightContainer = document.createElement('div');
        insightContainer.className = 'insight-container';
        
        // Insert after options container on desktop, before navigation on mobile
        if (window.innerWidth > 768) {
            document.querySelector('.options').insertAdjacentElement('afterend', insightContainer);
        } else {
            document.querySelector('.navigation').insertAdjacentElement('beforebegin', insightContainer);
        }
    }

    insightContainer.innerHTML = `
        <div class="insight">
            <p>${insightText}</p>
        </div>
    `;

    // Add visible class after a brief delay for animation
    setTimeout(() => {
        insightContainer.querySelector('.insight').classList.add('visible');
    }, 10);
}

// Update insight position on window resize
window.addEventListener('resize', () => {
    const insightContainer = document.querySelector('.insight-container');
    if (!insightContainer) return;

    if (window.innerWidth > 768) {
        // Move to after options on desktop
        const optionsContainer = document.querySelector('.options');
        if (optionsContainer) {
            optionsContainer.insertAdjacentElement('afterend', insightContainer);
        }
    } else {
        // Move to before navigation on mobile
        const navigation = document.querySelector('.navigation');
        if (navigation) {
            navigation.insertAdjacentElement('beforebegin', insightContainer);
        }
    }
});

// Handle continue button click
function handleContinue() {
    console.log('Continue button clicked');
    const currentQuestion = surveyData.questions[currentQuestionIndex];
    console.log('Current question:', currentQuestion);
    console.log('Current answers:', answers);
    
    // Update button text for last question
    if (currentQuestionIndex === surveyData.questions.length - 1) {
        showPersonaScreen();
        return;
    }
    
    // Check if we're on the last question first
    if (currentQuestionIndex === surveyData.questions.length - 1) {
        console.log('On last question, showing loading screen');
        showLoadingScreen();
        return;
    }
    
    // Check if this is the settlement plan question
    if (currentQuestion.id === 2) {
        console.log('Found settlement plan question');
        const selectedValue = answers[currentQuestionIndex];
        console.log('Selected value:', selectedValue);
        if (selectedValue && selectedValue !== 'not-sure') {
            console.log('Showing recommendation modal for:', selectedValue);
            showRecommendationModal(selectedValue);
            return; // Don't advance to next question yet
        }
    }
    
    // Normal continue behavior for other questions
    console.log('Advancing to next question');
    currentQuestionIndex++;
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}

// Show loading screen with animated steps
function showLoadingScreen() {
    // Clear the main content first
    mainContent.innerHTML = '';

    // Create and append loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <h2 class="loading-title">Generating recommendations...</h2>
            <div class="loading-steps">
                <div class="loading-step">
                    <div class="step-icon">
                        <div class="spinner"></div>
                        <div class="checkmark">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <span>Analyzing your answers</span>
                </div>
                <div class="loading-step">
                    <div class="step-icon">
                        <div class="spinner"></div>
                        <div class="checkmark">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <span>Generating recommendations</span>
                </div>
                <div class="loading-step">
                    <div class="step-icon">
                        <div class="spinner"></div>
                        <div class="checkmark">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <span>Preparing your plan</span>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(loadingScreen);

    // Hide the navigation
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        navigation.style.display = 'none';
    }

    // Animate checkmarks sequentially
    const steps = loadingScreen.querySelectorAll('.loading-step');
    const stepDelay = 1000; // 1 second between each step
    
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('completed');
        }, (index + 1) * stepDelay);
    });

    // Show outcome screen after all animations
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.remove();
            // Force a progress update to show all sections as complete
            updateProgressSteps();
            // Show the outcome screen
            showOutcomeScreen();
        }, 500);
    }, 4000);
}

// Handle back button click
function handleBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateProgressSteps();
        renderQuestion(currentQuestionIndex);
    }
}

// Update progress steps
function updateProgressSteps() {
    const progressSteps = document.querySelectorAll('.step');
    
    // Clear existing classes from all steps
    progressSteps.forEach(step => {
        step.classList.remove('active', 'completed');
    });

    // If we're on the outcome screen (after all questions)
    if (currentQuestionIndex >= surveyData.questions.length) {
        // Mark all previous steps as completed
        progressSteps[0].classList.add('completed');
        progressSteps[1].classList.add('completed');
        // Mark the last step as active
        progressSteps[2].classList.add('active');
    } else {
        // For questions 0-3: first section active
        // For questions 4-6: second section active
        // For question 7: third section active
        const currentSection = currentQuestionIndex < 4 ? 0 : (currentQuestionIndex < 7 ? 1 : 2);
        
        // Mark previous sections as completed
        for (let i = 0; i < currentSection; i++) {
            progressSteps[i].classList.add('completed');
        }
        
        // Mark current section as active
        progressSteps[currentSection].classList.add('active');
    }
}

// Handle save and exit
function handleSaveAndExit() {
    console.log('Saving progress...');
    console.log('Current answers:', answers);
    // Here you would implement save functionality
}

// Generate recommendations based on answers
function generateRecommendations() {
    const settlementMethod = answers[1]; // Question 2 is "How do you plan to settle?"
    const timeline = answers[0]; // Question 1 is timeline
    const lifeEvents = answers[4] || []; // Question 5 is life events (multi-select)
    const supportNeeds = answers[6] || []; // Question 7 is financial wellbeing support
    
    console.log('Generating recommendations with:', { settlementMethod, timeline, lifeEvents, supportNeeds });
    
    // Start with an empty set of categorized recommendations
    const categorizedRecommendations = {
        'Stay on track': [],
        'Plan for the future': [],
        'Guides & More': [],
        'Video': [],
        'Contact': []
    };

    // Add settlement method recommendation
    if (settlementMethod && allRecommendations.settlement[settlementMethod]) {
        const rec = allRecommendations.settlement[settlementMethod];
        categorizedRecommendations[rec.category].push({
            title: rec.title,
            description: rec.description,
            actionUrl: rec.url,
            minutes_to_complete: rec.minutes_to_complete,
            type: rec.type || 'Article' // Ensure type is set
        });
    }

    // Add timeline-based recommendation
    if (timeline && allRecommendations.timeline[timeline]) {
        const rec = allRecommendations.timeline[timeline];
        categorizedRecommendations[rec.category].push({
            title: rec.title,
            description: rec.description,
            actionUrl: rec.actionUrl || rec.url,
            minutes_to_complete: rec.minutes_to_complete,
            type: rec.type || 'Article' // Ensure type is set
        });
    }

    // Map Question 5 values to recommendation keys
    const lifeEventMap = {
        'marital-change': 'marriage',
        'growing-family': 'birth',
        'employment-change': 'job_change',
        'medical-expense': 'medical',
        'property-transaction': 'relocation',
        'financial-windfall': 'business',
        'home-repair': 'business',
        'natural-disaster': 'business',
        'other-expense': 'business'
    };

    // Add life event recommendations
    if (lifeEvents && lifeEvents.length > 0) {
        lifeEvents.forEach(event => {
            if (event !== 'none') {
                const recommendationKey = lifeEventMap[event];
                if (recommendationKey && allRecommendations.lifeEvents[recommendationKey]) {
                    const rec = allRecommendations.lifeEvents[recommendationKey];
                    categorizedRecommendations[rec.category].push({
                        title: rec.title,
                        description: rec.description,
                        actionUrl: rec.url,
                        minutes_to_complete: rec.minutes_to_complete,
                        type: rec.type || 'Article' // Ensure type is set
                    });
                }
            }
        });
    }

    // Add support recommendations
    if (supportNeeds && supportNeeds.length > 0) {
        supportNeeds.forEach(need => {
            if (need !== 'other' && allRecommendations.support[need]) {
                const rec = allRecommendations.support[need];
                categorizedRecommendations[rec.category].push({
                    title: rec.title,
                    description: rec.description,
                    actionUrl: rec.url,
                    minutes_to_complete: rec.minutes_to_complete,
                    type: rec.type || 'Article' // Ensure type is set
                });
            }
        });
    }

    // Determine top recommendation based on user's responses
    let topRecommendation;
    
    if (timeline === 'within_year' || timeline === 'within_three_years') {
        // If they're planning to settle soon, prioritize their settlement method guide
        topRecommendation = settlementMethod && allRecommendations.settlement[settlementMethod];
    } else if (lifeEvents && lifeEvents.length === 1 && lifeEvents[0] !== 'none') {
        // If they selected exactly one life event, prioritize that recommendation
        const recommendationKey = lifeEventMap[lifeEvents[0]];
        topRecommendation = recommendationKey && allRecommendations.lifeEvents[recommendationKey];
    } else if (supportNeeds && supportNeeds.length === 1 && supportNeeds[0] !== 'other') {
        // If they selected exactly one support need, prioritize that recommendation
        topRecommendation = allRecommendations.support[supportNeeds[0]];
    } else {
        // Otherwise, prioritize their timeline-based recommendation
        topRecommendation = timeline && allRecommendations.timeline[timeline];
    }

    // If no specific top recommendation can be determined, use a default
    if (!topRecommendation) {
        topRecommendation = {
            title: 'Plan Your Settlement',
            description: 'Explore your options and create a settlement plan that works for you.',
            action: 'Try',
            actionUrl: '#',
            minutes_to_complete: 5,
            type: 'Article'
        };
    } else {
        // Ensure all properties are copied over
        topRecommendation = {
            ...topRecommendation,
            type: topRecommendation.type || 'Article',
            minutes_to_complete: topRecommendation.minutes_to_complete || 5
        };
    }

    console.log('Generated recommendations:', { topRecommendation, categorizedRecommendations });
    return { topRecommendation, categorizedRecommendations };
}

// Handle text input
function handleTextInput(event) {
    const value = event.target.value.trim();
    const previousAnswer = answers[currentQuestionIndex];
    answers[currentQuestionIndex] = value;
    
    // Enable/disable continue button based on whether there's text
    if (continueBtn) {
        continueBtn.disabled = !value;
    }
}

// Initialize checkbox listeners
function initializeCheckboxListeners() {
    const checkboxes = document.querySelectorAll('.checkbox-option input[type="checkbox"]');
    const noneButton = document.querySelector('.none-btn');
    
    // Initialize answer array if not exists
    if (!answers[currentQuestionIndex]) {
        answers[currentQuestionIndex] = [];
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const value = e.target.value;
            const previousLength = answers[currentQuestionIndex].length;
            
            if (e.target.checked) {
                answers[currentQuestionIndex].push(value);
            } else {
                answers[currentQuestionIndex] = answers[currentQuestionIndex].filter(v => v !== value);
            }
            
            // Enable continue if at least one option is selected
            if (continueBtn) {
                continueBtn.disabled = answers[currentQuestionIndex].length === 0;
            }
        });
    });

    // Handle "None of the above"
    if (noneButton) {
        noneButton.addEventListener('click', () => {
            const previousLength = answers[currentQuestionIndex].length;
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            answers[currentQuestionIndex] = ['none'];
            
            if (continueBtn) {
                continueBtn.disabled = false;
            }
        });
    }
}

// Add function to handle multi-select with other option
function renderMultiSelectWithOther(question) {
    const container = document.createElement('div');
    container.className = 'question-container';

    // Initialize answer array if not exists
    if (!answers[currentQuestionIndex]) {
        answers[currentQuestionIndex] = [];
    }

    container.innerHTML = `
        <h1 class="question-title">${question.title}</h1>
        <p class="question-reminder">${question.reminder || ''}</p>
        <div class="options multi-select">
            ${question.options.map(option => `
                <label class="option checkbox-option">
                    <input type="checkbox" name="${question.id}" value="${option.value}"
                        ${(answers[currentQuestionIndex] || []).includes(option.value) ? 'checked' : ''}>
                    <span class="checkbox-custom"></span>
                    <span class="option-text">${option.text}</span>
                </label>
            `).join('')}
            <label class="option checkbox-option other-option">
                <input type="checkbox" name="${question.id}" value="other"
                    ${(answers[currentQuestionIndex] || []).includes('other') ? 'checked' : ''}>
                <span class="checkbox-custom"></span>
                <span class="option-text">Other</span>
                <input type="text" class="other-input" 
                    placeholder="${question.otherOption.placeholder}" 
                    disabled
                    value="${answers[currentQuestionIndex]?.otherValue || ''}">
            </label>
        </div>
    `;

    // Add event listeners for checkboxes
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const otherInput = container.querySelector('.other-input');

    const updateContinueButtonState = () => {
        if (!continueBtn) return;
        
        // Check if any checkbox is checked
        let isValid = false;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                if (checkbox.value === 'other') {
                    // For "Other" option, require text input
                    isValid = otherInput.value.trim().length > 0;
                } else {
                    isValid = true;
                }
            }
        });
        
        continueBtn.disabled = !isValid;
    };

    // Enable the "Other" input if it was previously selected
    if (answers[currentQuestionIndex]?.includes('other')) {
        otherInput.disabled = false;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.value === 'other') {
                otherInput.disabled = !e.target.checked;
                if (e.target.checked) {
                    otherInput.focus();
                } else {
                    otherInput.value = ''; // Clear the input when unchecked
                    delete answers[currentQuestionIndex].otherValue;
                }
            }
            
            // Update answers array
            if (e.target.checked) {
                if (!answers[currentQuestionIndex].includes(e.target.value)) {
                    answers[currentQuestionIndex].push(e.target.value);
                }
            } else {
                answers[currentQuestionIndex] = answers[currentQuestionIndex].filter(v => v !== e.target.value);
            }
            
            updateContinueButtonState();
        });
    });

    otherInput.addEventListener('input', (e) => {
        // Store the "other" text input value
        if (answers[currentQuestionIndex].includes('other')) {
            answers[currentQuestionIndex].otherValue = e.target.value.trim();
        }
        updateContinueButtonState();
    });

    // Initialize continue button state
    updateContinueButtonState();

    return container;
}

// Update the validation for multi-select with other
function isQuestionAnswered(index) {
    const question = surveyData.questions[index];
    if (question.type === 'multi_select_with_other') {
        const checkboxes = document.querySelectorAll(`input[name="${question.id}"]`);
        const otherCheckbox = document.querySelector(`input[name="${question.id}"][value="other"]`);
        const otherInput = document.querySelector('.other-input');
        
        let isAnyChecked = false;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                isAnyChecked = true;
                if (checkbox === otherCheckbox && !otherInput.value.trim()) {
                    isAnyChecked = false;
                }
            }
        });
        return isAnyChecked;
    }
    // ... existing validation code ...
}

// Update the getQuestionResponse function
function getQuestionResponse(index) {
    const question = surveyData.questions[index];
    if (question.type === 'multi_select_with_other') {
        const selectedOptions = [];
        const checkboxes = document.querySelectorAll(`input[name="${question.id}"]`);
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                if (checkbox.value === 'other') {
                    const otherInput = document.querySelector('.other-input');
                    selectedOptions.push({
                        id: question.otherOption.value,
                        text: otherInput.value.trim()
                    });
                } else {
                    const option = question.options.find(opt => opt.value === checkbox.value);
                    selectedOptions.push(option);
                }
            }
        });
        return selectedOptions;
    }
    // ... existing response code ...
}

// Function to show recommendation modal
function showRecommendationModal(settlementMethod) {
    console.log('Opening modal for settlement method:', settlementMethod);
    
    // Format settlement method for display
    const formattedMethod = settlementMethod
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
    // Get the recommendation data
    const recommendation = allRecommendations.settlement[settlementMethod];
    console.log('Found recommendation:', recommendation);
    
    // Check if we have a valid recommendation
    if (!recommendation) {
        console.error('No recommendation found for settlement method:', settlementMethod);
        // Fallback to continue without showing modal
        currentQuestionIndex++;
        updateProgressSteps();
        renderQuestion(currentQuestionIndex);
        return;
    }
    
    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'recommendation-modal-overlay';
    
    modal.innerHTML = `
        <div class="recommendation-modal">
            <button class="recommendation-modal-close" onclick="handleRecommendationDecline('${settlementMethod}'); this.closest('.recommendation-modal-overlay').remove();">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <h2>We found a recommendation for you!</h2>
            <p>Consider adding it to your plan.</p>
            <div class="recommendation-card">
                <div class="time-estimate">${recommendation.minutes_to_complete} MIN</div>
                <div class="plan-item-text">
                    <h3>${recommendation.title}</h3>
                    <p>${recommendation.description}</p>
                    <div class="recommendation-type">
                        <div class="recommendation-type-icon ${(recommendation.type || 'Article').toLowerCase()}"></div>
                        ${recommendation.type || 'Article'}
                    </div>
                </div>
            </div>
            <div class="recommendation-modal-buttons">
                <button class="secondary-button" onclick="handleRecommendationDecline('${settlementMethod}'); this.closest('.recommendation-modal-overlay').remove();">
                    Maybe later
                </button>
                <button class="primary-button" onclick="handleRecommendationAccept('${settlementMethod}'); this.closest('.recommendation-modal-overlay').remove();">
                    Add to my plan
                </button>
            </div>
        </div>
    `;
    
    // Add click handler to close modal when clicking overlay
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            handleRecommendationDecline(settlementMethod);
            modal.remove();
        }
    });
    
    // Prevent scrolling while modal is open
    document.body.classList.add('modal-open');
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Trigger animations
    requestAnimationFrame(() => {
        modal.classList.add('show');
        modal.querySelector('.recommendation-modal').classList.add('show');
    });
}

// Update the decline handler to remove modal-open class
function handleRecommendationDecline(settlementMethod) {
    // Store the recommendation preference
    recommendationPreferences[settlementMethod] = false;
    
    // Remove modal-open class
    document.body.classList.remove('modal-open');
    
    // Continue to next question
    currentQuestionIndex++;
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}

// Update the accept handler to remove modal-open class
function handleRecommendationAccept(settlementMethod) {
    // Store the recommendation preference
    recommendationPreferences[settlementMethod] = true;
    
    // Remove modal-open class
    document.body.classList.remove('modal-open');
    
    // Continue to next question
    currentQuestionIndex++;
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}

// Function to handle Get Started button click
function handleGetStarted() {
    const landingContainer = document.querySelector('.landing-container');
    const appContainer = document.querySelector('.app-container');
    const topNav = document.querySelector('.top-nav');
    const stickyFooter = document.querySelector('.sticky-footer');

    // Hide landing page and its footer
    landingContainer.style.display = 'none';
    if (stickyFooter) {
        stickyFooter.style.display = 'none';
    }

    // Show app container and navigation
    appContainer.style.display = 'block';
    topNav.style.display = 'flex';

    // Start with first question
    currentQuestionIndex = 0;
    renderQuestion(currentQuestionIndex);
    updateProgressSteps();
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize landing page state
    const landingContainer = document.querySelector('.landing-container');
    const appContainer = document.querySelector('.app-container');
    const topNav = document.querySelector('.top-nav');

    if (!landingContainer || !appContainer || !topNav) {
        console.error('Required elements not found');
        return;
    }

    // Create and append the landing page content
    landingContainer.innerHTML = `
        <div class="landing-content">
            <div class="landing-text">
                <h1 class="landing-title">Home equity coach</h1>
                <p class="landing-description">Get a personalized plan to tackle homeownership and your financial goals</p>
            </div>
            <div class="landing-illustration">
                <img src="assets/couch-dog.png" alt="Illustration of a dog on a couch">
            </div>
        </div>
    `;

    // Create and append the sticky footer for the landing page
    const stickyFooter = document.createElement('div');
    stickyFooter.className = 'sticky-footer landing-footer';
    stickyFooter.innerHTML = `
        <div class="footer-buttons">
            <button id="get-started-button" class="primary-button">Get started</button>
        </div>
    `;
    document.body.appendChild(stickyFooter);

    // Show landing, hide app content initially
    landingContainer.style.display = 'block';
    appContainer.style.display = 'none';
    topNav.style.display = 'none';

    // Add click handler for Get Started button
    const getStartedButton = document.querySelector('#get-started-button');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', handleGetStarted);
    }

    // Initialize other event listeners and setup
    initializeEventListeners();
    updateProgressSteps();
});

function updateProgress(currentStep) {
    const progressBar = document.querySelector('.progress-bar');
    const progressSegments = document.querySelectorAll('.progress-segment');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!progressBar || !progressSegments.length || !navLinks.length) return;

    const totalSteps = 3;
    const stepWidth = (currentStep / totalSteps) * 100;
    progressBar.style.width = `${stepWidth}%`;

    progressSegments.forEach((segment, index) => {
        if (index < currentStep) {
            segment.classList.add('completed');
        } else {
            segment.classList.remove('completed');
        }
    });

    navLinks.forEach((link, index) => {
        if (index < currentStep) {
            link.classList.add('completed');
        } else {
            link.classList.remove('completed');
        }
    });
}

// Add handler for save plan button
function handleSavePlan() {
    showNotification('Plan saved successfully');
}

// Add this function to show the persona screen
function showPersonaScreen() {
    // Update progress to show step 3
    currentQuestionIndex = surveyData.questions.length;
    updateProgressSteps();

    // Clear main content
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';

    // Format timeline and method from answers
    const timeline = answers[0];
    const method = answers[1];
    const timelineText = {
        'within_year': 'the next 12 months',
        'within_three_years': '1 to 3 years',
        'more_than_three_years': 'more than 3 years',
        'not_sure': 'a timeline to be determined'
    }[timeline] || timeline;
    
    const methodText = {
        'refinancing': 'refinancing',
        'cash-savings': 'savings',
        'loan-heloc': 'a home equity loan',
        'home-sale': 'home sale',
        'not-sure': 'a method to be determined'
    }[method] || method;

    // Create persona screen container
    const personaScreen = document.createElement('div');
    personaScreen.className = 'persona-screen';
    
    // Create persona header
    const personaHeader = document.createElement('div');
    personaHeader.className = 'persona-header';
    personaHeader.innerHTML = `
        <div class="persona-content">
            <div class="persona-text">
                <h1>You're a <span class="persona-type">Debt Crusher!</span></h1>
                <p>You've tackled your expenses head on, and you're ready to prepare for what's coming next</p>
            </div>
            <img src="assets/persona-icon.png" alt="Persona icon" class="persona-icon">
        </div>
    `;

    // Create focus areas section
    const focusAreas = document.createElement('div');
    focusAreas.className = 'persona-graph';
    focusAreas.innerHTML = `
        <h2>YOUR FOCUS AREAS</h2>
        <div class="graph-placeholder"></div>
    `;

    // Create goals section
    const goalsSection = document.createElement('div');
    goalsSection.className = 'persona-goals';
    
    // Build goals list
    let goalsList = `<h2>YOUR GOALS</h2><ul>`;
    
    // Add settlement goal first
    goalsList += `<li>Settling your investment in ${timelineText} via ${methodText}</li>`;
    
    // Create a Set to track unique events and their sources
    const uniqueEvents = new Map();

    // Add financial wellbeing goals from Q7 first
    const q7Goals = answers[6] || []; // Changed from [7] to [6]
    q7Goals.forEach(goal => {
        if (goal === 'other' && q7Goals.otherValue) {
            // Handle "other" option with free text
            uniqueEvents.set('other', `Focusing on: ${q7Goals.otherValue}`);
        } else if (goal !== 'other') {
            const goalText = surveyData.questions[6].options.find(opt => opt.value === goal)?.text;
            if (goalText) {
                uniqueEvents.set(goalText, `Focusing on: ${goalText}`);
            }
        }
    });

    // Add future events from Q6
    const futureEvents = answers[5] || [];
    futureEvents.forEach(event => {
        if (event !== 'none') {
            const eventText = surveyData.questions[5].options.find(opt => opt.value === event)?.text;
            if (eventText && !uniqueEvents.has(eventText)) {
                uniqueEvents.set(eventText, `Preparing for: ${eventText}`);
            }
        }
    });

    // Add past events from Q5
    const pastEvents = answers[4] || [];
    pastEvents.forEach(event => {
        if (event !== 'none') {
            const eventText = surveyData.questions[4].options.find(opt => opt.value === event)?.text;
            if (eventText && !uniqueEvents.has(eventText)) {
                uniqueEvents.set(eventText, `Reacting to: ${eventText}`);
            }
        }
    });

    // Add all unique events to the goals list
    uniqueEvents.forEach(formattedText => {
        goalsList += `<li>${formattedText}</li>`;
    });

    goalsList += '</ul>';
    goalsSection.innerHTML = goalsList;

    // Append all sections
    personaScreen.appendChild(personaHeader);
    personaScreen.appendChild(focusAreas);
    personaScreen.appendChild(goalsSection);
    mainContent.appendChild(personaScreen);

    // Update navigation buttons
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        const continueBtn = navigation.querySelector('.continue-btn');
        if (continueBtn) {
            continueBtn.textContent = 'Build plan';
            continueBtn.onclick = () => {
                showLoadingScreen();
            };
        }
        
        const backBtn = navigation.querySelector('.back-btn');
        if (backBtn) {
            backBtn.disabled = false;
            backBtn.onclick = () => {
                currentQuestionIndex = surveyData.questions.length - 1;
                renderQuestion(currentQuestionIndex);
            };
        }
    }
} 

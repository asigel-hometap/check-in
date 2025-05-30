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
            section: 'Settlement goals',
            type: 'radio',
            title: 'How ready are you to settle your investment?',
            reminder: `As a reminder, your settlement must be settled on or before <span style='font-weight: bold'>${formatDate(settlementDeadline)}</span> but you can settle before then if you're ready. Let us know your plans and we'll share tips to put you in the best position possible. Your answer will not effect your investment in any way.`,
            options: [
                {
                    value: 'within_year',
                    text: 'In the next 12 months',
                    insight: 'Okay, great! We will make sure to review all the steps for a smooth settlement process together.',
                    personaPoints: 5
                },
                {
                    value: 'within_three_years',
                    text: 'In 1 to 3 years',
                    insight: 'Planning ahead is smart. We can help you understand your options and prepare for settlement.',
                    checkDeadline: true,
                    personaPoints: 4
                },
                {
                    value: 'more_than_three_years',
                    text: 'In more than 3 years',
                    insight: "It's important to note that your settlement deadline may be approaching. Let's discuss your options to ensure a timely settlement.",
                    checkDeadline: true,
                    personaPoints: 2
                },
                {
                    value: 'not_sure',
                    text: "Not sure",
                    insight: "That's okay! We're here to help you understand your options and create a settlement plan that works for you.",
                    checkDeadline: true,
                    personaPoints: 1
                }
            ]
        },
        {
            id: 2,
            text: "How do you plan to fund your settlement?",
            reminder: "Let us know your plans and we'll help you be prepared. If you aren't sure yet, that's okay too. We'll help you explore your options. Your answer will not effect your investment in any way.",
            options: [
                {
                    text: "Refinancing mortgage and other debts",
                    value: "refinancing",
                    // helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Terrific. That's a popular option with our homeowners, and we have some excellent partners to help you through this process when you're ready.",
                    personaPoints: 3
                },
                {
                    text: "Savings",
                    value: "cash-savings",
                    // helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Okay! Whether you have the money on hand right now or plan to, we'll help you review the best ways to make the most of your savings.",
                    personaPoints: 3
                },
                {
                    text: "Home Equity Loan or Home Equity Line of Credit (HELOC)",
                    value: "loan-heloc",
                    // helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Is this a sign that your credit score is in good shape? Good for you!",
                    personaPoints: 3
                },
                {
                    text: "Proceeds from a home sale",
                    value: "home-sale",
                    // helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "I might have guessed! This is the most common option for homeowners, and we have some great resources to help you through the process.",
                    personaPoints: 3,
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
                    checkDeadline: true,
                    personaPoints: 1
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
                    insight: "Taking time to evaluate your options is an important part of the process. We're here to help you make an informed decision.",
                    personaPoints: 1
                },
                {
                    text: "I'm committed, but haven't started making progress",
                    value: "committed-not-started",
                    insight: "Having a clear direction is the first step. We can help you start taking action towards your goal.",
                    personaPoints: 3
                },
                {
                    text: "I've taken steps towards my settlement plan",
                    value: "committed-active",
                    insight: "You're making great progress! We'll provide resources to help you maintain momentum and achieve your goals.",
                    personaPoints: 5
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
                    value: "marriage"
                },
                {
                    text: "Growing family",
                    value: "birth"
                },
                {
                    text: "Employment change",
                    value: "job_change"
                },
                {
                    text: "Major bonus, inheritance, or other financial windfall",
                    value: "financial-windfall"
                },
                {
                    text: "Major medical expense",
                    value: "medical"
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
                    value: "disaster"
                },
                {
                    text: "Other significant expense",
                    value: "business"
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
                    value: "marriage"
                },
                {
                    text: "Growing family",
                    value: "birth"
                },
                {
                    text: "Employment change",
                    value: "job_change"
                },
                {
                    text: "Major bonus, inheritance, or other financial windfall",
                    value: "financial-windfall"
                },
                {
                    text: "Major medical expense",
                    value: "medical"
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
                    text: "Other significant expense",
                    value: "business"
                }
            ]
        },
        {
            id: 7,
            section: 'Financial picture',
            type: 'multi_select_with_other',
            title: 'What is most important to your financial wellbeing?',
            reminder: 'Select all that apply',
            options: [
                {
                    value: 'financial_education',
                    text: 'Building financial literacy and education',
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
            category: 'Learn the landscape',
            type: 'Article',
            minutes_to_complete: 3
        },
        'home-sale': {
            title: 'Settling Your Home Equity Investment with a Home Sale',
            description: 'A comprehensive guide to settling your investment through a home sale.',
            url: 'https://www.hometap.com/blog/settling-home-equity-investment-home-sale',
            category: 'Learn the landscape',
            type: 'Article',
            minutes_to_complete: 3
        },
        'cash-savings': {
            title: 'Using Cash Savings to Settle Your HEI',
            description: 'Learn how to settle your Investment with cash savings.',
            url: '#',
            category: 'Learn the landscape',
            type: 'Article',
            minutes_to_complete: 3
        },
        'loan-heloc': {
            title: 'Settling with a Home Equity Line of Credit',
            description: 'Learn how to settle your Investment with a Home Equity Line of Credit.',
            url: '#',
            category: 'Learn the landscape',
            type: 'Article',
            minutes_to_complete: 3
        }
    },
    timeline: {
        'within_year': {
            title: 'Contact Investment Support',
            description: 'Ready to start your settlement? Our Investment Support team is here to help',
            action: 'Email',
            actionUrl: 'mailto:homeowners@hometap.com',
            category: 'Next moves',
            type: 'Contact',
            minutes_to_complete: 15
        },
        'within_three_years': {
            title: 'Try the Settlement Calculator',
            description: 'Estimate your settlement amount at different home values and dates',
            url: '#',
            category: 'Next moves',
            type: 'Guides & More',
            minutes_to_complete: 5
        },
        'more_than_three_years': {
            title: 'Review Your Quarterly Account Statement',
            description: 'Stay informed about your home value, equity, and Investment details',
            url: '#',
            category: 'Stay on track',
            type: 'Guides & More',
            minutes_to_complete: 10
        },
        'not_sure': {
            title: 'Understanding Your Settlement Options',
            description: 'Explore different ways to settle your Home Equity Investment',
            url: '#',
            category: 'Learn the landscape',
            type: 'Video',
            minutes_to_complete: 2
        }
    },
    lifeEvents: {
        'job_change': {
            title: 'Career Transitions and Your HEI',
            description: 'Learn how to manage your Investment during major life events.',
            url: 'https://go.hometap.com/dashboard/resources/your-home-equity-investment-through-life-events',
            category: 'Chart your course',
            type: 'Article',
            minutes_to_complete: 3
        },
        'retirement': {
            title: 'Planning for Retirement',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Article',
            minutes_to_complete: 2
        },
        'marriage': {
            title: 'Marriage and Your Home Investment',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Article',
            minutes_to_complete: 7
        },
        'divorce': {
            title: 'Managing Your HEI During Divorce',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Article',
            minutes_to_complete: 15
        },
        'birth': {
            title: 'Growing Family Guide',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Video',
            minutes_to_complete: 7
        },
        'medical': {
            title: 'Health & Financial Wellness',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Guides & More',
            minutes_to_complete: 10
        },
        'education': {
            title: 'Education Funding Options',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Article',
            minutes_to_complete: 11
        },
        'business': {
            title: 'Business Owner Resources',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Video',
            minutes_to_complete: 12
        },
        'disaster': {
            title: 'Disaster Recovery',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Video',
            minutes_to_complete: 6
        },
        'relocation': {
            title: 'Relocation and Your HEI',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Next moves',
            type: 'Article',
            minutes_to_complete: 3
        },
        'home-repair': {
            title: 'Plan a Home Renovation',
            description: 'Try our Renovation Calculator to see how much equity you can add with an upgrade',
            url: '#',
            category: 'Next moves',
            type: 'Guides & More',
            minutes_to_complete: 5
        },
        'financial-windfall': {
            title: 'Making the Most of a Financial Windfall',
            description: 'Learn how to manage your Investment during major life events',
            url: '#',
            category: 'Chart your course',
            type: 'Article',
            minutes_to_complete: 3
        },
        'property-transaction': {
            title: 'Read Our Guide to Buying & Selling',
            description: 'Learn how your HEI factors into your property transaction',
            url: '#',
            category: 'Next moves',
            type: 'Article',
            minutes_to_complete: 10
        }
    },
    support: {
        'financial_education': {
            title: 'Financial Education Resources',
            description: 'Access our library of educational content to help you make informed financial decisions.',
            url: '#',
            category: 'Learn the landscape',
            type: 'Guides & More',
            minutes_to_complete: 20
        },
        'increasing_liquidity': {
            title: 'Home Equity Access Guide',
            description: 'Learn about different ways to tap into your home equity and which option might be right for you.',
            url: 'https://www.hometap.com/homeowner-resources/options-for-tapping-into-your-homes-equity',
            category: 'Learn the landscape',
            type: 'Guides & More',
            minutes_to_complete: 24
        },
        'hei_questions': {
            title: 'Schedule a HEI Review',
            description: 'Book a session with our team to review your Home Equity Investment and get answers to your questions.',
            url: 'mailto:homeowners@hometap.com',
            category: 'Next moves',
            type: 'Contact',
            minutes_to_complete: 30
        },
        'home_renovation': {
            title: 'Planning a Home Renovation',
            description: 'Get guidance on planning and financing your home renovation projects.',
            url: '#',
            category: 'Next moves',
            type: 'Article',
            minutes_to_complete: 10
        },
        'lower_payments': {
            title: 'Financial Obligation Management',
            description: 'Explore strategies and options for managing your monthly payments and financial commitments.',
            url: '#',
            category: 'Learn the landscape',
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

    // Add top recommendation if selected (not removable)
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

    // Add other selected recommendations (removable)
    Object.entries(categorizedRecommendations).forEach(([category, items]) => {
        items.forEach((rec, index) => {
            const recId = `${category}-${index}`;
            if (selectedRecommendations.has(recId)) {
                const planItem = document.createElement('div');
                planItem.className = 'plan-item';
                planItem.innerHTML = `
                    <button class="remove-plan-item" title="Remove from plan" data-rec-id="${recId}" style="position:absolute;top:12px;right:12px;background:none;border:none;cursor:pointer;padding:4px;">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#F0F4FF"/>
                            <path d="M13 7L7 13M7 7l6 6" stroke="#687183" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
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
                // Attach remove handler
                planItem.querySelector('.remove-plan-item').onclick = function() {
                    selectedRecommendations.delete(recId);
                    updatePlanSection();
                    updatePlanTotalMinutes();
                    // Also update the corresponding recommendation card icon
                    const recCards = document.querySelectorAll('.recommendation-card');
                    recCards.forEach(card => {
                        const addBtn = card.querySelector('.add-to-plan');
                        if (addBtn && addBtn.getAttribute('onclick') && addBtn.getAttribute('onclick').includes(`'${category}', ${index}`)) {
                            addBtn.classList.remove('added');
                            addBtn.querySelector('.plus-icon').style.display = 'block';
                            addBtn.querySelector('.check-icon').style.display = 'none';
                        }
                    });
                };
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

    // Use default persona type
    const personaType = 'explorer';
    const persona = PERSONAS[personaType];
    console.log('Using persona:', personaType);

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
            <button class="add-to-plan added" disabled style="pointer-events: none; opacity: 0.6;" onclick="toggleRecommendation('top', 0, this)">
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
        <div class="personality-type" style="background-color: ${persona.backgroundColor}">
            <div class="personality-type-content">
                <img src="assets/${persona.icon}" alt="Persona icon" class="persona-icon">
                <h1>${persona.header}</h1>
                <p>${persona.description}</p>
            </div>
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
                            <span class="time-text">EST.</span>&nbsp;<span class="time-number" id="planTotalMinutes">0</span>&nbsp;<span class="time-text">MIN</span>
                        </div>
                    </div>
                    <p class="plan-dates">${getTodayFormatted()} – ${formatDate(endDate)}</p>
                    <p class="plan-text">We'll review your progress and goals in another few weeks and keep you on the path to happy, healthy homeownership.</p>
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
    const questionContainer = document.querySelector('.question-container');
    console.log('renderQuestion called with index:', index);
    console.log('surveyData.questions:', surveyData.questions);
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

    // Re-select the navigation buttons after DOM update
    const continueBtn = document.querySelector('.continue-btn');
    const backBtn = document.querySelector('.back-btn');

    // Update continue button text for last question
    if (continueBtn && index === surveyData.questions.length - 1) {
        continueBtn.textContent = 'Build my plan';
    } else if (continueBtn) {
        continueBtn.textContent = 'Continue';
    }

    // Always enable the continue button
    if (continueBtn) {
        continueBtn.disabled = false;
        continueBtn.onclick = function() {
            handleContinue();
        };
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
        // Do NOT show insight for previously selected answers
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
    
    // Do NOT show insight for selected option
    // Just update answers and continue button
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
    console.log('Current question index:', currentQuestionIndex);
    console.log('Current question id:', currentQuestion.id);
    
    // Calculate and log persona score after each question
    const currentScore = calculatePersonaScore();
    console.log('Current persona score:', currentScore);
    
    // Check if we're on the last question
    if (currentQuestionIndex === surveyData.questions.length - 1) {
        showPersonaScreen();
        return;
    }
    
    // Check if this is the settlement method question (id: 'settlement_method')
    if (currentQuestion.id === 'settlement_method') {
        const selectedValue = answers[currentQuestionIndex];
        if (selectedValue && selectedValue !== 'not-sure') {
            showRecommendationModal(selectedValue);
            return;
        }
    }
    
    // Normal continue behavior
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
        'Learn the landscape': [],
        'Next moves': [],
        'Chart your course': []
    };

    // Set to track unique recommendation IDs
    const addedIds = new Set();

    // Helper to add a recommendation if not already present
    function addRec(category, rec, recId) {
        if (!addedIds.has(recId) && categorizedRecommendations[category]) {
            categorizedRecommendations[category].push({
                ...rec,
                recId // Attach recId for plan management
            });
            addedIds.add(recId);
        }
    }

    // Determine top recommendation based on user's responses
    let topRecommendation;
    let topRecId = null;

    if (timeline === 'within_year' || timeline === 'within_three_years') {
        // Priority 1: Settlement Method Guide for near-term settlers
        topRecommendation = settlementMethod && allRecommendations.settlement[settlementMethod];
        topRecId = settlementMethod ? `settlement-${settlementMethod}` : null;
    } else if (supportNeeds && supportNeeds.length === 1 && supportNeeds[0] !== 'other') {
        // Priority 2: Single Support Need recommendation
        topRecommendation = allRecommendations.support[supportNeeds[0]];
        topRecId = supportNeeds[0] ? `support-${supportNeeds[0]}` : null;
    } else if (lifeEvents && lifeEvents.length === 1 && lifeEvents[0] !== 'none') {
        // Priority 3: Single Life Event recommendation
        topRecommendation = allRecommendations.lifeEvents[lifeEvents[0]];
        topRecId = lifeEvents[0] ? `lifeEvents-${lifeEvents[0]}` : null;
    } else {
        // Priority 4 (fallback): Timeline-based recommendation
        topRecommendation = timeline && allRecommendations.timeline[timeline];
        topRecId = timeline ? `timeline-${timeline}` : null;
    }

    // If no specific top recommendation can be determined, use a default
    if (!topRecommendation) {
        topRecommendation = {
            title: 'Plan Your Settlement',
            description: 'Explore your options and create a settlement plan that works for you.',
            action: 'Try',
            actionUrl: '#',
            minutes_to_complete: 5,
            type: 'Article',
            category: 'Learn the landscape'
        };
    } else {
        // Ensure all properties are copied over
        topRecommendation = {
            ...topRecommendation,
            type: topRecommendation.type || 'Article',
            minutes_to_complete: topRecommendation.minutes_to_complete || 5
        };
    }

    // Add the top recommendation's recId to the set to prevent duplicates
    if (topRecId) {
        addedIds.add(topRecId);
    }

    // Add settlement method recommendation
    if (settlementMethod && allRecommendations.settlement[settlementMethod]) {
        const rec = allRecommendations.settlement[settlementMethod];
        const recId = `settlement-${settlementMethod}`;
        addRec(rec.category, {
            title: rec.title,
            description: rec.description,
            actionUrl: rec.url,
            minutes_to_complete: rec.minutes_to_complete,
            type: rec.type || 'Article'
        }, recId);
    }

    // Add timeline-based recommendation
    if (timeline && allRecommendations.timeline[timeline]) {
        const rec = allRecommendations.timeline[timeline];
        const recId = `timeline-${timeline}`;
        addRec(rec.category, {
            title: rec.title,
            description: rec.description,
            actionUrl: rec.actionUrl || rec.url,
            minutes_to_complete: rec.minutes_to_complete,
            type: rec.type || 'Article'
        }, recId);
    }

    // Add life event recommendations
    if (lifeEvents && lifeEvents.length > 0) {
        lifeEvents.forEach(event => {
            if (event !== 'none') {
                const rec = allRecommendations.lifeEvents[event];
                if (rec) {
                    const recId = `lifeEvents-${event}`;
                    addRec(rec.category, {
                        title: rec.title,
                        description: rec.description,
                        actionUrl: rec.url,
                        minutes_to_complete: rec.minutes_to_complete,
                        type: rec.type || 'Article'
                    }, recId);
                }
            }
        });
    }

    // Add support recommendations
    if (supportNeeds && supportNeeds.length > 0) {
        supportNeeds.forEach(need => {
            if (need !== 'other' && allRecommendations.support[need]) {
                const rec = allRecommendations.support[need];
                const recId = `support-${need}`;
                addRec(rec.category, {
                    title: rec.title,
                    description: rec.description,
                    actionUrl: rec.url,
                    minutes_to_complete: rec.minutes_to_complete,
                    type: rec.type || 'Article'
                }, recId);
            }
        });
    }

    console.log('Generated recommendations:', { topRecommendation, categorizedRecommendations });
    return { topRecommendation, categorizedRecommendations };
}

// Handle text input
function handleTextInput(event) {
    const input = event.target;
    const questionId = input.getAttribute('data-question-id');
    const value = input.value.trim();
    
    // Update answers array
    const existingAnswerIndex = Object.keys(answers).findIndex(key => key === questionId);
    if (existingAnswerIndex !== -1) {
        answers[questionId] = value;
    } else {
        answers[questionId] = value;
    }
    
    // Enable/disable continue button based on whether there's text
    const continueBtn = document.querySelector('#continue-button');
    if (continueBtn) {
        continueBtn.disabled = !value.trim();
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

    // Show goals intro screen
    showGoalsIntroScreen();
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

// Function to show success screen
function showSuccessScreen() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
    
    const successScreen = document.createElement('div');
    successScreen.className = 'success-screen';
    successScreen.innerHTML = `
        <div class="success-content">
            <h1>Thank you!</h1>
            <p>Your plan will be emailed to you and you can view it on your Overview page.</p>
        </div>
        <div class="success-illustration">
            <img src="assets/neighborhood.png" alt="Neighborhood illustration">
        </div>
    `;
    
    mainContent.appendChild(successScreen);
    
    // Remove any existing sticky footer
    const existingFooter = document.querySelector('.sticky-footer');
    if (existingFooter) {
        existingFooter.remove();
    }
}

// Update the save plan handler
function handleSavePlan() {
    showSuccessScreen();
}

// Define personas and their attributes
const PERSONAS = {
    surveyor: {
        icon: "persona-surveyor.png",
        header: "You're a Surveyor!",
        description: "You're gathering information and getting the lay of the land to plot your course."
    },
    explorer: {
        icon: "persona-explorer.png",
        header: "You're an Explorer!",
        description: "You've started mapping out your journey and are ready to explore your options."
    },
    settler: {
        icon: "persona-settler.png",
        header: "You're a Settler!",
        description: "You've found your path and are ready to take decisive action on your journey."
    }
};

function getGoalsList() {
    // Format timeline and method for the settlement goal
    const timelineAnswer = answers[0]; // Question 1 is settlement timeline
    const timeline = formatTimeline(timelineAnswer);
    const methodAnswer = answers[1]; // Question 2 is settlement method
    const method = formatMethod(methodAnswer);
    
    let goalsList = '';
    
    // Add settlement goal first
    if (timelineAnswer === 'not_sure' || methodAnswer === 'not-sure') {
        goalsList += '<li>Reviewing settlement options to help you make a plan that is right for you</li>';
    } else if (timeline && method) {
        goalsList += `<li>Settling your investment in ${timeline} via ${method}</li>`;
    }
    
    // Create a Set to track unique events and their sources
    const uniqueEvents = new Map();

    // Add financial wellbeing goals from Q7
    const q7Answer = answers[6]; // Question 7 is financial wellbeing
    if (q7Answer && Array.isArray(q7Answer)) {
        q7Answer.forEach(goal => {
            if (goal === 'other' && q7Answer.otherValue) {
                uniqueEvents.set('other', `Focusing on: ${q7Answer.otherValue}`);
            } else if (goal !== 'other') {
                const goalText = surveyData.questions[6].options.find(opt => opt.value === goal)?.text;
                if (goalText) {
                    // Special handling for HEI text
                    const formattedText = goalText.toLowerCase().replace('hei', 'HEI');
                    uniqueEvents.set(goal, `Focusing on: ${formattedText}`);
                }
            }
        });
    }

    // Add future events from Q6
    const q6Answer = answers[5]; // Question 6 is future events
    if (q6Answer && Array.isArray(q6Answer) && !q6Answer.includes('none')) {
        q6Answer.forEach(event => {
            const eventText = surveyData.questions[5].options.find(opt => opt.value === event)?.text;
            if (eventText && !uniqueEvents.has(event)) {
                uniqueEvents.set(event, `Preparing for: ${eventText.toLowerCase()}`);
            }
        });
    }

    // Add past events from Q5
    const q5Answer = answers[4]; // Question 5 is past events
    if (q5Answer && Array.isArray(q5Answer) && !q5Answer.includes('none')) {
        q5Answer.forEach(event => {
            const eventText = surveyData.questions[4].options.find(opt => opt.value === event)?.text;
            if (eventText && !uniqueEvents.has(event)) {
                uniqueEvents.set(event, `Managing: ${eventText.toLowerCase()}`);
            }
        });
    }

    // Add all unique events to the goals list
    uniqueEvents.forEach(formattedText => {
        goalsList += `<li>${formattedText}</li>`;
    });

    return goalsList;
}

// Helper functions for formatting timeline and method
function formatTimeline(timelineValue) {
    const timelineMap = {
        'within_year': 'the next 12 months',
        'within_three_years': '1 to 3 years',
        'more_than_three_years': 'more than 3 years',
        'not_sure': 'a timeline to be determined'
    };
    return timelineMap[timelineValue] || '';
}

function formatMethod(methodValue) {
    const methodMap = {
        'refinancing': 'refinancing',
        'cash-savings': 'cash savings',
        'loan-heloc': 'a home equity loan or line of credit',
        'home-sale': 'home sale proceeds',
        'not-sure': 'a method to be determined'
    };
    return methodMap[methodValue] || '';
}

function showPersonaScreen() {
    currentStep = 3;
    updateProgress();
    
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
    
    // --- SETTLEMENT TIMELINE ELEMENT ---
    // Hardcoded values
    const effectiveDate = new Date('2021-05-01');
    const deadlineDate = new Date('2031-05-01');
    const today = new Date();
    const address = '2 Second Rd., Cleveland, OH 44113';

    // Get user answers
    const timelineAnswer = answers[0]; // settlement_timeline
    const methodAnswer = answers[1]; // settlement method
    
    // Determine settlement window (in years from today)
    let windowStart, windowEnd, windowLabel;
    if (timelineAnswer === 'within_year') {
        windowStart = new Date(today);
        windowEnd = new Date(today);
        windowEnd.setFullYear(windowEnd.getFullYear() + 1);
        windowLabel = 'within the next year';
    } else if (timelineAnswer === 'within_three_years') {
        windowStart = new Date(today);
        windowEnd = new Date(today);
        windowEnd.setFullYear(windowEnd.getFullYear() + 3);
        windowLabel = 'within the next 1-3 years';
    } else if (timelineAnswer === 'more_than_three_years') {
        windowStart = new Date(today);
        windowStart.setFullYear(windowStart.getFullYear() + 3);
        windowEnd = new Date(today);
        windowEnd.setFullYear(windowEnd.getFullYear() + 5);
        windowLabel = 'within the next 3-5 years';
    } else {
        // not_sure or fallback
        windowStart = new Date(today);
        windowEnd = new Date(deadlineDate);
        windowLabel = 'at a future date to be determined';
    }
    // Truncate windowEnd if it exceeds deadline
    if (windowEnd > deadlineDate) windowEnd = new Date(deadlineDate);
    if (windowStart > deadlineDate) windowStart = new Date(deadlineDate);

    // Dynamic copy
    let methodText = '';
    if (methodAnswer && methodAnswer !== 'not-sure') {
        const methodMap = {
            'refinancing': 'a refinance',
            'cash-savings': 'cash savings',
            'loan-heloc': 'a home equity loan or line of credit',
            'home-sale': 'a home sale',
        };
        methodText = methodMap[methodAnswer] || 'your chosen method';
    } else {
        methodText = 'a method to be determined';
    }
    const timelineCopy = `You plan to settle your HEI through ${methodText} ${windowLabel}.`;

    // Timeline years and tickmarks
    const startYear = effectiveDate.getFullYear();
    const endYear = deadlineDate.getFullYear();
    const years = [];
    for (let y = startYear; y <= endYear; y++) years.push(y);
    // Calculate tick positions as %
    const tickPercents = years.map(y => ((new Date(y, 0, 1) - effectiveDate) / (deadlineDate - effectiveDate)) * 100);

    // Calculate bar segment widths (as % of total duration)
    const totalMs = deadlineDate - effectiveDate;
    const blueMs = today - effectiveDate;
    const purpleMs = Math.max(0, windowEnd - windowStart);
    const grayMs = Math.max(0, deadlineDate - Math.max(today, windowEnd));
    const bluePct = Math.max(0, Math.min(100, (blueMs / totalMs) * 100));
    const purplePct = Math.max(0, Math.min(100, (purpleMs / totalMs) * 100));
    const grayPct = Math.max(0, 100 - bluePct - purplePct);

    // Timeline HTML
    const settlementTimeline = document.createElement('div');
    settlementTimeline.className = 'settlement-timeline';
    settlementTimeline.innerHTML = `
        <div class="settlement-timeline-header">SETTLEMENT TIMELINE</div>
        <div class="settlement-timeline-desc">${timelineCopy} Norem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <hr class="settlement-timeline-divider" />
        <div class="settlement-timeline-bar-container">
            <div style="position: relative; height: 36px; margin-bottom: 0;">
                <div style="position: absolute; left: ${bluePct}%; transform: translateX(-50%); top: 0;">
                    <div class="settlement-timeline-callout">Today</div>
                </div>
                <div style="position: absolute; left: ${bluePct + (purplePct / 2)}%; transform: translateX(-50%); top: 0;">
                    <div class="settlement-timeline-callout settlement">Possible settlement</div>
                </div>
            </div>
            <div class="settlement-timeline-bar" style="position: relative; display: flex; height: 12px; border-radius: 6px; overflow: hidden; background: #e9ecf5;">
                <div style="background: #1a3365; width: ${bluePct}%;"></div>
                <div style="background: #b79cff; width: ${purplePct}%;"></div>
                <div style="background: #e9ecf5; width: ${grayPct}%;"></div>
                ${tickPercents.map((pct, i) => `
                    <div class=\"settlement-timeline-tick\" style=\"position: absolute; left: ${pct}%; top: 0; height: 20px; width: 0; border-left: 2px solid #d1d5db; z-index: 2;\"></div>
                `).join('')}
            </div>
            <div class="settlement-timeline-years" style="position: relative; display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                ${years.map((y, i) => `
                    <span class="settlement-timeline-year" style="position: absolute; left: ${tickPercents[i]}%; transform: translateX(-50%); font-size: 11px; color: #919aac; font-weight: 500; top: 0;">${y}</span>
                `).join('')}
            </div>
                </div>
        <div style="display: flex; align-items: center; gap: 8px; margin-top: 16px; color: #1a3365; font-size: 16px; font-weight: 500;">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.333 8.333V15a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.667V8.333" stroke="#1a3365" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 13.333a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="#1a3365" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.667 8.333 10 2.5l8.333 5.833" stroke="#1a3365" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>${address}</span>
        </div>
    `;
    mainContent.appendChild(settlementTimeline);
    // --- END SETTLEMENT TIMELINE ---

    // Use default persona type
    const personaType = 'explorer';
    console.log('Using persona type:', personaType);
    const persona = PERSONAS[personaType];
    
    const personaScreen = document.createElement('div');
    personaScreen.className = 'persona-screen';
    
    const personaGraph = document.createElement('div');
    personaGraph.className = 'persona-graph';
    
    // Generate recommendations to count categories
    const recommendations = generateRecommendations();
    const categoryColors = {
        'Learn the landscape': '#89D4B3',
        'Next moves': '#8CD5FF',
        'Chart your course': '#B79CFF'
    };
    
    // Count recommendations by category
    const categoryCounts = {
        'Learn the landscape': 0,
        'Next moves': 0,
        'Chart your course': 0
    };

    // Count recommendations directly from the categorizedRecommendations arrays
    Object.entries(recommendations.categorizedRecommendations).forEach(([category, recs]) => {
        if (categoryCounts.hasOwnProperty(category)) {
            categoryCounts[category] = recs.length;
        }
    });

    // Calculate total for percentages
    const totalRecs = Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);

    console.log('Generating focus areas bar with:', {
        categoryCounts,
        totalRecs,
        categoryColors,
        rawRecommendations: recommendations.categorizedRecommendations
    });

    // Log each category's data
    Object.entries(categoryCounts).forEach(([category, count]) => {
        console.log(`Category "${category}":`, {
            count,
            percentage: (count / totalRecs) * 100,
            color: categoryColors[category],
            hasRecs: count > 0,
            actualRecs: recommendations.categorizedRecommendations[category]?.length || 0
        });
    });

    // Create bar segments HTML only for categories with recommendations
    const barSegments = Object.entries(categoryCounts)
        .filter(([_, count]) => count > 0)
        .map(([category, count]) => {
            const percentage = (count / totalRecs) * 100;
            console.log(`Creating segment for ${category}:`, {
                count,
                percentage,
                color: categoryColors[category],
                flexValue: count
            });
            return `
                <div class="focus-area-segment" style="flex: ${count}; background-color: ${categoryColors[category]}">
                    <div class="focus-area-label">${category}</div>
                </div>
            `;
        })
        .join('');
    
    personaGraph.innerHTML = `
        <h2>Financial picture</h2>
        <div class="focus-areas-bar">
            ${barSegments}
        </div>
        <div class="focus-areas-legend">
            ${Object.entries(categoryCounts)
                .filter(([_, count]) => count > 0)
                .map(([category, _]) => `
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: ${categoryColors[category]}"></div>
                        <div class="legend-label">${category}</div>
                    </div>
                `).join('')}
        </div>
    `;
    
    // Log the final rendered structure
    console.log('Financial picture structure:', {
        graphElement: personaGraph,
        barElement: personaGraph.querySelector('.focus-areas-bar'),
        segments: personaGraph.querySelectorAll('.focus-area-segment')
    });
    
    personaScreen.appendChild(personaGraph);
    
    personaGoals = document.createElement('div');
    personaGoals.className = 'persona-goals';
    personaGoals.innerHTML = `
        <h2>Your Goals</h2>
        <ul>
            ${getGoalsList()}
        </ul>
        <p class="goals-support-message">Don't worry, we'll be there to help you with all of this, every step of the way.</p>
    `;
    
    personaScreen.appendChild(personaGoals);
    
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

// Add this function to calculate persona score
function calculatePersonaScore() {
    let totalScore = 0;
    
    // Questions 1-3: Get points from the selected options
    for (let i = 0; i <= 2; i++) {
        const question = surveyData.questions[i];
        const answer = answers[i];
        
        if (answer) {
            const selectedOption = question.options.find(opt => opt.value === answer);
            const points = selectedOption?.personaPoints || 0;
            console.log(`Q${i + 1} (${question.id}): Answer=${answer}, Points=${points}`);
            totalScore += points;
        } else {
            console.log(`Q${i + 1} (${question.id}): No answer yet`);
        }
    }
    
    // Question 4: Text input scoring
    const textAnswer = answers[3];
    const textPoints = textAnswer && textAnswer.trim().length > 0 ? 3 : 1;
    console.log(`Q4: Text="${textAnswer}", Points=${textPoints}`);
    totalScore += textPoints;
    
    console.log('Total persona score:', totalScore);
    return totalScore;
} 

function showGoalsIntroScreen() {
    currentStep = 1;
    updateProgress();
    
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
    
    // Calculate timeline percentages
    const effectiveDate = new Date('2021-05-01');
    const deadlineDate = new Date('2031-05-01');
    const today = new Date();
    const address = '2 Second Rd., Cleveland, OH 44113';

    // Calculate elapsed time percentage
    const totalMs = deadlineDate - effectiveDate;
    const elapsedMs = today - effectiveDate;
    const elapsedPct = Math.max(0, Math.min(100, (elapsedMs / totalMs) * 100));
    const remainingPct = Math.max(0, 100 - elapsedPct);

    // Get years for timeline
    const startYear = effectiveDate.getFullYear();
    const endYear = deadlineDate.getFullYear();
    const years = [];
    for (let y = startYear; y <= endYear; y++) years.push(y);
    
    // Calculate tick positions as percentages
    const tickPercents = years.map(y => ((new Date(y, 0, 1) - effectiveDate) / (deadlineDate - effectiveDate)) * 100);

    const goalsIntro = document.createElement('div');
    goalsIntro.className = 'question-container';
    goalsIntro.innerHTML = `
        <span class="question-label">GOALS</span>
        <h1 class="question-title">Jane, you've had your Home Equity Investment for over three years</h1>
        <p class="question-reminder">Thank you for being a valued Hometap Homeowner! Let's get caught up on how things have been going with your investment and where you're at with achieving your goals.</p>
        
        <div class="settlement-timeline">
            <div class="settlement-timeline-bar-container">
                <div style="position: relative; height: 36px; margin-bottom: 0;">
                    <div style="position: absolute; left: ${elapsedPct}%; transform: translateX(-50%); top: 0;">
                        <div class="settlement-timeline-callout">Today</div>
                    </div>
                </div>
                <div class="settlement-timeline-bar" style="position: relative; display: flex; height: 12px; border-radius: 6px; overflow: hidden; background: #e9ecf5;">
                    <div style="background: #1a3365; width: ${elapsedPct}%;"></div>
                    <div style="background: #e9ecf5; width: ${remainingPct}%;"></div>
                    ${tickPercents.map((pct, i) => `
                        <div class="settlement-timeline-tick" style="position: absolute; left: ${pct}%; top: 0; height: 20px; width: 0; border-left: 2px solid #d1d5db; z-index: 2;"></div>
                    `).join('')}
                </div>
                <div class="settlement-timeline-years" style="position: relative; display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                    ${years.map((y, i) => {
                        let align = 'center';
                        if (i === 0) align = 'left';
                        else if (i === years.length - 1) align = 'right';
                        return `<span class=\"settlement-timeline-year\" style=\"position: absolute; left: ${tickPercents[i]}%; transform: translateX(${align === 'center' ? '-50%' : align === 'left' ? '0' : '-100%'}); font-size: 11px; color: #919aac; font-weight: 500; top: 0; text-align: ${align};\">${y}</span>`;
                    }).join('')}
                </div>
                <div class="settlement-timeline-address">
                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.333 8.333V15a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.667V8.333" stroke="#1a3365" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 13.333a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="#1a3365" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.667 8.333 10 2.5l8.333 5.833" stroke="#1a3365" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>${address}</span>
                </div>
            </div>
        </div>
    `;

    mainContent.appendChild(goalsIntro);

    // Remove any existing navigation footer
    const existingNav = document.querySelector('.navigation');
    if (existingNav) {
        existingNav.remove();
    }

    // Add navigation footer
    const navigation = document.createElement('div');
    navigation.className = 'navigation';
    navigation.innerHTML = `
        <button class="continue-btn nav-btn" id="goals-intro-continue-btn">Continue</button>
    `;
    document.body.appendChild(navigation);

    // Place the button on the lower right
    navigation.style.justifyContent = 'flex-end';

    // Add event listener for continue
    document.getElementById('goals-intro-continue-btn').addEventListener('click', function() {
        console.log('Continue button clicked');
        currentQuestionIndex = 0;
        console.log('About to call renderQuestion(0)');
        renderQuestion(0);
        console.log('Called renderQuestion(0)');
    });

    // Add instruction box
    const instructionBox = document.createElement('div');
    instructionBox.className = 'instruction-box';
    instructionBox.innerHTML = `
        <h2 class="instruction-title">Welcome to Your Home Equity Playbook</h2>
    `;

    // Add instruction text
    const instructionText = document.createElement('p');
    instructionText.innerHTML = "We've prepared your first home equity playbook of personalized tools and resources to help you plan your finances with confidence and prepare for a successful settlement. We'll check in another 90 days from now on your goals and progress. Click the <b>Edit</b> button to customize the playbook to fit your needs and available time.";
    instructionBox.appendChild(instructionText);

    // Add new text element
    const subText = document.createElement('div');
    subText.innerHTML = "Get closer to your financial goals with a playbook personalized to your financial profile";
    subText.style.color = '#434C5E';
    subText.style.fontFamily = 'Mulish';
    subText.style.fontSize = '18px';
    subText.style.fontStyle = 'normal';
    subText.style.fontWeight = '400';
    subText.style.lineHeight = '30px';
    subText.style.marginTop = '16px';
    instructionBox.appendChild(subText);

    container.appendChild(instructionBox);
}

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

// Survey data
const surveyData = {
    questions: [
        {
            id: 'settlement_timeline',
            section: 'Settlement',
            type: 'radio',
            title: 'When do you plan to settle your Home Equity Investment?',
            label: 'YOUR SETTLEMENT PLAN',
            reminder: `As a reminder, your settlement must be settled on or before <span style='font-weight: bold'>${formatDate(settlementDeadline)}</span>.`,
            options: [
                {
                    value: 'within_year',
                    text: 'Within the next year',
                    insight: 'Okay, great! We will make sure to review all the steps for a smooth settlement process together.'
                },
                {
                    value: 'within_three_years',
                    text: 'Within the next 3 years',
                    insight: 'Planning ahead is smart. We can help you understand your options and prepare for settlement.',
                    checkDeadline: true
                },
                {
                    value: 'more_than_three_years',
                    text: 'More than 3 years from now',
                    insight: "It's important to note that your settlement deadline may be approaching. Let's discuss your options to ensure a timely settlement.",
                    checkDeadline: true
                },
                {
                    value: 'not_sure',
                    text: "I'm not sure",
                    insight: "That's okay! We're here to help you understand your options and create a settlement plan that works for you.",
                    checkDeadline: true
                }
            ]
        },
        {
            id: 2,
            label: "YOUR SETTLEMENT PLAN",
            text: "How do you plan to settle?",
            reminder: "You have several options, and we'll help you explore them all.",
            options: [
                {
                    text: "By refinancing",
                    value: "refinancing",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Terrific. That's a popular option with our homeowners, and we have some excellent partners to help you through this process when you're ready."
                },
                {
                    text: "With cash savings",
                    value: "cash-savings",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Okay! Whether you have the money on hand right now or plan to, we'll help you review the best ways to make the most of your savings.",
                },
                {
                    text: "With a loan or HELOC",
                    value: "loan-heloc",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Is this a sign that your credit score is in good shape? Good for you!",
                },
                {
                    text: "With a home sale",
                    value: "home-sale",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            label: "YOUR SETTLEMENT PLAN",
            text: "How committed are you to selling your home?",
            reminder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
            options: [
                {
                    text: "I'm still deciding if selling my home is the right plan for me",
                    value: "still-deciding",
                    insight: "Taking time to evaluate your options is an important part of the process. We're here to help you make an informed decision."
                },
                {
                    text: "I'm committed but haven't started making progress",
                    value: "committed-not-started",
                    insight: "Having a clear direction is the first step. We can help you start taking action towards your goal."
                },
                {
                    text: "I'm committed and actively progressing towards my plan",
                    value: "committed-active",
                    insight: "You're making great progress! We'll provide resources to help you maintain momentum and achieve your goals."
                }
            ]
        },
        {
            id: 4,
            label: "YOUR SETTLEMENT PLAN",
            text: "What steps have you taken so far?",
            reminder: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
            type: "text",
            placeholder: "Tell us what you've been up to",
            helper: "Ex: I've started talking to a Realtor."
        },
        {
            id: 5,
            label: "YOUR FINANCIAL WELLBEING",
            text: "In the <span style='color: #366CED'>past six months</span>, have you experienced any of the following life events?",
            reminder: "Select all that apply",
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
            label: "YOUR FINANCIAL WELLBEING",
            text: "In <span style='color: #366CED'>the next six months</span> do you expect to experience any of the following life events?",
            reminder: "Select all that apply",
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
            id: 7,
            section: 'Financial wellbeing',
            type: 'multi_select_with_other',
            title: 'How could we better support your financial wellbeing or home equity needs?',
            label: 'YOUR FINANCIAL WELLBEING',
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
            category: 'Read',
            minutes_to_complete: 3
        },
        'home-sale': {
            title: 'Settling Your Home Equity Investment with a Home Sale',
            description: 'A comprehensive guide to settling your investment through a home sale.',
            url: 'https://www.hometap.com/blog/settling-home-equity-investment-home-sale',
            category: 'Read',
            minutes_to_complete: 3
        },
        'cash-savings': {
            title: 'Using Cash Savings to Settle Your HEI',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            url: '#',
            category: 'Read',
            minutes_to_complete: 3
        },
        'heloc': {
            title: 'Settling with a Home Equity Line of Credit',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            url: '#',
            category: 'Read',
            minutes_to_complete: 3
        }
    },
    timeline: {
        'within_year': {
            title: 'Contact Investment Support',
            description: 'Ready to start your settlement? Our Investment Support team is here to help.',
            action: 'Contact',
            actionUrl: 'mailto:homeowners@hometap.com',
            category: 'Contact',
            minutes_to_complete: 15
        },
        'within_three_years': {
            title: 'Settlement Calculator',
            description: 'Use our calculator to estimate your settlement amount and explore your options.',
            url: '#',
            category: 'Try',
            minutes_to_complete: 5
        },
        'more_than_three_years': {
            title: 'Quarterly Account Statement',
            description: 'Review your latest statement to stay informed about your investment.',
            url: '#',
            category: 'Read',
            minutes_to_complete: 10
        },
        'not_sure': {
            title: 'Understanding Your Settlement Options',
            description: 'Explore different ways to settle your Home Equity Investment.',
            url: '#',
            category: 'Watch',
            minutes_to_complete: 2
        }
    },
    lifeEvents: {
        'job_change': {
            title: 'Career Transitions and Your HEI',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Understanding how job changes affect your investment.',
            url: '#',
            category: 'Read',
            minutes_to_complete: 3
        },
        'retirement': {
            title: 'Planning for Retirement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Strategies for managing your HEI during retirement.',
            url: '#',
            category: 'Try',
            minutes_to_complete: 2
        },
        'marriage': {
            title: 'Marriage and Your Home Investment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. What newlyweds should know about HEIs.',
            url: '#',
            category: 'Read',
            minutes_to_complete: 7
        },
        'divorce': {
            title: 'Managing Your HEI During Divorce',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Important considerations for your investment.',
            url: '#',
            category: 'Contact',
            minutes_to_complete: 15
        },
        'birth': {
            title: 'Growing Family Guide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Financial planning for new parents.',
            url: '#',
            category: 'Read',
            minutes_to_complete: 7
        },
        'medical': {
            title: 'Health & Financial Wellness',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Resources for managing medical expenses.',
            url: '#',
            category: 'Contact',
            minutes_to_complete: 10
        },
        'education': {
            title: 'Education Funding Options',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exploring ways to finance education.',
            url: '#',
            category: 'Try',
            minutes_to_complete: 11
        },
        'business': {
            title: 'Business Owner Resources',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Managing your HEI while running a business.',
            url: '#',
            category: 'Watch',
            minutes_to_complete: 12
        },
        'relocation': {
            title: 'Relocation and Your HEI',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. What to know about moving with an HEI.',
            url: '#',
            category: 'Read',
            minutes_to_complete: 3
        }
    },
    support: {
        'financial_education': {
            title: 'Financial Education Resources',
            description: 'Access our library of educational content to help you make informed financial decisions.',
            url: '#',
            category: 'Read',
            minutes_to_complete: 20
        },
        'increasing_liquidity': {
            title: 'Home Equity Access Guide',
            description: 'Learn about different ways to tap into your home equity and which option might be right for you.',
            url: 'https://www.hometap.com/homeowner-resources/options-for-tapping-into-your-homes-equity',
            category: 'Read',
            minutes_to_complete: 24
        },
        'hei_questions': {
            title: 'Schedule a HEI Review',
            description: 'Book a session with our team to review your Home Equity Investment and get answers to your questions.',
            url: 'mailto:homeowners@hometap.com',
            category: 'Contact',
            minutes_to_complete: 30
        },
        'home_renovation': {
            title: 'Renovation Calculator',
            description: 'Get guidance on planning and financing your home renovation projects.',
            url: 'https://www.hometap.com/blog/how-to-evaluate-your-home-renovation-estimate',
            category: 'Try',
            minutes_to_complete: 10
        },
        'lower_payments': {
            title: 'Financial Obligation Management',
            description: 'Explore strategies and options for managing your monthly payments and financial commitments.',
            url: '#',
            category: 'Try',
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
    const planTotalElement = document.getElementById('planTotalMinutes');
    if (!planTotalElement || !topRecommendation) return;
    
    const currentTotal = parseInt(planTotalElement.textContent, 10);
    
    // Calculate new total (including top recommendation)
    let newTotal = topRecommendation.minutes_to_complete;
    selectedRecommendations.forEach(recId => {
        const [category, index] = recId.split('-');
        const rec = categorizedRecommendations[category][parseInt(index)];
        if (rec) {
            newTotal += rec.minutes_to_complete;
        }
    });
    
    // Animate the number change
    animateNumber(currentTotal, newTotal, planTotalElement);
}

function toggleRecommendation(category, index, checkbox) {
    if (!categorizedRecommendations[category] || !categorizedRecommendations[category][index]) return;
    
    const recId = `${category}-${index}`;
    
    if (checkbox.checked) {
        selectedRecommendations.add(recId);
    } else {
        selectedRecommendations.delete(recId);
    }
    
    // Update the plan section
    updatePlanSection();
    updatePlanTotalMinutes();
}

function updatePlanSection() {
    const planList = document.getElementById('planList');
    const planTotalMinutes = document.getElementById('planTotalMinutes');
    planList.innerHTML = '';
    let totalMinutes = 0;

    // Map categories to action verbs
    const categoryToVerb = {
        'Read': 'Read',
        'Try': 'Try',
        'Watch': 'Watch',
        'Contact': 'Contact'
    };

    // Add top recommendation first
    if (topRecommendation) {
        const listItem = document.createElement('div');
        listItem.className = 'plan-item';
        
        // Get the action verb from the category
        const actionVerb = categoryToVerb[topRecommendation.category] || 'Read';
        
        listItem.innerHTML = `
            <div>
                <span class="action-verb">${actionVerb}</span>
                ${topRecommendation.title}
            </div>
            <div class="time-estimate">${topRecommendation.minutes_to_complete} min</div>
        `;
        
        planList.appendChild(listItem);
        totalMinutes += topRecommendation.minutes_to_complete;
    }

    // Add selected recommendations
    selectedRecommendations.forEach(recId => {
        const [category, index] = recId.split('-');
        const rec = categorizedRecommendations[category][parseInt(index)];
        if (rec) {
            const listItem = document.createElement('div');
            listItem.className = 'plan-item';
            
            // Get the action verb from the category
            const actionVerb = categoryToVerb[rec.category] || 'Read';
            
            listItem.innerHTML = `
                <div>
                    <span class="action-verb">${actionVerb}</span>
                    ${rec.title}
                </div>
                <div class="time-estimate">${rec.minutes_to_complete} min</div>
            `;
            
            planList.appendChild(listItem);
            totalMinutes += rec.minutes_to_complete;
        }
    });

    // Animate the total minutes change
    const currentTotal = parseInt(planTotalMinutes.textContent, 10) || 0;
    animateNumber(currentTotal, totalMinutes, planTotalMinutes);
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
    const recommendations = generateRecommendations();
    topRecommendation = recommendations.topRecommendation;
    categorizedRecommendations = recommendations.categorizedRecommendations;
    const settlementMethod = answers[1];
    const timeline = answers[0];
    const supportNeeds = answers[7] || [];
    
    // Reset selected recommendations
    selectedRecommendations.clear();
    
    // Calculate initial total minutes (just top recommendation)
    let totalMinutes = topRecommendation.minutes_to_complete;

    // Format the context message based on user's answers
    let contextMessage = '';
    if (settlementMethod && timeline) {
        const methodText = {
            'refinancing': 'through refinancing',
            'cash-savings': 'using cash savings',
            'loan-heloc': 'with a loan or HELOC',
            'home-sale': 'through a home sale',
            'not-sure': ''
        }[settlementMethod];

        const timelineText = {
            'within_year': 'within the next year',
            'within_three_years': 'within the next three years',
            'more_than_three_years': 'in more than three years',
            'not_sure': ''
        }[timeline];

        // Format support needs text
        let supportText = '';
        if (supportNeeds.length > 0) {
            const supportLabels = supportNeeds
                .filter(need => need !== 'other')
                .map(need => {
                    const option = surveyData.questions[7].options.find(opt => opt.value === need);
                    return option ? option.text.toLowerCase() : '';
                })
                .filter(text => text);

            if (supportLabels.length > 0) {
                if (supportLabels.length === 1) {
                    supportText = ` and are looking for help with ${supportLabels[0]}`;
                } else if (supportLabels.length === 2) {
                    supportText = ` and are looking for help with ${supportLabels[0]} and ${supportLabels[1]}`;
                } else {
                    const lastLabel = supportLabels.pop();
                    supportText = ` and are looking for help with ${supportLabels.join(', ')}, and ${lastLabel}`;
                }
            }
        }

        if (settlementMethod === 'not-sure') {
            contextMessage = "Because you're still exploring your settlement options" + supportText + ", we've prepared some resources to help you make an informed decision.";
        } else if (timeline === 'not_sure') {
            contextMessage = `Because you're planning to settle your HEI ${methodText}${supportText}, we've prepared some resources to help you create a timeline that works for you.`;
        } else {
            contextMessage = `Because you plan to settle your HEI ${methodText} ${timelineText}${supportText}, we've prepared some resources to help you make progress. Click the checkbox to add items to your personal homeownership plan and we'll email this to you when you're done. We can check back in another 3 months to see what progress you've made and what else we can help you with.`;
        }
    } else {
        contextMessage = "We've prepared some resources to help you explore your settlement options.";
    }
    
    mainContent.innerHTML = `
        <div class="outcome-screen">
            <h1 class="outcome-title">Recommendations based on your answers</h1>
            
            <div class="outcome-section">
                <p class="outcome-context">${contextMessage}</p>
                
                <!-- Top Recommendation -->
                <div class="top-recommendation">
                    <span class="section-label">TOP RECOMMENDATION</span>
                    <div class="recommendation-card featured">
                        <div class="card-content">
                            <h3>${topRecommendation.title}</h3>
                            <p>${topRecommendation.description}</p>
                            <span class="time-to-complete">${topRecommendation.minutes_to_complete} min</span>
                        </div>
                        <a href="${topRecommendation.actionUrl || topRecommendation.url}" class="recommendation-link">
                            <span>${topRecommendation.action || 'Read'}</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16666 10H15.8333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Categorized Recommendations -->
                <div class="recommendations-grid">
                    ${Object.entries(categorizedRecommendations)
                        .filter(([category, items]) => items.length > 0)
                        .map(([category, items]) => `
                            <div class="recommendation-category">
                                <span class="section-label">${category.toUpperCase()}</span>
                                <div class="recommendation-list">
                                    ${items.map((rec, index) => `
                                        <div class="recommendation-card">
                                            <div class="card-content">
                                                <h3>${rec.title}</h3>
                                                <p>${rec.description}</p>
                                                <a href="${rec.url}" class="recommendation-link" target="_blank">
                                                    ${rec.category === 'Contact' ? 'Schedule a call' : 'Learn more'}
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </a>
                                            </div>
                                            <label class="recommendation-checkbox">
                                                <input type="checkbox" onchange="toggleRecommendation('${category}', ${index}, this)">
                                                <span class="recommendation-checkmark"></span>
                                            </label>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                </div>
            </div>
        </div>
        
        <div class="sticky-footer">
            <div class="plan-section">
                <div class="plan-header">
                    <h2>Your Plan</h2>
                    <div class="time-estimate">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6V10L13 13M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Estimated time to complete: <span id="planTotalMinutes">${totalMinutes}</span> minutes</span>
                    </div>
                    <button class="collapse-button" onclick="this.closest('.plan-section').classList.toggle('collapsed')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 13L10 8L5 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div id="planList" class="plan-list">
                    <!-- Plan items will be inserted here -->
                </div>
            </div>
            <div class="footer-buttons">
                <button class="secondary-button" onclick="showNotification('Progress saved for later')">Save for later</button>
                <button class="primary-button" onclick="showModal('⭐ All done ⭐')">Email me my plan</button>
            </div>
        </div>
    `;

    // Initialize the plan section with the top recommendation
    updatePlanSection();
    
    document.querySelector('.navigation').style.display = 'none';
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

    // Reset continue button state
    if (continueBtn) {
        continueBtn.disabled = !answers[index];
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
        <span class="question-label">${question.label}</span>
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
        <span class="question-label">${question.label}</span>
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
            
            // Update total answers count
            if (previousLength === 0 && answers[currentQuestionIndex].length > 0) {
                totalAnswers++;
                updateBadgeCount();
            } else if (answers[currentQuestionIndex].length === 0 && previousLength > 0) {
                totalAnswers--;
                updateBadgeCount();
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
        <span class="question-label">${question.label}</span>
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
                    <span>Lorem ipsum</span>
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
                    <span>Exploring opportunities</span>
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
                    <span>Crunching the numbers</span>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(loadingScreen);

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
    const currentSection = currentQuestionIndex < 4 ? 0 : 1; // 0 = Settlement, 1 = Financial wellbeing
    const completedSection = currentQuestionIndex >= 4 ? 0 : -1; // Mark Settlement as completed when in Financial wellbeing

    progressSteps.forEach((step, index) => {
        // Clear existing classes
        step.classList.remove('active', 'completed');
        
        if (index === currentSection) {
            // Current section
            step.classList.add('active');
        } else if (index === completedSection) {
            // Completed section
            step.classList.add('completed');
        }
    });

    // Update recommendation badge
    updateBadgeCount();
}

// Update badge count
function updateBadgeCount() {
    const recommendationsBadge = document.querySelector('.step:last-child .badge');
    if (recommendationsBadge) {
        recommendationsBadge.textContent = totalAnswers;
        if (totalAnswers > 0) {
            recommendationsBadge.classList.add('visible');
            recommendationsBadge.classList.add('animate');
            setTimeout(() => {
                recommendationsBadge.classList.remove('animate');
            }, 300);
        }
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
    const supportNeeds = answers[7] || []; // Question 7 is financial wellbeing support
    
    console.log('Life events:', lifeEvents);
    console.log('Support needs:', supportNeeds);
    
    // Start with an empty set of categorized recommendations
    const categorizedRecommendations = {
        Read: [],
        Try: [],
        Watch: [],
        Contact: []
    };

    // Add settlement method recommendation
    if (settlementMethod && allRecommendations.settlement[settlementMethod]) {
        const rec = allRecommendations.settlement[settlementMethod];
        categorizedRecommendations[rec.category].push({
            title: rec.title,
            description: rec.description,
            actionUrl: rec.url,
            minutes_to_complete: rec.minutes_to_complete
        });
    }

    // Add timeline-based recommendation
    if (timeline && allRecommendations.timeline[timeline]) {
        const rec = allRecommendations.timeline[timeline];
        categorizedRecommendations[rec.category].push({
            title: rec.title,
            description: rec.description,
            actionUrl: rec.actionUrl || rec.url,
            minutes_to_complete: rec.minutes_to_complete
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
                        minutes_to_complete: rec.minutes_to_complete
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
                    minutes_to_complete: rec.minutes_to_complete
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
            minutes_to_complete: 5
        };
    }

    return { 
        topRecommendation, 
        categorizedRecommendations 
    };
}

// Handle text input
function handleTextInput(event) {
    const value = event.target.value.trim();
    const previousAnswer = answers[currentQuestionIndex];
    answers[currentQuestionIndex] = value;
    
    // Update total answers count if this is a new answer
    if (!previousAnswer && value) {
        totalAnswers++;
        updateBadgeCount();
    } else if (previousAnswer && !value) {
        totalAnswers--;
        updateBadgeCount();
    }
    
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
            
            // Update total answers count if this is the first selection
            if (previousLength === 0 && answers[currentQuestionIndex].length > 0) {
                totalAnswers++;
                updateBadgeCount();
            } else if (answers[currentQuestionIndex].length === 0 && previousLength > 0) {
                totalAnswers--;
                updateBadgeCount();
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
            
            // Update total answers count if this is the first selection
            if (previousLength === 0) {
                totalAnswers++;
                updateBadgeCount();
            }
            
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
        <span class="question-label">${question.label}</span>
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
    // Format settlement method for display
    const formattedMethod = settlementMethod
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
    const modal = document.createElement('div');
    modal.className = 'recommendation-modal';
    
    modal.innerHTML = `
        <div class="recommendation-modal-content">
            <h2>Recommendation Found!</h2>
            <p>Settling your HEI with ${formattedMethod}</p>
            <p>It starts with having a plan. We can review the settlement requirements as well as some specialized partnerships that can make this process as easy as possible for you.</p>
            <div class="recommendation-modal-buttons">
                <button class="primary-button" onclick="handleRecommendationAccept('${settlementMethod}'); this.closest('.recommendation-modal').remove();">
                    Yes, add this to my plan
                </button>
                <button class="secondary-button" onclick="handleRecommendationDecline('${settlementMethod}'); this.closest('.recommendation-modal').remove();">
                    No thanks, maybe later
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    // Trigger reflow before adding show class
    modal.offsetHeight;
    modal.classList.add('show');
}

// Function to handle accepting a recommendation
function handleRecommendationAccept(settlementMethod) {
    // Store the recommendation preference
    recommendationPreferences[settlementMethod] = true;
    
    // Continue to next question
    currentQuestionIndex++;
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}

// Function to handle declining a recommendation
function handleRecommendationDecline(settlementMethod) {
    // Store the recommendation preference
    recommendationPreferences[settlementMethod] = false;
    
    // Continue to next question
    currentQuestionIndex++;
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}

// Initialize the survey
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}); 

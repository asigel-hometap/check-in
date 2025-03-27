// Survey data
const surveyData = {
    questions: [
        {
            id: 1,
            label: "YOUR SETTLEMENT PLAN",
            text: "When do you plan to settle your Home Equity Investment?",
            reminder: "As a reminder, your settlement must be settled on or before January 01, 2032",
            options: [
                { 
                    text: "Within the next year",
                    value: "within-year",
                    insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                { 
                    text: "Within the next 3 years",
                    value: "within-three-years",
                    insight: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                { 
                    text: "More than 3 years from now",
                    value: "more-than-three",
                    insight: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                { 
                    text: "I'm not sure",
                    value: "not-sure",
                    insight: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
        },
        {
            id: 2,
            label: "YOUR SETTLEMENT PLAN",
            text: "How do you plan to settle?",
            reminder: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
            options: [
                {
                    text: "By refinancing",
                    value: "refinancing",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    text: "With cash savings",
                    value: "cash-savings",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    text: "With a loan or HELOC",
                    value: "loan-heloc",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    text: "With a home sale",
                    value: "home-sale",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    insight: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                    value: "not-sure"
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
    const radioInputs = document.querySelectorAll('input[type="radio"][name="settlement"]');
    radioInputs.forEach(radio => {
        radio.addEventListener('change', handleOptionSelect);
    });
}

// Render current question
function renderQuestion(questionIndex) {
    const question = surveyData.questions[questionIndex];
    
    // Update question content
    questionContainer.innerHTML = `
        <span class="question-label">${question.label}</span>
        <h1 class="question-title">${question.text}</h1>
        <p class="question-reminder">${question.reminder}</p>
        
        ${question.type === 'text' ? `
            <div class="text-input-container">
                <input type="text" 
                    class="text-input" 
                    placeholder="${question.placeholder}"
                    value="${answers[currentQuestionIndex] || ''}"
                >
                <p class="input-helper">${question.helper}</p>
            </div>
        ` : question.type === 'checkbox' ? `
            <div class="checkbox-options">
                ${question.options.map(option => `
                    <label class="checkbox-wrapper">
                        <div class="checkbox-option">
                            <input type="checkbox" 
                                value="${option.value}"
                                ${(answers[currentQuestionIndex] || []).includes(option.value) ? 'checked' : ''}
                            >
                            <span class="checkbox-text">${option.text}</span>
                        </div>
                    </label>
                `).join('')}
            </div>
            <div class="checkbox-actions">
                <button class="none-btn">None of the above</button>
            </div>
        ` : `
            <div class="options">
                ${question.options.map(option => `
                    <label class="option-wrapper">
                        <input type="radio" name="settlement" value="${option.value}">
                        <div class="option">
                            <div class="option-text">
                                <span class="option-title">${option.text}</span>
                            </div>
                        </div>
                    </label>
                `).join('')}
            </div>
        `}
    `;

    // Reset continue button state
    if (continueBtn) {
        continueBtn.disabled = !answers[currentQuestionIndex];
    }

    // Remove any existing insight
    const existingInsight = document.querySelector('.insight-container');
    if (existingInsight) {
        existingInsight.remove();
    }

    if (question.type === 'text') {
        // Initialize text input listener
        const textInput = document.querySelector('.text-input');
        textInput.addEventListener('input', handleTextInput);
    } else if (question.type === 'checkbox') {
        // Initialize checkbox listeners
        initializeCheckboxListeners();
    } else {
        // Reinitialize radio listeners
        initializeRadioListeners();

        // If there's a previously selected answer for this question, select it and show insight
        if (answers[currentQuestionIndex]) {
            const radioToCheck = document.querySelector(`input[type="radio"][value="${answers[currentQuestionIndex]}"]`);
            if (radioToCheck) {
                radioToCheck.checked = true;
                const selectedOption = question.options.find(opt => opt.value === answers[currentQuestionIndex]);
                if (selectedOption && selectedOption.insight) {
                    showInsight(selectedOption.insight);
                }
            }
        }
    }
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
function handleOptionSelect(event) {
    const selectedValue = event.target.value;
    answers[currentQuestionIndex] = selectedValue;
    
    // Enable continue button
    if (continueBtn) {
        continueBtn.disabled = false;
    }

    // Show insight for the selected option for both questions
    const selectedOption = surveyData.questions[currentQuestionIndex].options.find(opt => opt.value === selectedValue);
    if (selectedOption && selectedOption.insight) {
        showInsight(selectedOption.insight);
    }
}

// Show insight message
function showInsight(insightText) {
    let insightContainer = document.querySelector('.insight-container');
    if (!insightContainer) {
        insightContainer = document.createElement('div');
        insightContainer.className = 'insight-container';
        document.querySelector('.navigation').insertAdjacentElement('beforebegin', insightContainer);
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

// Handle continue button click
function handleContinue() {
    if (currentQuestionIndex < surveyData.questions.length - 1) {
        currentQuestionIndex++;
        updateProgressSteps();
        renderQuestion(currentQuestionIndex);
    } else {
        showLoadingScreen();
    }
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
        // Future sections remain default (gray)
    });
}

// Handle save and exit
function handleSaveAndExit() {
    console.log('Saving progress...');
    console.log('Current answers:', answers);
    // Here you would implement save functionality
}

// Generate recommendations based on answers
function generateRecommendations() {
    // Top recommendation
    const topRecommendation = {
        title: 'Simplist',
        description: 'Next-generation mortgage marketplace using technology to find a range of home-buying options.',
        action: 'Try',
        actionUrl: '#'
    };

    // Categorized recommendations
    const categorizedRecommendations = {
        Read: [
            {
                title: 'Quarterly account statement',
                description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
                actionUrl: '#'
            },
            {
                title: 'Plan for the future with Enrich',
                description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
                actionUrl: '#'
            }
        ],
        Try: [
            {
                title: 'Settlement calculator',
                description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
                actionUrl: '#'
            }
        ],
        Watch: [
            {
                title: 'Renovation planner walkthrough',
                description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
                actionUrl: '#'
            }
        ],
        Contact: [
            {
                title: 'Investment support',
                description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
                actionUrl: '#'
            }
        ]
    };

    return { topRecommendation, categorizedRecommendations };
}

// Show outcome screen
function showOutcomeScreen() {
    const { topRecommendation, categorizedRecommendations } = generateRecommendations();
    
    mainContent.innerHTML = `
        <div class="outcome-screen">
            <h1 class="outcome-title">Recommendations based on your answers</h1>
            
            <div class="outcome-section">
                <p class="outcome-context">Because you plan to settle your HEI through a home sale within the next three years. We're here to help when you're ready to start making progress.</p>
                
                <!-- Top Recommendation -->
                <div class="top-recommendation">
                    <span class="section-label">TOP RECOMMENDATION</span>
                    <div class="recommendation-card featured">
                        <div class="card-content">
                            <h3>${topRecommendation.title}</h3>
                            <p>${topRecommendation.description}</p>
                        </div>
                        <a href="${topRecommendation.actionUrl}" class="recommendation-link">
                            <span>${topRecommendation.action}</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16666 10H15.8333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Categorized Recommendations -->
                <div class="recommendations-grid">
                    ${Object.entries(categorizedRecommendations).map(([category, items]) => items.length ? `
                        <div class="recommendation-category">
                            <span class="section-label">${category.toUpperCase()}</span>
                            <div class="recommendation-list">
                                ${items.map(rec => `
                                    <div class="recommendation-card">
                                        <div class="card-content">
                                            <h3>${rec.title}</h3>
                                            <p>${rec.description}</p>
                                        </div>
                                        <a href="${rec.actionUrl}" class="recommendation-link">
                                            <span>${category}</span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.16666 10H15.8333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : '').join('')}
                </div>
            </div>
        </div>
    `;

    document.querySelector('.navigation').style.display = 'none';
}

// Handle text input
function handleTextInput(event) {
    const value = event.target.value.trim();
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

// Initialize the survey
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}); 
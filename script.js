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

    // Reinitialize radio listeners
    initializeRadioListeners();

    // If there's a previously selected answer for this question, select it and show insight
    if (answers[currentQuestionIndex]) {
        const radioToCheck = document.querySelector(`input[type="radio"][value="${answers[currentQuestionIndex]}"]`);
        if (radioToCheck) {
            radioToCheck.checked = true;
            if (currentQuestionIndex === 0) {
                const selectedOption = question.options.find(opt => opt.value === answers[currentQuestionIndex]);
                if (selectedOption) {
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
        showOutcomeScreen();
    }
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
    progressSteps.forEach((step, index) => {
        if (index === currentQuestionIndex) {
            step.classList.add('active');
        } else if (index < currentQuestionIndex) {
            step.classList.add('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
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

// Initialize the survey
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}); 
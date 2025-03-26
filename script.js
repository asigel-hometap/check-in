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
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                { 
                    text: "Within the next 3 years",
                    value: "within-three-years",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                { 
                    text: "More than 3 years from now",
                    value: "more-than-three",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                { 
                    text: "I'm not sure",
                    value: "not-sure"
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
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    text: "With cash savings",
                    value: "cash-savings",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    text: "With a loan or HELOC",
                    value: "loan-heloc",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    text: "With a home sale",
                    value: "home-sale",
                    helper: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
                            ${option.helper ? `<span class="option-helper">${option.helper}</span>` : ''}
                        </div>
                        ${option.infoCard ? renderInfoCard(option.infoCard) : ''}
                    </div>
                </label>
            `).join('')}
        </div>
    `;

    // Reset continue button state
    if (continueBtn) {
        continueBtn.disabled = !answers[currentQuestionIndex];
    }

    // Reinitialize radio listeners after rendering new question
    initializeRadioListeners();

    // If there's a previously selected answer for this question, select it
    if (answers[currentQuestionIndex]) {
        const radioToCheck = document.querySelector(`input[type="radio"][value="${answers[currentQuestionIndex]}"]`);
        if (radioToCheck) {
            radioToCheck.checked = true;
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
    const recommendations = [];
    
    // Example logic for generating recommendations based on answers
    if (answers[0] === 'within-three-years' && answers[1] === 'home-sale') {
        recommendations.push({
            title: 'Simplist',
            description: 'Next-generation mortgage marketplace using technology to find a range of home-buying options.',
            action: 'Learn more',
            actionUrl: '#'
        });
        
        recommendations.push({
            title: 'Quarterly account statement',
            description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            action: 'View quarterly account statement',
            actionUrl: '#'
        });
        
        recommendations.push({
            title: 'Settlement calculator',
            description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            action: 'View settlemet calculator',
            actionUrl: '#'
        });
    }

    // Add renovation-related recommendations
    recommendations.push({
        title: 'Renovation planner',
        description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        action: 'View reno planner',
        actionUrl: '#'
    });

    recommendations.push({
        title: 'Plan for the future with Enrich',
        description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        action: 'Learn more',
        actionUrl: '#'
    });

    return recommendations;
}

// Show outcome screen
function showOutcomeScreen() {
    const recommendations = generateRecommendations();
    
    mainContent.innerHTML = `
        <div class="outcome-screen">
            <h1 class="outcome-title">Recommendations based on your answers</h1>
            
            <div class="outcome-section">
                <p class="outcome-context">Because you plan to settle my HEI through a home sale within the next three years. We're here to help when you're ready to start making progress.</p>
                
                <div class="recommendations">
                    ${recommendations.map(rec => `
                        <div class="recommendation-card">
                            <h3>${rec.title}</h3>
                            <p>${rec.description}</p>
                            <a href="${rec.actionUrl}" class="recommendation-link">${rec.action}</a>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="outcome-section">
                <p class="outcome-context">Because in the past six months or the next six months, you have experienced or expect to experience a growing family and a major home repair or renovation.</p>
                
                <div class="recommendation-card">
                    <h3>Investment support</h3>
                    <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <a href="#" class="recommendation-link">Learn more</a>
                </div>
            </div>

            <div class="outcome-section">
                <p class="outcome-context">Because you're looking for support around planning a renovation</p>
                
                <div class="recommendation-card">
                    <h3>Renovation planner</h3>
                    <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <a href="#" class="recommendation-link">View reno planner</a>
                </div>
            </div>
        </div>
    `;

    // Hide the navigation footer
    document.querySelector('.navigation').style.display = 'none';
}

// Initialize the survey
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateProgressSteps();
    renderQuestion(currentQuestionIndex);
}); 
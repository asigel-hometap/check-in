// Survey questions and feedback
const surveyData = {
    questions: [
        {
            id: 1,
            text: "How would you rate your current energy level?",
            options: [
                { text: "Very High", value: 5 },
                { text: "High", value: 4 },
                { text: "Moderate", value: 3 },
                { text: "Low", value: 2 },
                { text: "Very Low", value: 1 }
            ],
            feedback: {
                5: "That's fantastic! High energy levels often indicate good overall well-being.",
                4: "Great! You're maintaining good energy levels.",
                3: "That's normal! Many people experience moderate energy levels.",
                2: "It's okay to have low energy sometimes. Let's explore what might help.",
                1: "I understand. We'll look at some strategies to help boost your energy."
            }
        },
        {
            id: 2,
            text: "How well have you been sleeping lately?",
            options: [
                { text: "Very Well", value: 5 },
                { text: "Well", value: 4 },
                { text: "Okay", value: 3 },
                { text: "Poorly", value: 2 },
                { text: "Very Poorly", value: 1 }
            ],
            feedback: {
                5: "Excellent! Good sleep is crucial for overall health.",
                4: "That's good! Consistent sleep patterns are important.",
                3: "Sleep quality can vary. We'll look at some tips to improve it.",
                2: "Poor sleep can affect many aspects of life. Let's find solutions.",
                1: "I understand. We'll explore some strategies to improve your sleep."
            }
        },
        {
            id: 3,
            text: "How would you describe your stress levels?",
            options: [
                { text: "Very Low", value: 5 },
                { text: "Low", value: 4 },
                { text: "Moderate", value: 3 },
                { text: "High", value: 2 },
                { text: "Very High", value: 1 }
            ],
            feedback: {
                5: "That's wonderful! Managing stress well is a great skill.",
                4: "Good job! You're handling stress effectively.",
                3: "Moderate stress is normal. Let's look at some management techniques.",
                2: "High stress can be challenging. We'll explore some coping strategies.",
                1: "I understand. We'll focus on some stress management techniques."
            }
        }
    ],
    recommendations: {
        energy: {
            high: [
                "Maintain your current energy levels by staying active",
                "Consider sharing your energy management strategies with others",
                "Use your high energy to tackle important projects"
            ],
            moderate: [
                "Try incorporating short breaks throughout your day",
                "Consider adding some light exercise to your routine",
                "Stay hydrated and maintain regular meal times"
            ],
            low: [
                "Start with small, manageable tasks to build momentum",
                "Consider talking to a healthcare provider about your energy levels",
                "Try to establish a consistent sleep schedule"
            ]
        },
        sleep: {
            high: [
                "Maintain your current sleep routine",
                "Consider documenting what helps you sleep well",
                "Share your sleep hygiene tips with others"
            ],
            moderate: [
                "Try to go to bed and wake up at the same time each day",
                "Create a relaxing bedtime routine",
                "Limit screen time before bed"
            ],
            low: [
                "Consider creating a sleep diary to track patterns",
                "Try relaxation techniques before bed",
                "Evaluate your caffeine intake"
            ]
        },
        stress: {
            high: [
                "Practice deep breathing exercises daily",
                "Consider talking to a counselor or therapist",
                "Try regular physical activity to manage stress"
            ],
            moderate: [
                "Incorporate mindfulness practices into your day",
                "Take regular breaks during work",
                "Practice saying 'no' to reduce overwhelm"
            ],
            low: [
                "Continue your current stress management practices",
                "Consider mentoring others in stress management",
                "Use your low stress levels to help others"
            ]
        }
    }
};

// State management
let currentQuestion = 0;
let answers = [];
let selectedOption = null;

// DOM Elements
const questionContainer = document.getElementById('questionContainer');
const feedbackContainer = document.getElementById('feedbackContainer');
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize the survey
function initSurvey() {
    showQuestion();
    updateProgress();
    updateNavigation();
}

// Show current question with animation
function showQuestion() {
    const question = surveyData.questions[currentQuestion];
    questionContainer.innerHTML = `
        <div class="question">
            <h2>${question.text}</h2>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-value="${option.value}">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add click handlers to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => selectOption(option));
    });

    // Show the question with animation
    setTimeout(() => {
        document.querySelector('.question').classList.add('visible');
    }, 100);

    // Reset feedback container
    feedbackContainer.innerHTML = '';
}

// Handle option selection
function selectOption(optionElement) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Add new selection
    optionElement.classList.add('selected');
    selectedOption = parseInt(optionElement.dataset.value);
    
    // Show feedback
    showFeedback(selectedOption);
    
    // Enable next button
    nextBtn.disabled = false;
}

// Show feedback message with animation
function showFeedback(value) {
    const question = surveyData.questions[currentQuestion];
    const feedback = question.feedback[value];
    
    feedbackContainer.innerHTML = `
        <div class="feedback">
            ${feedback}
        </div>
    `;
    
    // Show feedback with animation
    setTimeout(() => {
        document.querySelector('.feedback').classList.add('visible');
    }, 100);
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / surveyData.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Update navigation buttons
function updateNavigation() {
    prevBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
    nextBtn.textContent = currentQuestion === surveyData.questions.length - 1 ? 'See Results' : 'Next';
    nextBtn.disabled = selectedOption === null;
}

// Handle navigation
function handleNavigation(direction) {
    if (direction === 'next' && selectedOption === null) return;
    
    if (direction === 'next') {
        answers.push(selectedOption);
        if (currentQuestion < surveyData.questions.length - 1) {
            currentQuestion++;
            selectedOption = null;
            nextBtn.disabled = true; // Disable next button for new question
            showQuestion();
            updateProgress();
            updateNavigation();
        } else {
            showResults();
        }
    } else if (direction === 'prev' && currentQuestion > 0) {
        currentQuestion--;
        selectedOption = answers[currentQuestion];
        nextBtn.disabled = false; // Enable next button when going back
        showQuestion();
        updateProgress();
        updateNavigation();
    }
}

// Show results page
function showResults() {
    const results = calculateResults();
    questionContainer.innerHTML = `
        <div class="results">
            <h2>Your Results</h2>
            <div class="recommendations">
                ${generateRecommendations(results)}
            </div>
            <div class="email-form">
                <h3>Would you like to receive these recommendations via email?</h3>
                <input type="email" placeholder="Enter your email address" id="emailInput">
                <button onclick="handleEmailSubmit()">Send Recommendations</button>
            </div>
        </div>
    `;

    // Hide navigation buttons
    document.querySelector('.navigation').style.display = 'none';

    // Show results with animation
    setTimeout(() => {
        document.querySelector('.results').classList.add('visible');
    }, 100);
}

// Calculate results based on answers
function calculateResults() {
    return {
        energy: answers[0],
        sleep: answers[1],
        stress: answers[2]
    };
}

// Generate personalized recommendations
function generateRecommendations(results) {
    const categories = ['energy', 'sleep', 'stress'];
    let recommendations = '';
    
    categories.forEach(category => {
        const value = results[category];
        let level = 'moderate';
        if (value >= 4) level = 'high';
        if (value <= 2) level = 'low';
        
        recommendations += `
            <div class="recommendation-card">
                <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul>
                    ${surveyData.recommendations[category][level].map(rec => `
                        <li>${rec}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    });
    
    return recommendations;
}

// Handle email submission
function handleEmailSubmit() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    
    // In a real application, this would send the email
    alert('Thank you! Your recommendations have been sent to ' + email);
}

// Event Listeners
prevBtn.addEventListener('click', () => handleNavigation('prev'));
nextBtn.addEventListener('click', () => handleNavigation('next'));

// Initialize the survey
initSurvey(); 
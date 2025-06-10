// Graduation Card Interactive Effects

document.addEventListener('DOMContentLoaded', function() {

    

    // Initialize all animations and interactions

    initializeCard();

    createFloatingHearts();

    addClickEffects();

    startConfettiAnimation();

    addHoverEffects();

    

});

// Initialize card entrance animation

function initializeCard() {

    const card = document.querySelector('.card');

    

    // Add a slight delay before showing the card

    setTimeout(() => {

        card.style.transform = 'translateY(0) scale(1)';

        card.style.opacity = '1';

    }, 300);

    

    // Animate elements one by one

    animateElements();

}

// Animate card elements sequentially

function animateElements() {

    const elements = [

        '.congratulations',

        '.photo-container',

        '.graduate-name',

        '.course-info',

        '.message'

    ];

    

    elements.forEach((selector, index) => {

        const element = document.querySelector(selector);

        if (element) {

            element.style.opacity = '0';

            element.style.transform = 'translateY(20px)';

            

            setTimeout(() => {

                element.style.transition = 'all 0.6s ease-out';

                element.style.opacity = '1';

                element.style.transform = 'translateY(0)';

            }, 500 + (index * 200));

        }

    });

}

// Create floating hearts effect

function createFloatingHearts() {

    const heartsContainer = document.createElement('div');

    heartsContainer.className = 'floating-hearts';

    heartsContainer.style.cssText = `

        position: fixed;

        top: 0;

        left: 0;

        width: 100%;

        height: 100%;

        pointer-events: none;

        z-index: -1;

    `;

    document.body.appendChild(heartsContainer);

    

    // Create hearts periodically

    setInterval(createHeart, 3000);

}

// Create individual floating heart

function createHeart() {

    const heart = document.createElement('div');

    heart.innerHTML = '💖';

    heart.style.cssText = `

        position: absolute;

        font-size: ${Math.random() * 20 + 15}px;

        left: ${Math.random() * 100}%;

        top: 100%;

        opacity: 0.7;

        pointer-events: none;

        animation: floatUp 6s ease-out forwards;

    `;

    

    document.querySelector('.floating-hearts').appendChild(heart);

    

    // Remove heart after animation

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

// Add CSS animation for floating hearts

const style = document.createElement('style');

style.textContent = `

    @keyframes floatUp {

        0% {

            transform: translateY(0) rotate(0deg);

            opacity: 0.7;

        }

        50% {

            opacity: 1;

        }

        100% {

            transform: translateY(-100vh) rotate(360deg);

            opacity: 0;

        }

    }

    

    @keyframes ripple {

        0% {

            transform: scale(1);

            opacity: 1;

        }

        100% {

            transform: scale(2);

            opacity: 0;

        }

    }

    

    .click-ripple {

        position: absolute;

        border-radius: 50%;

        background: radial-gradient(circle, rgba(255, 107, 157, 0.6) 0%, transparent 70%);

        animation: ripple 0.6s ease-out;

        pointer-events: none;

    }

`;

document.head.appendChild(style);

// Add click effects

function addClickEffects() {

    const card = document.querySelector('.card');

    

    card.addEventListener('click', function(e) {

        // Create ripple effect

        const ripple = document.createElement('div');

        ripple.className = 'click-ripple';

        

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        

        ripple.style.cssText = `

            width: 20px;

            height: 20px;

            left: ${x - 10}px;

            top: ${y - 10}px;

        `;

        

        card.appendChild(ripple);

        

        // Remove ripple after animation

        setTimeout(() => {

            ripple.remove();

        }, 600);

        

        // Trigger celebration effect

        celebrationEffect();

    });

}

// Celebration effect on click

function celebrationEffect() {

    // Create burst of confetti

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            createConfettiPiece();

        }, i * 50);

    }

    

    // Shake effect for card

    const card = document.querySelector('.card');

    card.style.animation = 'shake 0.5s ease-in-out';

    

    setTimeout(() => {

        card.style.animation = '';

    }, 500);

}

// Add shake animation

const shakeStyle = document.createElement('style');

shakeStyle.textContent = `

    @keyframes shake {

        0%, 100% { transform: translateX(0); }

        25% { transform: translateX(-5px); }

        75% { transform: translateX(5px); }

    }

`;

document.head.appendChild(shakeStyle);

// Create confetti piece

function createConfettiPiece() {

    const colors = ['#ff6b9d', '#ffd3e0', '#ff9a9e', '#c44569'];

    const confetti = document.createElement('div');

    

    confetti.style.cssText = `

        position: fixed;

        width: 10px;

        height: 10px;

        background: ${colors[Math.floor(Math.random() * colors.length)]};

        left: ${Math.random() * 100}%;

        top: -10px;

        z-index: 1000;

        animation: confettiFall ${Math.random() * 3 + 2}s ease-out forwards;

        transform: rotate(${Math.random() * 360}deg);

    `;

    

    document.body.appendChild(confetti);

    

    setTimeout(() => {

        confetti.remove();

    }, 5000);

}

// Add confetti fall animation

const confettiStyle = document.createElement('style');

confettiStyle.textContent = `

    @keyframes confettiFall {

        0% {

            transform: translateY(0) rotate(0deg);

            opacity: 1;

        }

        100% {

            transform: translateY(100vh) rotate(720deg);

            opacity: 0;

        }

    }

`;

document.head.appendChild(confettiStyle);

// Start continuous confetti animation

function startConfettiAnimation() {

    setInterval(() => {

        if (Math.random() < 0.3) { // 30% chance every interval

            createConfettiPiece();

        }

    }, 1000);

}

// Add hover effects

function addHoverEffects() {

    const card = document.querySelector('.card');

    const photoFrame = document.querySelector('.photo-frame');

    const graduateName = document.querySelector('.graduate-name');

    

    // Card hover effect

    card.addEventListener('mouseenter', function() {

        this.style.transform = 'translateY(-10px) scale(1.02)';

        this.style.boxShadow = '0 40px 100px rgba(255, 107, 157, 0.4)';

    });

    

    card.addEventListener('mouseleave', function() {

        this.style.transform = 'translateY(0) scale(1)';

        this.style.boxShadow = '0 30px 80px rgba(255, 107, 157, 0.3)';

    });

    

    // Photo hover effect

    if (photoFrame) {

        photoFrame.addEventListener('mouseenter', function() {

            this.style.transform = 'scale(1.1)';

        });

        

        photoFrame.addEventListener('mouseleave', function() {

            this.style.transform = 'scale(1)';

        });

    }

    

    // Name hover effect

    if (graduateName) {

        graduateName.addEventListener('mouseenter', function() {

            this.style.transform = 'scale(1.05)';

            this.style.textShadow = '0 5px 15px rgba(196, 69, 105, 0.4)';

        });

        

        graduateName.addEventListener('mouseleave', function() {

            this.style.transform = 'scale(1)';

            this.style.textShadow = 'none';

        });

    }

}

// Add particle trail effect when moving mouse

document.addEventListener('mousemove', function(e) {

    // Throttle the effect

    if (Math.random() < 0.1) {

        createMouseTrail(e.clientX, e.clientY);

    }

});

// Create mouse trail particle

function createMouseTrail(x, y) {

    const particle = document.createElement('div');

    particle.style.cssText = `

        position: fixed;

        width: 4px;

        height: 4px;

        background: rgba(255, 107, 157, 0.6);

        border-radius: 50%;

        left: ${x}px;

        top: ${y}px;

        pointer-events: none;

        z-index: 1000;

        animation: fadeOut 1s ease-out forwards;

    `;

    

    document.body.appendChild(particle);

    

    setTimeout(() => {

        particle.remove();

    }, 1000);

}

// Add fade out animation for mouse trail

const trailStyle = document.createElement('style');

trailStyle.textContent = `

    @keyframes fadeOut {

        0% {

            opacity: 1;

            transform: scale(1);

        }

        100% {

            opacity: 0;

            transform: scale(0);

        }

    }

`;

document.head.appendChild(trailStyle);

// Add celebration sound effect (optional - can be enabled if needed)

function playCelebrationSound() {

    // Create audio context for sound effects

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    

    // Create a simple celebration tone

    const oscillator = audioContext.createOscillator();

    const gainNode = audioContext.createGain();

    

    oscillator.connect(gainNode);

    gainNode.connect(audioContext.destination);

    

    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5 note

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    

    oscillator.start(audioContext.currentTime);

    oscillator.stop(audioContext.currentTime + 0.5);

}

// Initialize typing effect for congratulations text

function initializeTypingEffect() {

    const congratsText = document.querySelector('.congratulations');

    const originalText = congratsText.textContent;

    

    congratsText.textContent = '';

    

    let i = 0;

    const typeInterval = setInterval(() => {

        congratsText.textContent += originalText[i];

        i++;

        

        if (i >= originalText.length) {

            clearInterval(typeInterval);

        }

    }, 100);

}

// Auto-resize card based on content

function autoResizeCard() {

    const card = document.querySelector('.card');

    const content = card.scrollHeight;

    

    if (content > card.offsetHeight) {

        card.style.height = content + 'px';

    }

}

// Call auto-resize on window resize

window.addEventListener('resize', autoResizeCard);
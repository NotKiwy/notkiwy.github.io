const CONFIG = {
    channels: {
        notKiwy: "YOUR_LINK_HERE",
        escapeStore: "YOUR_LINK_HERE",
        telegramBio: "YOUR_LINK_HERE"
    },
    playlist: {
        spotify: "YOUR_LINK_HERE",
        soundCloud: "YOUR_LINK_HERE",
        yaMusic: "YOUR_LINK_HERE",
        vkMusic: "YOUR_LINK_HERE",
        telegram: "YOUR_LINK_HERE"
    },
    social: {
        telegram: "YOUR_LINK_HERE",
        github: "YOUR_LINK_HERE"
    },
    info: {
        orderNow: "YOUR_LINK_HERE",
        email: "YOUR_EMAIL_HERE",
        anonymousQuestion: "YOUR_LINK_HERE"
    }
};

function createSnow() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflake = document.createElement('div');
    
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.transform = `scale(${Math.random()})`;
    
    snowContainer.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnow, 50);

document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('active');
});

document.querySelectorAll('.glass-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    });
});

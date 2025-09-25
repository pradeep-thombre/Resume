// Animate skill bars on scroll
const skills = document.querySelectorAll('.skill-bar');

window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(skillTop < windowHeight - 50){
            skill.style.width = skill.dataset.width;
        }
    });
});

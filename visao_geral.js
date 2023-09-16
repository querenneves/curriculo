
document.addEventListener('DOMContentLoaded', function () {
    const experienceButton = document.querySelector('#experience-button');
    const experienceContent = document.querySelector('#experience-content');

    experienceButton.addEventListener('click', function () {
        if (experienceContent.style.display === 'none' || experienceContent.style.display === '') {
            experienceContent.style.display = 'block';
        } else {
            experienceContent.style.display = 'none';
        }
    });
});

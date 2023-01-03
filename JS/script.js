const toggleButton = document.querySelector('#toggle-button');
const section = document.querySelector('#nav-menu');

// toggle the display of the section when the button is clicked

toggleButton.addEventListener('click', (ev) => {
    ev.classList.toggle("change");
});

toggleButton.addEventListener('click', () => {
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
});
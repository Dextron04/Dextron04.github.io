const toggleButton = document.querySelector('#toggle-button');
const section = document.querySelector('#nav-menu');

// toggle the display of the section when the button is clicked

toggleButton.addEventListener('click', () => {

    if(section.style.display == 'block'){
        console.log("Show");
        section.style.display = 'none';
    } else{
        console.log("Hide");
        section.style.display = 'block';
    }
});

function myFunction(x) {
    x.classList.toggle("change");
  }
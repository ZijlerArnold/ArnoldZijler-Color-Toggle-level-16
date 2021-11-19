let hamburgerButton = document.querySelector('#hamburger-box');
let ulBox = document.querySelector('#ul-box');
let colorBox = document.querySelector('#color-box');


/*=== HAMBURGER BUTTON SWITCH ON/OFF =========== */
let showMenu = () => {
    ulBox.classList.toggle('show');
    ulBox.classList.toggle('showbeams-animation');   
};
/*=== END HAMBURGER BUTTON SWITCH ON/OFF =========== */

/*=== HAMBURGER BUTTON ADDEVENTLISTENER =========== */
hamburgerButton.addEventListener('click', showMenu);
/*=== END HAMBURGER BUTTON ADDEVENTLISTENER =========== */

/*=== COLOR BEAMS =========== */
let colorBeams = document.querySelectorAll('.color-beams');
const chooseYourColorBeams = () => {
    Array.from(colorBeams).forEach(beam => {      
        beam.addEventListener('click', (e) => {
            let colorName = beam.innerHTML;
            beam.style.background = colorName;
            let choosedColor = document.querySelector('#choose');
            let changeHeaderbackground = document.querySelector('#header');
            changeHeaderbackground.style.background = colorName;
            choosedColor.innerHTML = `You have chosen: ${colorName}`;
        });
    });
};
chooseYourColorBeams();



      
        
   














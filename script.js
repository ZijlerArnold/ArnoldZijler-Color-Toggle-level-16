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
            let body = document.body;
            body.style.background = colorName;
            ulBox.classList.toggle('show');

            let choosedColor = document.querySelector('#choose');
            let changeHeaderbackground = document.querySelector('#header');
            choosedColor.innerHTML = `You have chosen: ${colorName}`;
        });
    });
};
chooseYourColorBeams();



      
        
   














// Selecting all elements with class 'panel'
const panels = document.querySelectorAll('.panel');

// Looping through a NodeList (array)
panels.forEach((panel) => {

    // Adding an Event Listener for a 'click' event
    panel.addEventListener('click', () => {

        // Removing class 'active' from all panels
        removeActiveClasses();

        // Adding class 'active' to a panel that was clicked
        panel.classList.add('active');

    });

});

// Function that removes class 'active' from all panels
function removeActiveClasses() {

    panels.forEach((panel) => {

        panel.classList.remove('active');

    });

}
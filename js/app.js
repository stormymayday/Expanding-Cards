// Selecting all the divs with class of 'panel'
const panels = document.querySelectorAll(".panel");
// console.log(panels);

// Looping through the panel
panels.forEach((panel) => {
    // Adding an 'on-click' event listener to each panel
    panel.addEventListener("click", () => {
        // Removing the class of 'active' from all panels
        removeActiveClass();

        // Adding the class of 'active' to the current panel
        panel.classList.add("active");
    });
});

const removeActiveClass = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};

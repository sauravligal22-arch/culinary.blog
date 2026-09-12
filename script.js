/* =================================
   MYCULINARYBLOG JAVASCRIPT
   ================================= */


/* =================================
   SLIDE MENU
   ================================= */

function openMenu() {

    document
        .getElementById("sideMenu")
        .classList.add("active");

    document
        .getElementById("overlay")
        .classList.add("active");

}


function closeMenu() {

    document
        .getElementById("sideMenu")
        .classList.remove("active");

    document
        .getElementById("overlay")
        .classList.remove("active");

}


/* =================================
   RECIPE POPUP
   ================================= */

function showRecipe(recipeName) {

    document
        .getElementById("recipeTitle")
        .textContent = recipeName;

    document
        .getElementById("recipePopup")
        .classList.add("active");

}


function closeRecipe() {

    document
        .getElementById("recipePopup")
        .classList.remove("active");

}


/* =================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
   ================================= */

document
    .getElementById("recipePopup")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeRecipe();

            }

        }
    );


/* =================================
   SUBSCRIBE
   ================================= */

function subscribe(event) {

    event.preventDefault();

    const email =
        document
        .getElementById("email")
        .value;

    document
        .getElementById("message")
        .textContent =
        "Thank you! " +
        email +
        " has subscribed ❤️";

}
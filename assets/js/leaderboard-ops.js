/* jshint esversion: 6 */
// Adds hide elements to main parts of UI
export function addHideClass() {
    document.getElementById("earth-image").classList.add("hide");
    document.getElementById("beach-game").classList.add("hide");
    document.getElementById("river-game").classList.add("hide");
    document.getElementById("garbage-bins").classList.add("hide");
    document.getElementById('main-block').classList.add('hide');
    document.getElementById('rules').classList.add('hide');
    document.getElementById('difficulty-block').classList.add('hide');
    document.getElementById('leaders-board').classList.add("hide");
    document.getElementById("carousel").classList.add("hide");
    document.getElementById("beach-game").classList.add("hide");
    document.getElementById("river-game").classList.add("hide");
    document.getElementById("ocean-game").classList.add("hide");
}

// Curried function to add and remove event listeners for Rules and Leaders Board sections
export let myFunction = function (section, closeBtn) {
    return function curriedFunc(e) {
        myFunction(e, section, closeBtn);
        if (!section.classList.contains("hide")) {
            console.log("click");
            if (!section.contains(e.target) || closeBtn.contains(e.target)) {
                addHideClass();
                let sectionEventHandler;
                document.getElementById("earth-image").classList.remove("hide");
                document.getElementById('main-block').classList.remove('hide');
                document.getElementById('main').removeEventListener('click', sectionEventHandler);
            }
        }
    }
}


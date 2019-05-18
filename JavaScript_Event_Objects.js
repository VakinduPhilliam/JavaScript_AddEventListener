/* JavaScript Event objects. */
/* Event handler functions are passed an argument: the event object, when a key is pressed. */
/* This object holds additional information about the event. */
/* For example, if we want to know which mouse button was pressed, */
/* we can look at the event object’s button property. */

  let button = document.querySelector("button");

  button.addEventListener("mousedown", event => {

    if (event.button == 0) {

      console.log("Left button");

    } else if (event.button == 1) {

      console.log("Middle button");

    } else if (event.button == 2) {

      console.log("Right button");

    }

  });

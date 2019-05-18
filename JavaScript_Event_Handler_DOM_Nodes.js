/* JavaScript Event Handler. */
/* Event listeners are called only when the event happens */
/* in the context of the object they are registered to. */
/* This example attaches a handler to the button node. */
/* Clicks on the button cause that handler to run, but clicks on the rest of the document do not. */

  let button = document.querySelector("button");

  button.addEventListener("click", () => {

    console.log("Button clicked.");

  });

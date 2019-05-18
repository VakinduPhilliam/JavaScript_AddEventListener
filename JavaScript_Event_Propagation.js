/* JavaScript Event Handlers. */
/* The following example registers "mousedown" handlers on both a button */
/* and the paragraph around it. When clicked with the right mouse button, */
/* the handler for the button calls stopPropagation, which will prevent the */
/* handler on the paragraph from running. When the button is clicked with another */
/* mouse button, both handlers will run. */

  let para = document.querySelector("p");
  let button = document.querySelector("button");

  para.addEventListener("mousedown", () => {

    console.log("Handler for paragraph.");

  });

  button.addEventListener("mousedown", event => {

    console.log("Handler for button.");

    if (event.button == 2) event.stopPropagation();

  });


/* JavaScript Event Handler. */
/* The removeEventListener method, called with arguments similar */
/* to addEventListener, removes a handler. */

  let button = document.querySelector("button");

  function once() {

    console.log("Done.");
    button.removeEventListener("click", once);

  }

  button.addEventListener("click", once);
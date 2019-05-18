/* JavaScript Event Handler. */
/* It is possible to use the target property to cast a wide net for */
/* a specific type of event. */
/* For example, if you have a node containing a long list of buttons, it may */
/* be more convenient to register a single click handler on the outer node and */
/* have it use the target property to figure out whether a button was clicked, */
/* rather than register individual handlers on all of the buttons. */

  document.body.addEventListener("click", event => {

    if (event.target.nodeName == "BUTTON") {

      console.log("Clicked", event.target.textContent);

    }

  });

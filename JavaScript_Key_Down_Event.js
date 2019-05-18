/* JavaScript Key event Handler. */
/* When a key on the keyboard is pressed, your browser fires a "keydown" event. */
/* When it is released, you get a "keyup" event. */

  window.addEventListener("keydown", event => {

    if (event.key == "v") {

      document.body.style.background = "violet";

    }

  });

  window.addEventListener("keyup", event => {

    if (event.key == "v") {

      document.body.style.background = "";

    }

  });
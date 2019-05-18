
/* JavaScript Event Handler. */
/* Modifier keys such as shift, control, alt, and meta (command on Mac) generate key */
/* events just like normal keys. But when looking for key combinations, you can also */
/* find out whether these keys are held down by looking at the shiftKey, ctrlKey, altKey, */
/* and metaKey properties of keyboard and mouse events. */

  window.addEventListener("keydown", event => {

    if (event.key == " " && event.ctrlKey) {

      console.log("Continuing!");

    }

  });

/* The following JavaScript program displays a bar and sets up event handlers */
/* so that dragging to the left or right on this bar makes it narrower or wider: */

  let lastX; // Tracks the last observed mouse X position
  let bar = document.querySelector("div");

  bar.addEventListener("mousedown", event => {

    if (event.button == 0) {

      lastX = event.clientX;
      window.addEventListener("mousemove", moved);

      event.preventDefault(); // Prevent selection

    }
  });

  function moved(event) {

    if (event.buttons == 0) {

      window.removeEventListener("mousemove", moved);

    } else {

      let dist = event.clientX - lastX;
      let newWidth = Math.max(10, bar.offsetWidth + dist);

      bar.style.width = newWidth + "px";

      lastX = event.clientX;

    }
  }

/* Note that the "mousemove" handler is registered on the whole window. */
/* Even if the mouse goes outside of the bar during resizing, as long as */
/* the button is held we still want to update its size. */
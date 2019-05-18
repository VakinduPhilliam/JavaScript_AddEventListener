/* JavaScript AddEventListener Touch. */
/* Because many touchscreens can detect multiple fingers at the same time, */
/* these events don’t have a single set of coordinates associated with them. */
/* Rather, their event objects have a touches property, which holds an array-like */
/* object of points, each of which has its own clientX, clientY, pageX, and pageY properties. */

/* This function shows red circles around every touching finger. */


  function update(event) {

    for (let dot; dot = document.querySelector("dot");) {

      dot.remove();

    }

    for (let i = 0; i < event.touches.length; i++) {

      let {pageX, pageY} = event.touches[i];
      let dot = document.createElement("dot");

      dot.style.left = (pageX - 50) + "px";
      dot.style.top = (pageY - 50) + "px";

      document.body.appendChild(dot);

    }
  }

  window.addEventListener("touchstart", update);
  window.addEventListener("touchmove", update);
  window.addEventListener("touchend", update);

/* You’ll often want to call preventDefault in touch event handlers to override the browser’s */
/* default behavior (which may include scrolling the page on swiping) and to prevent the mouse */
/* events from being fired, for which you may also have a handler. */
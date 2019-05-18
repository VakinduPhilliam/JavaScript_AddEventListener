/* JavaScript Event Handler. */
/* Many events have a default action associated with them. */
/* If you click a link, you will be taken to the link�s target. */
/* If you press the down arrow, the browser will scroll the page down. */
/* If you right-click, you�ll get a context menu. And so on. */
/* The JavaScript preventDefault method can be used to implement your own keyboard shortcuts or context menu. */

  let link = document.querySelector("a");

  link.addEventListener("click", event => {

    console.log("Nope.");
    event.preventDefault();

  });

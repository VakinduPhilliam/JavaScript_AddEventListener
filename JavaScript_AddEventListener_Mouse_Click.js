/* Simple JavaScript Draw Function. */
/* The following JavaScript Program implements a primitive drawing program. */
/* Every time you click the document, it adds a dot under your mouse pointer. */

  window.addEventListener("click", event => {

    let dot = document.createElement("div");

    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";

    document.body.appendChild(dot);

  });


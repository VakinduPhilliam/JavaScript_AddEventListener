/* JavaScript AddEventListener. */
/* The following example draws a progress bar above the document and */
/* updates it to fill up as you scroll down: */

  // Create some content

  document.body.appendChild(document.createTextNode(

    "supercalifragilisticexpialidocious ".repeat(1000)));

  let bar = document.querySelector("#progress");

  window.addEventListener("scroll", () => {

    let max = document.body.scrollHeight - innerHeight;

    bar.style.width = `${(pageYOffset / max) * 100}%`;

  });

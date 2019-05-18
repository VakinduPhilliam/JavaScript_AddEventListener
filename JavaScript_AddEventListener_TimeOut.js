/* JavaScript AddEventListener. */
/* In this example, we want to react when the user has typed something, */
/* but we don�t want to do it immediately for every input event. */
/* When they are typing quickly, we just want to wait until a pause occurs. */
/* Instead of immediately performing an action in the event handler, we set a timeout. */
/* We also clear the previous timeout (if any) so that when events occur close together */
/* (closer than our timeout delay), the timeout from the previous event will be canceled. */

  let textarea = document.querySelector("textarea");
  let timeout;

  textarea.addEventListener("input", () => {

    clearTimeout(timeout);

    timeout = setTimeout(() => console.log("Typed!"), 500);

  });

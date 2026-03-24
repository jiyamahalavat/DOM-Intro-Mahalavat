/**
 * ============================================================
 *  DOM Explorer — script.js
 *  Assignment 2 | Web Development I
 * ============================================================
 *
 *  HOW TO USE THIS FILE
 *  --------------------
 *  Each task below matches a section in index.html.
 *  Follow the numbered TODO comments inside each function.
 *  Do NOT rename any functions — they are wired to the page.
 *
 *  Run the page by opening index.html in your browser.
 *  You do NOT need any build tools or a server for this assignment.
 *
 *  Key methods you will use:
 *    document.createElement(tag)         → makes a new element node
 *    document.createTextNode(string)     → makes a new text node
 *    parent.appendChild(child)           → inserts child at end of parent
 *    element.setAttribute(name, value)   → sets an HTML attribute
 *    element.textContent = string        → sets visible text content
 *    setInterval(fn, ms)                 → schedules fn every ms milliseconds
 *    clearInterval(id)                   → cancels a running interval
 *    window.*                            → Browser Object Model properties
 * ============================================================
 */

'use strict';

/* ─────────────────────────────────────────────────────────────
   PROGRESS TRACKER  (do not edit — called by markDone)
───────────────────────────────────────────────────────────── */
let completedTasks = 0;

/**
 * Call markDone(taskNumber) at the end of each task function
 * to update the progress tracker at the bottom of the page.
 * @param {number} n - Task number (1–4)
 */
function markDone(n) {
  const badge  = document.getElementById(`status-task${n}`);
  const pip    = document.getElementById(`pip-${n}`);
  const output = document.getElementById('progress-text');

  if (badge && !badge.classList.contains('done')) {
    badge.classList.add('done');
    badge.innerHTML = '<span class="dot" aria-hidden="true"></span> complete ✓';
    completedTasks++;
  }

  if (pip) pip.classList.add('done');
  if (output) output.textContent = `${completedTasks} / 4`;
}


/* ─────────────────────────────────────────────────────────────
   TASK 1 — Create & Append Nodes
   Learning Outcome: Create nodes and append them to a web document.
───────────────────────────────────────────────────────────── */

/**
 * task1() is triggered by index.html as soon as the page loads.
 * Create a paragraph node and attach it to the sandbox.
 */
function task1() {

  // TODO 1a: Create a new <p> element using document.createElement().
  //          Store it in a variable called newPara.


  // TODO 1b: Create a text node using document.createTextNode().
  //          Write any sentence you like inside it.
  //          Store it in a variable called myText.


  // TODO 1c: Append myText into newPara using .appendChild().
  //          Remember: text nodes must live inside an element node.


  // TODO 1d: Select the sandbox div on the page.
  //          Its id is "sandbox-task1".
  //          Append newPara into it so it appears in the browser.


  // TODO 1e: Call markDone(1) so the progress tracker updates.


}

// Auto-run Task 1 when the page loads so students see immediate feedback.
window.addEventListener('DOMContentLoaded', task1);


/* ─────────────────────────────────────────────────────────────
   TASK 2 — Restructure the Document
   Learning Outcome: Restructure a web document by adding element nodes.
───────────────────────────────────────────────────────────── */

/**
 * task2() builds a <section> containing a heading and a list,
 * then inserts the whole structure into the page.
 * Triggered automatically after task1 completes.
 */
function task2() {

  // TODO 2a: Create a <section> element. Store it as newSection.


  // TODO 2b: Give newSection an id attribute of "dynamic-section".
  //          Use newSection.setAttribute('id', 'dynamic-section').


  // TODO 2c: Create an <h3> element.
  //          Set its textContent to "Built with JavaScript".
  //          Append the <h3> into newSection.


  // TODO 2d: Create a <ul> element.
  //          Use a loop (forEach, for, or for...of) to create
  //          THREE <li> elements, each with different text content.
  //          Append each <li> into the <ul>.
  //          Finally, append the <ul> into newSection.
  //
  //          Suggested items (or make up your own):
  const listItems = ['createElement', 'appendChild', 'setAttribute'];
  //
  //          Your loop goes here:


  // TODO 2e: Select the sandbox (id="sandbox-task2") and
  //          append newSection into it.


  // TODO 2f: Call markDone(2).


}

window.addEventListener('DOMContentLoaded', task2);


/* ─────────────────────────────────────────────────────────────
   TASK 3 — Timed Repeating Commands
   Learning Outcome: Define a timed command that repeats a function
                     or command block at set intervals.
───────────────────────────────────────────────────────────── */

// These variables need to be accessible by task3(), stopTimer(),
// and resetTimer(), so we declare them in the outer scope.
let intervalId = null;   // will hold the ID returned by setInterval()
let seconds    = 0;      // tracks elapsed seconds

/**
 * task3() starts the timer.
 * Triggered by the "▶ Start Timer" button in index.html.
 */
function task3() {

  // Guard: if a timer is already running, don't start another one.
  if (intervalId !== null) return;

  // TODO 3a: Select the element with id="timer-display" and store it.
  //          You will update this element's textContent each tick.


  // TODO 3b: Call setInterval() with an arrow function as the first argument
  //          and 1000 as the second argument (1000 ms = 1 second).
  //
  //          Inside the arrow function:
  //            i)  Increment the seconds variable by 1.
  //            ii) Calculate minutes: Math.floor(seconds / 60)
  //            iii)Calculate remaining seconds: seconds % 60
  //            iv) Format both as two-digit strings using .padStart(2, '0')
  //            v)  Set the display element's textContent to "MM:SS"
  //
  //          Store the return value of setInterval() in intervalId.


  // TODO 3c: Call markDone(3) so the progress tracker updates.


}

/**
 * stopTimer() is triggered by the "⏹ Stop" button.
 * Pause the timer without resetting the count.
 */
function stopTimer() {

  // TODO 3d: Call clearInterval() passing in intervalId.
  //          Then set intervalId back to null so the guard in task3()
  //          knows the timer is no longer running.


}

/**
 * resetTimer() is triggered by the "↺ Reset" button.
 * Stop the timer and reset everything to zero.
 */
function resetTimer() {

  // TODO 3e: Stop the timer (you can call stopTimer() here).
  //          Reset the seconds variable to 0.
  //          Reset the timer-display element's textContent to "00:00".


}


/* ─────────────────────────────────────────────────────────────
   TASK 4 — Browser Object Model (BOM)
   Learning Outcome: Work with the objects within the Browser Object Model.
───────────────────────────────────────────────────────────── */

/**
 * Helper function — already complete, no edits needed here.
 * Creates a styled <dl> card displaying a BOM property name and value.
 *
 * @param {string} label - The BOM property name to display
 * @param {string} value - The current value of that property
 * @returns {HTMLElement} A <dl> element ready to be appended to the page
 */
function createBomStat(label, value) {
  const card = document.createElement('dl');
  card.className = 'bom-stat';

  const dt = document.createElement('dt');
  dt.textContent = label;

  const dd = document.createElement('dd');
  dd.textContent = value;

  card.appendChild(dt);
  card.appendChild(dd);
  return card;
}

/**
 * task4() reads BOM properties and displays them on the page.
 * Triggered by the "Inspect My Browser →" button in index.html.
 */
function task4() {

  const panel = document.getElementById('bom-panel');

  // Clear any previously inserted cards before re-running
  panel.innerHTML = '';

  // TODO 4a: Read the following BOM properties and store each in a variable:
  //
  //   window.innerWidth         → current viewport width  (number)
  //   window.innerHeight        → current viewport height (number)
  //   window.navigator.language → browser language string (e.g. "en-US")
  //   window.navigator.onLine   → true if browser has internet access
  //   window.location.href      → the full URL of the current page


  // TODO 4b: For each property you read above, call createBomStat(label, value)
  //          to create a card, then append it into `panel`.
  //
  //          Example:
  //            const widthCard = createBomStat('Viewport Width', viewportWidth + 'px');
  //            panel.appendChild(widthCard);
  //
  //          Do the same for all five properties.


  // TODO 4c: BONUS — Keep the viewport dimensions live.
  //          Use window.addEventListener('resize', function() { ... })
  //          Inside the listener, re-read window.innerWidth and window.innerHeight
  //          and call task4() again to refresh the display.
  //
  //          Hint: To avoid adding duplicate listeners on every button click,
  //          move the resize listener OUTSIDE this function (at the bottom
  //          of the file) so it only registers once.


  // TODO 4d: Call markDone(4).


}


/* ─────────────────────────────────────────────────────────────
   BONUS AREA
   Place any bonus / extension code below this line.
   Experiment freely — breaking things here won't affect the tasks above.
───────────────────────────────────────────────────────────── */

// BONUS TODO: Add a window resize listener here so it only fires once.
// window.addEventListener('resize', task4);

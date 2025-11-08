const JOURNAL = require("./journal.js");

require("./journal.js");

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

console.log(phi([76, 9, 4, 1]));

// pass in the entry and loop over all teh entries to tally how amy times teh event occurs
// in relation to squirrel transformation

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

// loop through all events gathering a list of events
function journalEvents(journal) {
  let eventSet = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!eventSet.includes(event)) {
        eventSet.push(event);
      }
    }
  }

  let phiScores = {};
  for (let event of eventSet) {
    let phiScore = phi(tableFor(event, journal));
    phiScores[event] = phiScore;
  }

  const sorted = Object.entries(phiScores).sort((a, b) => b[1] - a[1]);

  console.log(sorted);
}

console.log(tableFor("pizza", JOURNAL));
journalEvents(JOURNAL);

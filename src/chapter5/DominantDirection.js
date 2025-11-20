import { SCRIPTS } from "./scripts";

export function dominantDirection(string) {
  // iterate over each character in the string
  // create a map that keeps score of how many characters are what kind of script
  // iterate over teh map and return the highest score
  let directionMap = {
    ltr: 0,
    rtl: 0,
    ttb: 0,
  };

  for (let char of string) {
    let charScript = characterScript(char.codePointAt(0));
    if (charScript) {
      directionMap[charScript.direction] += 1;
    }
  }

  return Object.entries(directionMap).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

// use characterscirpt to get the script once we have teh character code
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

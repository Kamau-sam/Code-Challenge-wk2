function caseSwap(foxString) {
  return (
    foxString
      //   Here we split our string into a characters array
      .split("")
      // We map over our array and check if its in lowercase and convert it into Uppercase
      // if it is in upperCase we convert it to lowerCase
      .map((char) =>
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
      )
      // We join back our characters array back into a string
      .join("")
  );
}
//We printout in the console
console.log(caseSwap(`tHE qUICK bROWN fOX`));

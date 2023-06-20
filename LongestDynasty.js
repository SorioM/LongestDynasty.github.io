function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestReign = 0;
  let longestDynasty = "";

  let startYear = 1000;

  for (const { name, end } of dynastyReign) {
    const endYear = convertYear(end);

    if (endYear !== "Invalid" && endYear >= startYear) {
      const reignLength = endYear - startYear;
      if (reignLength > longestReign) {
        longestReign = reignLength;
        longestDynasty = name;
      }
      startYear = endYear + 1;
    }
  }

  return longestDynasty;
}

function convertYear(romanNumerals) {
  const romanToIntMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = 0;
  let remaining = romanNumerals.toUpperCase();

  for (const numeral in romanToIntMap) {
    while (remaining.indexOf(numeral) === 0) {
      result += romanToIntMap[numeral];
      remaining = remaining.slice(numeral.length);
    }
  }

  return remaining.length > 0 ? "Invalid" : result;
}

const dynastyReign = [
  { name: "San Dynasty", end: "MXLI" },
  { name: "Viloria Dynasty", end: "MCCCIIII" },
  { name: "Tan Dynasty", end: "MCCCXCVIII" },
  { name: "Bon Dynasty", end: "MCDXLV" },
  { name: "Maiko Dynasty", end: "MDCLXIV" },
  { name: "Paul Dynasty", end: "MCMXLIX" },
  { name: "Andre Dynasty", end: "MMMXICX" },
];

console.log(dynastyReign);
console.log("Longest Reigning Dynasty:", longestDynasty(dynastyReign));

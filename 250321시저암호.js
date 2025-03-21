function solution(s, n) {
  const lowAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer = answer + " ";
    } else if (s[i] === s[i].toUpperCase()) {
      let a = upAlpha.indexOf(s[i]);
      answer += upAlpha[(a + n) % 26];
    } else if (s[i] === s[i].toLowerCase()) {
      let a = lowAlpha.indexOf(s[i]);
      answer += lowAlpha[(a + n) % 26];
    }
  }
  return answer;
}

function solution(s) {
  var answer = "";
  let a = s.split(" ");
  for (i of a) {
    for (j = 0; j < i.length; j++) {
      if ((j + 1) % 2 !== 0) {
        answer = answer + i[j].toUpperCase();
      } else {
        answer = answer + i[j];
      }
    }
    answer = answer + " ";
  }
  return answer.slice(0, answer.length - 1);
}

function solution(s) {
  var answer = false;
  if (/^[0-9]+$/.test(s) && (s.length === 4 || s.length === 6)) {
    answer = true;
  }

  return answer;
}

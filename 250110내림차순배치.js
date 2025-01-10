function solution(n) {
    var answer =(n+"").split("")
    answer = answer.sort(function(a,b){return b-a})
    return answer.join("")/1;
}
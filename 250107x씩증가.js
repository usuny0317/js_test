function solution(x, n) {
    var answer = [];
    let sum=0
    for (let i=0; i<n; i++){
        answer.push(sum+=x)
    }
    return answer;
}
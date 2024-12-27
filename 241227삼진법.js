//내가 푼 코드

function solution(n) {
    var answer = 0;
    let j=""
    while (n>=3){
        j=j+Math.floor(Number(n%3))
        n=Math.floor(n/3)
    }
    j=j+n
    
    for(i=0; i<j.length; i++){
        answer= answer + ((3**i) * Number(j.slice(-1-i, j.length-i)))}
    return  answer;
}

//훨씬 나은 코드
/*
function solution(n){
    return parseInt(n.toString(3).split("").reverse().join(''), 3)
}*/
function solution(n)
{
    var answer = 0;
    console.log(n%10)
    while(n>0){
        answer+=(n%10)
        n=Math.floor(n/10)
    }
    return answer;
}
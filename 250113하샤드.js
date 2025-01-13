function solution(x) {
    let sum=0;
    let xx=x;
    while(xx>=10){
        sum += Math.floor(xx%10)
        xx=Math.floor(xx/10)
    }
    sum +=xx
    return (x%sum==0)? true:false;
}
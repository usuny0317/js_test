function get_GCD(n,m){ //최대공약수 구하기 (a,b에 대해 a=b*n + r이라면, a와 b의 최대공약수는 b와 r의 최대공약수와 같다. == 유클리도 호제법)
    if(m==0){return n;}//나머지 0되면 끝
    else{return get_GCD(m,n%m);}
}

function solution(n, m) {
    var answer = [];
    if (m>n){[n,m]= [m,n]}
    answer.push(get_GCD(n,m))
    answer.push((n*m)/get_GCD(n,m)) // 최소공배수를 구하는 방법은, a*b / (a와 b의 최대공약수)이다.
    return answer;
}
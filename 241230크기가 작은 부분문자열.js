function solution(t, p) {
    var answer =0; 
    pp= p.length; //p의 자리수 만큼 잘라야해서 따로 지정해둠.
    for(let i=0; i<=t.length-pp; i++){
        if(t.slice(i,i+pp)<=p){answer=answer+1} // p의 자리수 만큼 잘라서 비교
    }
    return answer;
}
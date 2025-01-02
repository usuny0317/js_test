function solution(s) {
    while (true){
        if(s.includes('zero')) {s=s.replace("zero","0");}
        else if(s.includes('one')) {s= s.replace("one","1");}
        else if(s.includes('two')) {s=s.replace("two","2");}
        else if(s.includes('three')) {s=s.replace("three","3");}
        else if(s.includes('four')) {s=s.replace("four","4");}
        else if(s.includes('five')) {s=s.replace("five","5");}
        else if(s.includes('six')) {s=s.replace("six","6");}
        else if(s.includes('seven')) {s=s.replace("seven","7");}
        else if(s.includes('eight')) {s=s.replace("eight","8");}
        else if(s.includes('nine')) {s=s.replace("nine","9");}
        else {break;}
    }
    return Number(s);
}
//똑같은 sixsix의 경우 판단이 안되니까.. 전부 엘이프 줘서 반복시키기
//하나도 안 변하면 break 하기

/*

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

//훨씬 개선된 코드. split을 통해서 그 문자 기준으로 자름. 
//그 후에 잘린 거를 i 를 포함해서 합침
//ex) (one 기준) 32one45two > 32 / 45two > (.join(1)) 32145two 이렇게 되는 것임! 
    */ 
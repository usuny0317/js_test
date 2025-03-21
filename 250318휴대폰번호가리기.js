function solution(phone_number) {
    const plen = phone_number.length;
    let answer = ""
    for (let i = 0 ; i<plen-4 ; i++){
       answer = answer+"*";
    }
    answer= answer + phone_number.slice(plen-4,plen);
    return answer;
}
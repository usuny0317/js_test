function solution(angle) {
    var answer = 0;
    if(angle<90 && angle>0){answer=1}
    else if (angle==90){answer=2}
    else if (angle>90&& angle<180){answer=3}
    else if (angle==180){answer=4}
    else{answer=-1}
    return answer;
}
//더 나은 방법
// anglr<90 ? 1: angle == 90 ? 2 : angle <180 ? 3 : 4
//조건에 정수, 180이하 0초과라서 가능한

//이해는 안가지만 더 깔끔해 보이는 방법
//return [0, 90, 91, 180].filter(x => angle>=x).length;
// angle이 기준 값들보다 크거나 같은 개수를 반환
//ex) >> 배열 [0, 90, 91, 180]에서 91보다 크거나 같은 값: 0, 90, 91. 결과: [0, 90, 91] → 길이: 3
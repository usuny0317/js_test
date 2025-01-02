function solution(strings, n) {
    for(i in strings){
        strings[i]= strings[i].slice(n,n+1)+strings[i].slice(0,n)+strings[i].slice(n+1,strings[i].length)
    }
    strings.sort();
  
    for(i in strings){
        strings[i]=strings[i].slice(1,n+1) + strings[i].slice(0,1)+ strings[i].slice(n+1,strings[i].length)
    }
    return strings;
}

/* 튜터님이 하신 방법.
function solution(strings, n) {
    let result = [];

		// 문자열 가장앞 글자 붙인 문자 배열 만들기
    for (let i = 0; i < strings.length; i++) {
      strings[i] = strings[i][n] + strings[i];
    }

		// 문자열 사전순 정렬
    strings.sort();

		// 앞글자 제거 후 리턴
    for(let j = 0; j < strings.length; j ++) {
      strings[j] = strings[j].replace(strings[j][0],"");
      result.push(strings[j]);
    }

    return result;
}
*/
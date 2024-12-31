function solution(s){
    var answer = true;
    let p=0;
    let y=0;
    for(i=0; i<s.length; i++){
        if(s[i]=="p" || s[i]=="P"){
            p+=1
        }
        else if(s[i]=="y" || s[i]=="Y"){
            y+=1
        }
        else{continue;}
    }
    if(p!=y){ answer= false;}
    
    return answer;
}
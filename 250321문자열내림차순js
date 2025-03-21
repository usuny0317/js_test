function solution(s) {
    var answer = '';
    
    let b=[]
    let c=[]
    
    for(let i =0; i<s.length; i++){
        if(s[i]===s[i].toUpperCase()){
            c.push(s[i])
        }
        else{b.push(s[i])}
    }
    
    b.sort((x,y)=>{ return y.localeCompare(x)})
    c.sort((x,y)=>{ return y.localeCompare(x)})
    
    b.map((x)=>{answer=answer+x})
    c.map((x)=>{answer=answer+x})
    
    return answer;
}
function solution(num) {
    let count=0;
    while (num!=1){
        if(num%2==0){num=num/2;
                    count+=1;
                    if(count ==500){break;}}
        else{num=(num*3)+1
            count+=1;
            if(count ==500){ break;}}
    }
    
    return (count==500)? -1 : count;
}
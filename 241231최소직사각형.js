function solution(sizes) {
    let max=[];
    let max_y=[];
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            max.push(sizes[i][1])
            max_y.push(sizes[i][0])
        }
        else{
            max.push(sizes[i][0])
            max_y.push(sizes[i][1])
        }
    }
    return Math.max(...max)*Math.max(...max_y)
}
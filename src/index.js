module.exports = function reverse (n) {
    if(n>0){
        let newN = n.toString().split('')
        result = ''
        for(let i = newN.length-1;i>=0;i--){
           result=result+newN[i]
        }return Number(result)  
    }else{
        n= n*(-1)
        let newN =n.toString().split('')
               result = ''
               for(let i = newN.length-1;i>=0;i--){
                  result=result+newN[i]
               }return Number(result)
    }
    
}

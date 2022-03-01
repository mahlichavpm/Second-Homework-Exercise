function sumDigits(num){

    let str = String(num);
    sum = 0;

    for(let i = 0; i < str.length; i++){
        
        let n = Number(str[i]);
        sum += n;
    }
    console.log(sum);
}
sumDigits(1243)
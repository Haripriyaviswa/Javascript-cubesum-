let m=prompt("Enter m value:");
let n=prompt("enter n value:");
if(m>n){
    console.log("0");
}
else{
    let sum=0;
    for(let i=m;i<=n;i++){
        sum+=i*i*i;
    }
    console.log("sum of cube of the integer:"+sum);
}

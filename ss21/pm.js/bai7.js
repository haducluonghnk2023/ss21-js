function max(){
    let a =parseFloat(prompt("nhap a"));
    let b =parseFloat(prompt("nhap b"));
    let c =parseFloat(prompt("nhap c"));
    let d;
    if(a>b && a>c){
        d=a;
    }else if(b>a && b>c){
        b=d;
    }else if(c>a && c>b){
        d=c;
    }
    console.log(d);
}
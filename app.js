function calcu() {
    document.getElementById("invalidAmount").innerHTML =""
    document.getElementById("invalidService").innerHTML =""
    document.getElementById("invalidPeople").innerHTML =""
    var a=document.getElementById("amount").value;
    var s=document.getElementById("service").value;
    var p=document.getElementById("people").value;

    if(a<1 || isNaN(a)){
        document.getElementById("invalidAmount").innerHTML ="Please enter valid amount"
        return;
    }
    if(s==='Select'){
        document.getElementById("invalidService").innerHTML ="please enter Service Rating"
        return;
    }
    if(p<1 || isNaN(p)){
        document.getElementById("invalidPeople").innerHTML ="Please enter valid input, People can not less then 1"
        return;
    }
   
    let tip=((a/100)*s)/p;
    tip =tip.toFixed(1);
    let total=(a/p);
    total= parseFloat(total)+parseFloat(tip);
    total=total.toFixed(1);
    document.getElementById("tip").style.display = "block";
    document.getElementById("ttl").style.display = "block";
    
    if(p==='1'){
        document.getElementById("result").innerHTML = tip;
        document.getElementById("total").innerHTML = total;
    }
    else{
        document.getElementById("result").innerHTML = tip+" Each";
        document.getElementById("total").innerHTML = total+" Each";
    }
}
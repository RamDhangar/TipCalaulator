function calcu() {
    var a=document.getElementById("amount").value;
    var s=document.getElementById("service").value;
    var p=document.getElementById("people").value;

    if(a===''){
        alert("Please enter valid amount");
        return;
    }
    if(s==='Select'){
        alert("Please enter service");
        return;
    }
   
    let tip=((a/100)*s)/p;
    tip =tip.toFixed(2);
    let total=(a/p);
    total= parseFloat(total)+parseFloat(tip);
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
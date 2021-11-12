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
    if(p==='1'){
        document.getElementById("each").style.display= "none";
    }
    else{
        document.getElementById("each").style.display= "block";
    }
    let total=((a/100)*s)/p;
    total =total.toFixed(2);
    document.getElementById("tip").style.display = "block";
    document.getElementById("result").innerHTML = total;
}
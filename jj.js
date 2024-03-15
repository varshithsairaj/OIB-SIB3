function conversion(){
    const c =document.getElementById("cel").value;
    const result= (c* 9/5)+32;
    const output = document.getElementById("con");
    output.innerHTML=result;
}
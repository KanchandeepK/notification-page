var x = parseInt(document.querySelectorAll(".number")[0].innerHTML);
let arr = document.querySelectorAll(".background");
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
//     funtion() {
//         ele.style = "background-color: white;";
//         if(x>0){
//         x--;
//     document.querySelector(".number").innerHTML = x;}
//     else{
//         document.querySelector(".number").innerHTML=0;
//     }
// }
    arr[i].addEventListener("click", function () {
        ele.style = "background-color: white;"
        if (x > 0) {
            x--;
            document.querySelector(".number").innerHTML = x;
        } else {
            document.querySelector(".number").innerHTML=0;
        }
    });
}
let button=document.querySelector(".mark");
button.addEventListener("click",function(){
    document.querySelector(".number").innerHTML=0;
    document.querySelectorAll(".background")[0].style="background-color:white;"
    document.querySelectorAll(".background")[1].style="background-color:white;"
    document.querySelectorAll(".background")[2].style="background-color:white;"
})

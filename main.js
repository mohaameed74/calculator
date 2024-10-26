const display = document.getElementById('displaay');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const circle = document.querySelector(".before");
const body = document.querySelector("body");
const theme = document.getElementsByClassName("text")[0]



one.addEventListener('click',function(){
    body.classList.remove('active1')
    body.classList.remove('active2')
    circle.style.left = '4%'
   

})
two.addEventListener('click',function(){
    body.classList.add("active1");
    body.classList.remove("active2");
    circle.style.left = '36%';
})
three.addEventListener('click',function(){
   body.classList.add("active2");
   body.classList.remove("active1");
   circle.style.left = "72%";
})




function del(){
    display.value = display.value.slice(0, -1);
}
function reset(){
    display.value = '';
}
function equal() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }

}   



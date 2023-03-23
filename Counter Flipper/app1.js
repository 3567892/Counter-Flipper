let count =0;
const Buttons= document.querySelectorAll('.btn');
const timer = document.querySelector('.timer');

Buttons.forEach(function(button){
button.addEventListener('click',function(e){
    const diffControls = e.currentTarget.classList;
    if(diffControls.contains('increase')){
        count++;
    }
    else if (diffControls.contains('decrease')){
        count--;
    }
    else{
        count=0;
    }
    timer.textContent=count;

    if(count > 0){
        timer.style.color="green";
    }
    if(count<0){
        timer.style.color="red";
    }
    if(count===0){
        timer.style.color="black";
    }
});

});




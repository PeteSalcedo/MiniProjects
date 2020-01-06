let sec = 0;
let min = 0;
let hour = 0;

let timer_element = document.getElementById("timer");

let start_btn = document.getElementById("start")
let stop_btn = document.getElementById("stop")
let reset_btn = document.getElementById("reset")


start_btn.addEventListener("click",() =>{
    timer = setInterval(TimerHandler,1000)
    reset_btn.disabled = false;
})

stop_btn.addEventListener("click",() => {
    timer = clearInterval(timer)
    reset_btn.disabled = false;
})

reset_btn.addEventListener("click", () => {
    timer =  clearInterval(timer)
    sec = 0;
    min = 0;
    hour = 0;
    timer_element.innerHTML = "00:00:00"
})

function TimerHandler(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++
        }
    if(min == 60){
        min = 0;
        hour++;
    }
    displaytime();
}

function displaytime(){
    timer_element.innerHTML = hour+":"+ min +":" + sec;
}
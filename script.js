const clock = document.querySelector('.clock');

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    clock.style.fontSize = '45px';
    clock.style.padding = '10px';
    clock.style.fontWeight = '700';
},1000);
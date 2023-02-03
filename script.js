let counter = document.querySelector('#counter');
counter.style.color = 'rgb(0, 255, 0)';

let circleRed = document.querySelector('#circleRed');
circleRed.style.background = 'rgb(255, 120, 120)';
circleRed.style.transform = 'scale(1.0)';

let circleGreen = document.querySelector('#circleGreen');
circleGreen.style.background = 'rgb(0, 255, 0)';
circleGreen.style.boxShadow = '0px 0px 10px 1px rgb(0, 255, 191)';
circleGreen.style.transform = 'scale(1.1)';

let speedInterval = 100;
let timer = 30;
let colorID = 1;

function getLights(){

    colorID++;

    if(colorID === 1){

        circleGreen.style.background = 'rgb(0, 255, 0)';
        circleRed.style.background = 'rgb(255, 120, 120)';

        circleGreen.style.transition = '0.8s';
        circleRed.style.transition = '0.8s';

        circleGreen.style.boxShadow = '0px 0px 10px 1px rgb(0, 255, 191)';
        circleRed.style.boxShadow = 'none';

        circleGreen.style.transform = 'scale(1.1)';
        circleRed.style.transform = 'scale(1.0)';

        counter.style.color = 'rgb(0, 255, 0)';

        console.log('green');
    }else{

        colorID = 0;
        circleRed.style.background = 'rgb(255, 0, 0)';
        circleGreen.style.background = 'rgb(115, 255, 115)';

        circleGreen.style.transition = '0.8s';
        circleRed.style.transition = '0.8s';

        circleRed.style.boxShadow = '0px 0px 10px 1px rgb(255, 81, 0)';
        circleGreen.style.boxShadow = 'none';

        circleGreen.style.transform = 'scale(1.0)';
        circleRed.style.transform = 'scale(1.1)';

        counter.style.color = 'rgb(255, 0, 0)';

        console.log('red');
    }
}

function getCounter(){

    timer--;

    if(timer >= 0){

        counter.innerHTML = timer;
    }else{

        timer = 30;
        counter.innerHTML = timer;
        getLights();
    }
}

setInterval(getCounter, speedInterval);
const loadingNode = document.querySelector('.loading-text');
const bgNode = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadingNode.innerText = `${load}%`;
    loadingNode.style.opacity = scale(load, 0, 100, 1, 0);
    bgNode.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
function random(max) {
    return Math.floor(Math.random() * max);
}


function displayDVD(height, width) {

    // get the dvd logo
    const dvd = document.getElementById('dvd');

    // set initial position
    dvd.style.top = random(height) + 'px';
    dvd.style.left = random(width) + 'px';

    // set initial direction
    let xDirection = 1;
    let yDirection = 1;

    // set speed
    let speed = 1;

    // set the interval
    setInterval(() => {
        // get the current position
        let x = parseInt(dvd.style.left);
        let y = parseInt(dvd.style.top);

        // get the new position
        x += xDirection * speed;
        y += yDirection * speed;

        // check if the dvd hits the wall
        if (x + dvd.clientWidth > width || x < 0) {
            xDirection *= -1;
            dvd.style.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        }
        if (y + dvd.clientHeight > height || y < 0) {
            yDirection *= -1;
            dvd.style.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        }

        // set the new position
        dvd.style.left = x + 'px';
        dvd.style.top = y + 'px';
    }, 1000 / 60);



    console.log('height: ' + height + ' width: ' + width);
}


window.addEventListener("resize", () =>
    displayDVD(window.innerHeight, window.innerWidth)
);

window.addEventListener('DOMContentLoaded', function () {
    displayDVD(window.innerHeight, window.innerWidth);
});
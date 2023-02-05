let countUp = null;

window.addEventListener(`DOMContentLoaded`, (e) => {

    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 1);
    let end = new Date(now.getFullYear() + 1, 0, 1);
    let rate = (now - start) / (end - start);
    let rateText = Math.floor(rate * 1000) / 10;
    let tweetText = `https://twitter.com/share?url=${window.location.href}&text=${now.getFullYear()}年は、${rateText}%経過しました。`;

    document.querySelector(`title`).textContent = `${now.getFullYear()} - This Year`;
    document.querySelector(`.tweet`).setAttribute(`href`, encodeURI(tweetText));

    let countRate = 0;
    countUp = setInterval(() => {

        let angle = 360 * countRate / 1000;
        let oversemicircle = (countRate > 500) ? 1 : 0
        let endX = 50 + 45 * Math.sin(angle * (Math.PI / 180));
        let endY = 50 - 45 * Math.cos(angle * (Math.PI / 180));

        document.querySelector(`svg > path`).setAttribute(`d`, `M 50,5 A 45 45 -90 ${oversemicircle} 1 ${endX},${endY}`);

        let percentRate = (countRate / 10).toFixed(1);

        document.querySelector(`.rate`).textContent = `${percentRate}%`;
        countRate++;

        if (countRate > rate * 1000) {
            clearInterval(countUp);
        }
    }, 5);
});

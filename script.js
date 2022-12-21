/* turnPage after 2.5 seconds after the page has loaded */
setTimeout(turnPage, 2500);
function turnPage() {
    document.querySelector('.front').classList.add('rotate-front');
    document.querySelector('.back').classList.add('rotate-back');
    document.querySelector('.page').classList.add('rotate-page');
}
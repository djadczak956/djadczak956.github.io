/* turnPage after 2.5 seconds after the page has loaded */
//setTimeout(turnPage, 2500);
function turnPage() {
    if (!document.getElementById('thing').classList.contains('rotate-back')) {
        document.querySelector('.front').classList.add('rotate-front');
        document.querySelector('.back').classList.add('rotate-back');
        document.querySelector('.page').classList.add('rotate-page');
    } else {
        document.querySelector('.front').classList.remove('rotate-front');
        document.querySelector('.back').classList.remove('rotate-back');
        document.querySelector('.page').classList.remove('rotate-page');
    }
}


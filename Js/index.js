// execute a event listner just after the page loads
window.dispatchEvent(new Event('resize'));
const bfrbutton = document.getElementById('navbarNav');
// add event listener to window to toggle classes on resize
window.addEventListener('resize', () => {
    // add classes bfr
    if (window.innerWidth > 768) {
        bfrbutton.classList.add('d-flex');
        bfrbutton.classList.add('justify-content-end');
    } else {
        bfrbutton.classList.remove('d-flex');
        bfrbutton.classList.remove('justify-content-end');
    }
});

document.querySelector('#btn-open-nav-menu').addEventListener('click', e => {
    document.querySelector('#nav-menu').classList.add('nav-menu--show');
});
document.querySelector('#btn-close-nav-menu').addEventListener('click', e => {
    document.querySelector('#nav-menu').classList.remove('nav-menu--show');
});


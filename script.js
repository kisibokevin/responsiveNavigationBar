document.addEventListener('DOMContentLoaded', () => {
    function openCloseMenu() {
        const menu = document.querySelector('#nav');
        const link = document.querySelectorAll('.nav__link');
        const menuIcon = document.querySelector('.ri-menu-line');
        const closeIcon = document.querySelector('.ri-close-line');


        menuIcon.addEventListener('click', () => {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            menu.style.display = 'block';
        });

        link.forEach(item => {
            item.addEventListener('click', () => {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                menu.style.display = 'none';
            });
        });

        closeIcon.addEventListener('click', () => {
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'block';
            menu.style.display = 'none';
        });
    }

    openCloseMenu();
});
function openMobileNav() {
    document.querySelector('.mobile-menu-background').style.width = '100vw';
    document.querySelector('#mobile-nav').style.width = '60%';
}

const openBtn = document.querySelector('.mobile-menu-btn');
openBtn.addEventListener("click", openMobileNav);

function closeMobileNav() {
    document.querySelector('.mobile-menu-background').style.width = '0';
    document.querySelector('#mobile-nav').style.width = '0';
}

const closeBtn = document.querySelector('.mobile-menu-btn-close');
closeBtn.addEventListener("click", closeMobileNav);
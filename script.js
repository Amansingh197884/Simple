document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('customNavbar');
    const openMenuBtn = document.getElementById('openMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const navSlideDrawer = document.getElementById('navSlideDrawer');
    const propToggle = document.getElementById('propToggle');
    const propSubMenu = document.getElementById('propSubMenu');
    const propertyMenuParent = document.getElementById('propertyMenuParent');
    const dropdownArrow = document.querySelector('.dropdown-arrow');

    const topBarHeight = 45;

    window.addEventListener('scroll', () => {
        if (window.scrollY > topBarHeight) {
            navbar.classList.add('is-sticky');
        } else {
            navbar.classList.remove('is-sticky');
        }
    });

    function openDrawer() {
        navSlideDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        navSlideDrawer.classList.remove('is-open');
        document.body.style.overflow = 'auto';
    }

    if (openMenuBtn) openMenuBtn.addEventListener('click', openDrawer);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    if (propToggle && propSubMenu) {
        propToggle.addEventListener('click', () => {
            propSubMenu.classList.toggle('active');
            if (dropdownArrow) dropdownArrow.classList.toggle('rotated');
        });
    }

    if (propertyMenuParent && propSubMenu) {
        propertyMenuParent.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 768) {
                propSubMenu.classList.add('active');
                if (dropdownArrow) dropdownArrow.classList.add('rotated');
            }
        });
        propertyMenuParent.addEventListener('mouseleave', () => {
            if (window.innerWidth >= 768) {
                propSubMenu.classList.remove('active');
                if (dropdownArrow) dropdownArrow.classList.remove('rotated');
            }
        });
    }

    document.querySelectorAll('.drawer-links a:not(.has-dropdown a)').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

});
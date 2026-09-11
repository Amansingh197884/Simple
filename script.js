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

// form js 
var countries = [
    { name: "India", code: "+91", iso: "in" },
    { name: "United Arab Emirates", code: "+971", iso: "ae" },
    { name: "United States", code: "+1", iso: "us" },
    { name: "United Kingdom", code: "+44", iso: "gb" },
    { name: "Saudi Arabia", code: "+966", iso: "sa" },
    { name: "Canada", code: "+1", iso: "ca" },
    { name: "Australia", code: "+61", iso: "au" },
    { name: "Singapore", code: "+65", iso: "sg" },
    { name: "Qatar", code: "+974", iso: "qa" },
    { name: "Kuwait", code: "+965", iso: "kw" },
    { name: "Oman", code: "+968", iso: "om" },
    { name: "Germany", code: "+49", iso: "de" },
    { name: "France", code: "+33", iso: "fr" },
    { name: "Afghanistan", code: "+93", iso: "af" },
    { name: "Albania", code: "+355", iso: "al" },
    { name: "Algeria", code: "+213", iso: "dz" }
];

var countryBtn = document.getElementById("countryPickerBtn");
var countryDropdown = document.getElementById("countryDropdown");
var countryList = document.getElementById("countryList");
var searchInput = document.getElementById("countrySearchInput");
var flagImg = document.getElementById("selectedFlagImg");
var codeTxt = document.getElementById("selectedCode");
var myForm = document.getElementById("findEstateForm");

function showCountries(data) {
    if (!countryList) return;
    countryList.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var country = data[i];

        var li = document.createElement("li");
        li.innerHTML = '<img src="https://flagcdn.com/w40/' + country.iso + '.png" alt="' + country.name + '"> ' +
            '<span>' + country.name + '</span> ' +
            '<span class="item-code">' + country.code + '</span>';

        li.onclick = (function (c) {
            return function () {
                flagImg.src = "https://flagcdn.com/w40/" + c.iso + ".png";
                flagImg.alt = c.name;
                codeTxt.innerText = c.code;

                countryDropdown.classList.remove("show");
                countryBtn.classList.remove("active");
            };
        })(country);

        countryList.appendChild(li);
    }
}

showCountries(countries);

if (countryBtn) {
    countryBtn.onclick = function (e) {
        e.stopPropagation();
        countryDropdown.classList.toggle("show");
        countryBtn.classList.toggle("active");

        if (searchInput) {
            searchInput.focus();
        }
    };
}

if (searchInput) {
    searchInput.onkeyup = function () {
        var text = searchInput.value.toLowerCase();
        var matched = [];

        for (var i = 0; i < countries.length; i++) {
            var name = countries[i].name.toLowerCase();
            var code = countries[i].code.toLowerCase();

            if (name.indexOf(text) > -1 || code.indexOf(text) > -1) {
                matched.push(countries[i]);
            }
        }

        showCountries(matched);
    };
}

document.onclick = function (e) {
    if (countryDropdown && !countryDropdown.contains(e.target) && e.target !== countryBtn) {
        countryDropdown.classList.remove("show");
        if (countryBtn) {
            countryBtn.classList.remove("active");
        }
    }
};

if (myForm) {
    myForm.onsubmit = function (e) {
        e.preventDefault();
        var submitBtn = myForm.querySelector("button[type='submit'] span");
        submitBtn.innerText = "SUBMITTING...";

        setTimeout(function () {
            alert("Thank you! Your enquiry has been received. Our team will get back to you shortly.");
            myForm.reset();
            submitBtn.innerText = "SUBMIT";
        }, 800);
    };
}

// swiper 
var propertySwiper = new Swiper('.propertyTypeSwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 800,
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 28
        }
    }
});

// nww slider 
var projectsSwiper = new Swiper('.projectsGridSwiper', {
    slidesPerView: 1,
    grid: {
        rows: 2,
        fill: 'row'
    },
    spaceBetween: 20,
    speed: 800,
    grabCursor: true,
    navigation: {
        nextEl: '.next-project-btn',
        prevEl: '.prev-project-btn',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: 'row'
            },
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: 'row'
            },
            spaceBetween: 24
        }
    }
});
// new 
var propertySwiper = new Swiper('.propertyTypeSwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 800,
    grabCursor: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 26
        }
    }
});
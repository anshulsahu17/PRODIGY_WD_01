/* ==============================
   ELEMENTS
============================== */

const navbar =
    document.getElementById("navbar");

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

const overlay =
    document.getElementById("overlay");

const mobileServices =
    document.getElementById("mobileServices");


/* ==============================
   NAVBAR SCROLL EFFECT
============================== */

function handleScroll() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
);


/* ==============================
   MOBILE MENU
============================== */

function openMenu() {

    mobileMenu.classList.add("open");

    overlay.classList.add("active");

    menuToggle.classList.add("active");

    document.body.classList.add("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close menu"
    );
}


function closeMenu() {

    mobileMenu.classList.remove("open");

    overlay.classList.remove("active");

    menuToggle.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open menu"
    );
}


menuToggle.addEventListener(
    "click",
    () => {

        if (
            mobileMenu.classList.contains("open")
        ) {

            closeMenu();

        } else {

            openMenu();

        }

    }
);


/* ==============================
   OVERLAY CLICK
============================== */

overlay.addEventListener(
    "click",
    closeMenu
);


/* ==============================
   MOBILE SERVICES DROPDOWN
============================== */

mobileServices.addEventListener(
    "click",
    () => {

        const submenu =
            mobileServices.nextElementSibling;

        submenu.classList.toggle("open");

    }
);


/* ==============================
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
============================== */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


/* ==============================
   ACTIVE NAVIGATION
============================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const desktopLinks =
    document.querySelectorAll(
        ".nav-link"
    );

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu ul a"
    );


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.id;

        }

    });


    desktopLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        link.classList.toggle(
            "active",
            href === "#" + currentSection
        );

    });


    mobileLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        link.classList.toggle(
            "active",
            href === "#" + currentSection
        );

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink,
    { passive: true }
);


/* ==============================
   ESCAPE KEY
============================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeMenu();

        }

    }
);


/* ==============================
   INITIALIZE
============================== */

handleScroll();

updateActiveLink();
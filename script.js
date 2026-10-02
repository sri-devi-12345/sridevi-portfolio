/* =========================================
   COSMIC FAIRY EYES
========================================= */

const eyes = document.querySelectorAll(".eye");

document.addEventListener("mousemove", (event) => {

    eyes.forEach((eye) => {

        const pupil = eye.querySelector(".pupil");

        const rect = eye.getBoundingClientRect();

        const eyeCenterX =
            rect.left + rect.width / 2;

        const eyeCenterY =
            rect.top + rect.height / 2;


        const dx =
            event.clientX - eyeCenterX;

        const dy =
            event.clientY - eyeCenterY;


        const angle =
            Math.atan2(dy, dx);


        const distance =
            Math.min(
                Math.sqrt(dx * dx + dy * dy) / 25,
                7
            );


        const moveX =
            Math.cos(angle) * distance;

        const moveY =
            Math.sin(angle) * distance;


        pupil.style.transform =
            `translate(
                calc(-50% + ${moveX}px),
                calc(-50% + ${moveY}px)
            )`;

    });

});


/* =========================================
   FAIRY FOLLOWS CURSOR SLIGHTLY
========================================= */

const fairy =
    document.getElementById("fairyCharacter");

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);


    const moveX = x * 18;
    const moveY = y * 10;

    fairy.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-card, .skill-card, .journey-item, .project-card, .korea-box, .goal-card, .contact-card"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   FAIRY EYES RESET WHEN MOUSE LEAVES
========================================= */

document.addEventListener("mouseleave", () => {

    eyes.forEach((eye) => {

        const pupil =
            eye.querySelector(".pupil");

        pupil.style.transform =
            "translate(-50%, -50%)";

    });

    fairy.style.transform =
        "translate(0, 0)";

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "🌙 Welcome to Sri Devi's cosmic portfolio ✨"
);

console.log(
    "🧚‍♀️ The moon fairy is watching your cursor!"
);
const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("click", function(event) {

        // Don't interfere with the GitHub link
        if (event.target.closest("a")) {
            return;
        }

        card.classList.remove("clicked");

        // Restart animation
        void card.offsetWidth;

        card.classList.add("clicked");

    });

});
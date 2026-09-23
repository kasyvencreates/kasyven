/* =========================================================
   KASYVEN
   Clarity creates credibility.
   Global JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       MOBILE NAVIGATION
    ----------------------------------------------------- */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", () => {

            const isOpen = document.body.classList.toggle("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        mainNav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                document.body.classList.remove("menu-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* -----------------------------------------------------
       ACTIVE NAVIGATION LINK
    ----------------------------------------------------- */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".main-nav a").forEach((link) => {

        const linkPage =
            link.getAttribute("href")?.split("/").pop();

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }

    });


    /* -----------------------------------------------------
       REVEAL ON SCROLL
    ----------------------------------------------------- */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    }


    /* -----------------------------------------------------
       SMOOTH INTERNAL LINKS
    ----------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* -----------------------------------------------------
       CURRENT YEAR
    ----------------------------------------------------- */

    document.querySelectorAll("[data-year]").forEach((element) => {

        element.textContent =
            new Date().getFullYear();

    });

});
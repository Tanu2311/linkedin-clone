// ================= THEME =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ================= CONNECT BUTTON =================

const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", function () {

    if (connectBtn.classList.contains("connected")) {

        connectBtn.innerHTML =
            '<i class="fa-solid fa-user-plus"></i> Connect';

        connectBtn.classList.remove("connected");

    } else {

        connectBtn.innerHTML =
            '<i class="fa-solid fa-check"></i> Connected';

        connectBtn.classList.add("connected");

    }

});


// ================= LIKE BUTTON =================

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const icon = button.querySelector("i");
        const count = button.querySelector("span");

        let number = parseInt(count.innerText);

        if (button.classList.contains("liked")) {

            number--;

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            button.classList.remove("liked");

        } else {

            number++;

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            button.classList.add("liked");

        }

        count.innerText = number;

    });

});


// ================= PROJECT MODAL =================

function showProject(projectName) {

    document.getElementById("modalTitle").innerText = projectName;

    document.getElementById("projectModal")
        .classList.add("show");

}

function closeProject() {

    document.getElementById("projectModal")
        .classList.remove("show");

}


// Close modal by clicking outside

document.getElementById("projectModal")
    .addEventListener("click", function(e) {

        if (e.target === this) {

            closeProject();

        }

    });


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").innerText =
        "Thanks " + name + "! Your message has been received 🚀";

    form.reset();

});


// ================= SEARCH =================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const searchText =
        searchInput.value.toLowerCase();

    const sections =
        document.querySelectorAll(".card");

    sections.forEach(function(section) {

        const text =
            section.innerText.toLowerCase();

        if (text.includes(searchText)) {

            section.style.display = "";

        } else {

            section.style.display = "none";

        }

    });

});


// ================= SCROLL ANIMATION =================

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function(element) {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
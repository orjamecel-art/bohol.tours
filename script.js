/* =========================
   PACKAGE MODAL
========================= */

const packageModal =
    document.getElementById("packageModal");

const packageSections = [
    document.getElementById("countrysidePackage"),
    document.getElementById("islandPackage"),
    document.getElementById("panglaoPackage")
];


function openPackage(packageName) {

    packageSections.forEach(section => {

        section.classList.remove("active");

    });


    if (packageName === "countryside") {

        document
            .getElementById("countrysidePackage")
            .classList.add("active");

    }


    if (packageName === "island") {

        document
            .getElementById("islandPackage")
            .classList.add("active");

    }


    if (packageName === "panglao") {

        document
            .getElementById("panglaoPackage")
            .classList.add("active");

    }


    packageModal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE PACKAGE
========================= */

function closePackage() {

    packageModal.classList.remove("show");

    document.body.style.overflow = "auto";
}


/* =========================
   CLICK OUTSIDE MODAL
========================= */

packageModal.addEventListener("click", function(event) {

    if (event.target === packageModal) {

        closePackage();

    }

});


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePackage();

    }

});


/* =========================
   BOOK TOUR BUTTON
========================= */

function bookTour(tourName) {

    const tourSelect =
        document.getElementById("tour");

    tourSelect.value = tourName;

    closePackage();

    document
        .getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   BOOKING FORM
========================= */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const tour =
        document.getElementById("tour").value;

    const date =
        document.getElementById("date").value;

    const guests =
        document.getElementById("guests").value;

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const pickup =
        document.getElementById("pickup").value;

    const message =
        document.getElementById("message").value;


    if (!tour || !date || !name || !email || !phone) {

        alert(
            "Please complete all required fields."
        );

        return;

    }


    alert(
        "Thank you, " +
        name +
        "!\n\n" +
        "Your booking request for " +
        tour +
        " on " +
        date +
        " has been received.\n\n" +
        "We will contact you through your email or phone to confirm your booking."
    );


    console.log({

        tour: tour,

        date: date,

        guests: guests,

        name: name,

        email: email,

        phone: phone,

        pickup: pickup,

        message: message

    });


    bookingForm.reset();

});
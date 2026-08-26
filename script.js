// OPEN MODAL
function openPackage(packageType) {
    const modal = document.getElementById('packageModal');
    const details = document.querySelectorAll('.package-details');

    // Hide all package details first
    details.forEach(detail => {
        detail.style.display = 'none';
    });

    // Show selected package
    if (packageType === 'countryside') {
        document.getElementById('countrysidePackage').style.display = 'block';
    } else if (packageType === 'island') {
        document.getElementById('islandPackage').style.display = 'block';
    } else if (packageType === 'panglao') {
        document.getElementById('panglaoPackage').style.display = 'block';
    }

    modal.style.display = 'flex';
}

// CLOSE MODAL
function closePackage() {
    document.getElementById('packageModal').style.display = 'none';
}

// BOOK BUTTON INSIDE MODAL
function bookTour(tourName) {
    closePackage();
    const tourSelect = document.getElementById('tour');
    if (tourSelect) {
        tourSelect.value = tourName;
    }
    window.location.href = '#booking';
}

// FORM SUBMISSION
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for booking! We will get back to you shortly.');
    this.reset();
});

// CLOSE MODAL ON CLICK OUTSIDE
window.onclick = function (event) {
    const modal = document.getElementById('packageModal');
    if (event.target === modal) {
        closePackage();
    }
};

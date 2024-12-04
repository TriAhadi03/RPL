// Mengatur langkah-langkah form
const steps = document.querySelectorAll('.form-step');
const nextButtons = document.querySelectorAll('.next');

let currentStep = 0;

// Fungsi untuk berpindah langkah
function showStep(step) {
    steps.forEach((stepEl, index) => {
        stepEl.classList.toggle('active', index === step);
    });
}

// Event Listener untuk tombol Selanjutnya
nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentStep = index + 1;
        showStep(currentStep);
    });
});

// Menampilkan langkah pertama saat halaman dimuat
showStep(currentStep);

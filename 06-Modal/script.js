'use strict';

// Select the modal element
const modal = document.querySelector('.modal');
// Select the overlay element
const overlay = document.querySelector('.overlay');
// Select the button that closes the modal
const btnCloseModal = document.querySelector('.close-modal');
// Select all buttons that open the modal
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal by removing the 'hidden' class
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close the modal by adding the 'hidden' class
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add click event listeners to all buttons that open the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Add click event listener to the button that closes the modal
btnCloseModal.addEventListener('click', closeModal);
// Add click event listener to the overlay to close the modal when overlay is clicked
overlay.addEventListener('click', closeModal);

// Add event listener to the document to close the modal when 'Escape' key is pressed
document.addEventListener('keydown', function (e) {
  // If the Escape key is pressed and the modal is not hidden, close the modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

'use strict';

var hamburgerBtn = document.getElementById('menuToggle');
var sidebar = document.getElementById('sidebar');

hamburgerBtn.addEventListener("click", function() {
sidebar.classList.toggle('active');
});

//close modal by removing the show class from overlay
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
};

//closes the modal via closing buttons with class js - quit-modal
document.querySelectorAll('#overlay .js--enter-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

//modal closure after clicking on the overlay background
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  };
});

//closes the modal by clicking the Escape button on the keyboard
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  };
});

//opening of modals
//Login
// var btnLoginModal = document.getElementById('userName');

// var showLoginModal = function openModal(modal) {
// 	console.log(modal);
//   document.querySelectorAll('#overlay > *').forEach(function(modal) {
//     loginModal.classList.remove('show');
//   });
//   document.querySelector('#overlay').classList.add('show');
//   document.getElementById('loginModal').classList.add('show');
  
// };

// btnLoginModal.addEventListener('click', showLoginModal);

//Quit
var btnQuitModal = document.getElementById('quit');

var showQuitModal = function openModal(modal) {
	console.log(modal);
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    quitModal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.getElementById('quitModal').classList.add('show');
  
};

btnQuitModal.addEventListener('click', showQuitModal);


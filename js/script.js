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
var btnLoginModal = document.getElementById('userName');

var showLoginModal = function openModal(modal) {
	console.log(modal);
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.getElementById('loginModal').classList.add('show');
  
};

btnLoginModal.addEventListener('click', showLoginModal);

//Quit
var btnQuitModal = document.getElementById('quit');

var showQuitModal = function openModal(modal) {
	console.log(modal);
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.getElementById('quitModal').classList.add('show');
  
};

btnQuitModal.addEventListener('click', showQuitModal);

//Chart

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Earnings chart',
            position: 'top',
            fontSize: 20
        }
        // legend: {
        //     display: true,
        //     labels: {
        //         fontSize: 20
        //     }
        // }
    }
});

//

// var bookmarks = document.getElementById('bookmarks');

// bookmarks.forEach(function(item, index) {
//   var bookmarksLinks = document.getElementById('bookmarksLinks');
//   bookmarksLinks.addListener('click', function() {
//     var titleSection = document.getElementById('h1');
//   }
// });
var hamburgerBtn = document.getElementById('menuToggle');
var sidebar = document.getElementById('sidebar');

hamburgerBtn.addEventListener("click", function() {
sidebar.classList.toggle('active');
})
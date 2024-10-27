// Mengubah Warna Background
const bgColorPicker = document.getElementById('bgColor');
bgColorPicker.addEventListener('input', function() {
  document.body.style.backgroundColor = bgColor.value;
});

// Mengubah ukuran font pada elemen tertentu (menghindari glitch)
const fontSizeSlider = document.getElementById('fontSize');
fontSizeSlider.addEventListener('input', function() {
  document.documentElement.style.fontSize = fontSizeSlider.value + 'px';
});

// Mode Gelap
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Mengubah style font
const fontStyleSelect = document.getElementById('fontStyle');
fontStyleSelect.addEventListener('change', function() {
  document.body.style.fontFamily = fontStyleSelect.value;
});
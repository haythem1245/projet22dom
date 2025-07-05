document.addEventListener('DOMContentLoaded', function () {
  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');

  function getRandomColor() {
    const lettres = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
      couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
  }

  changeColorBtn.addEventListener('click', function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});

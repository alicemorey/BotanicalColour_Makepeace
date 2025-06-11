const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalRecipe = document.getElementById('modal-recipe');

const data = {
  madder: {
    img: 'madderdrawing.jpeg',
    recipe: 'Boil madder root for 30 minutes. Add fabric and simmer for 1 hour.'
  },
  indigo: {
    img: 'indigo-drawing.svg',
    recipe: 'Soak leaves in water for 24h. Add lime and reduce for color release.'
  }
};

function openModal(swatch) {
  modal.style.display = 'flex';
  modalImg.src = data[swatch].img;
  modalRecipe.textContent = data[swatch].recipe;
}

function closeModal() {
  modal.style.display = 'none';
  modalImg.src = '';
  modalRecipe.textContent = '';
}

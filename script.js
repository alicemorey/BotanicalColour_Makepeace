// Get modal elements
const drawingModal = document.getElementById('drawing-modal');
const recipeModal = document.getElementById('recipe-modal');
const modalImg = document.getElementById('modal-img');
const modalRecipe = document.getElementById('modal-recipe');

// Swatch data
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

// Open both modals
function openModal(swatch) {
  modalImg.src = data[swatch].img;
  modalRecipe.textContent = data[swatch].recipe;

  drawingModal.style.display = 'flex';
  recipeModal.style.display = 'flex';
}

// Close both modals
function closeModal() {
  drawingModal.style.display = 'none';
  recipeModal.style.display = 'none';

  modalImg.src = '';
  modalRecipe.textContent = '';
}


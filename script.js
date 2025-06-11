// Get modal elements
const drawingModal = document.getElementById('drawing-modal');
const recipeModal = document.getElementById('recipe-modal');
const modalImg = document.getElementById('modal-img');
const modalRecipe = document.getElementById('modal-recipe');

// Swatch data
const data = {
  madder: {
    img: 'img/drawings/madderdrawing.jpeg',
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
  drawingModal.classList.remove('show');
  recipeModal.classList.remove('show');

  // Animate in: first drawing, then recipe
  setTimeout(() => {
    drawingModal.classList.add('show');
  }, 50); // slight delay for CSS to trigger

  setTimeout(() => {
    recipeModal.classList.add('show');
  }, 400); // appear after drawing
}

function closeModal() {
    drawingModal.classList.remove('show');
    recipeModal.classList.remove('show');
  
    // Hide after animation
    setTimeout(() => {
      drawingModal.style.display = 'none';
      recipeModal.style.display = 'none';
      modalImg.src = '';
      modalRecipe.textContent = '';
    }, 300); // match the transition time
  }


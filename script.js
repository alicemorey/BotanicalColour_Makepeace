// Get modal elements
const drawingModal = document.getElementById('drawing-modal');
const recipeModal = document.getElementById('recipe-modal');
const modalImg = document.getElementById('modal-img');
const modalRecipe = document.getElementById('modal-recipe');

// Swatch data
const data = {
  indigo: {
    img: 'img/Indigofera_tinctoria0 copy.png',
    recipe: `Indigo is one of the oldest and most revered natural dyes,`+
    'derived from the leaves of indigo-bearing plants such as Indigofera '+
    'tinctoria. This recipe follows a traditional, environmentally friendly fermentation method.'+
    '\n\nMaterials Needed:\n- Dried indigo leaves or natural indigo pigment (50g)'+
    '\n- Fructose sugar or mashed bananas (25g)\n- Calcium hydroxide / lime (25g)\n- Warm water (~40°C)'+
    '\n- Non-metal container\n- Long spoon or stick\n- Natural fiber cloth (pre-washed)'+
    '\n\nStep-by-Step Process:\n1. Fill the container with warm water.\n2. Stir in the indigo pigment.'+
    '\n3. Add fructose gently to begin the reduction.\n4. Stir in lime slowly to raise the pH.'+
    '\n5. Cover and rest the vat in a warm place.\n6. Once a coppery film forms,'+ 
    'submerge fabric for 3–10 mins.\n7. Remove fabric and let oxidize to blue.'+
    '\n\nThe vat can be maintained by keeping it warm and occasionally feeding it sugar and lime.'+
    'Indigo dyeing is a slow, beautiful process that connects us with ancient tradition and' +
    'the rhythm of natural color transformation.'
  },

  madder: {
    img: 'indigo-drawing.svg',
    recipe: 'Soak leaves in water for 24h. Add lime and reduce for color release.'
  }
};

// Open modals with content
function openModal(swatch) {
  const swatchData = data[swatch];

  if (!swatchData) {
    console.warn(`No data found for swatch: ${swatch}`);
    return;
  }

  // Handle missing image
  if (swatchData.img) {
    modalImg.src = swatchData.img;
    modalImg.style.display = 'block';
  } else {
    modalImg.src = '';
    modalImg.style.display = 'none';
  }

  // Handle missing recipe
  modalRecipe.textContent = swatchData.recipe || 'No recipe available for this dye.';

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


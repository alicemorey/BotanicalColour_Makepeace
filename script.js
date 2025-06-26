// Track currently open swatch
let currentSwatch = null;

// Get modal elements
const drawingModal = document.getElementById('drawing-modal');
const recipeModal = document.getElementById('recipe-modal');
const modalImg = document.getElementById('modal-img');
const modalRecipe = document.getElementById('modal-recipe');

// Swatch data
const data = {
    indigo: {
      img: 'img/Indigofera_tinctoria0 copy.png',
      recipeKey: 'dye.indigo.recipe'
    },
    madder: {
      img: 'indigo-drawing.svg',
      recipeKey: 'dye.madder.recipe'
    }
  };

// Open modals with content
function openModal(swatch) {
  currentSwatch = swatch; 

  const swatchData = data[swatch];

  if (!swatchData) {
    console.warn(`No data found for swatch: ${swatch}`);
    return;
  }

  const lang = localStorage.getItem("lang") || "en";
  const recipeText = translations[lang]?.[swatchData.recipeKey] || 'Recipe not available';

  // Handle missing image
  if (swatchData.img) {
    modalImg.src = swatchData.img;
    modalImg.style.display = 'block';
  } else {
    modalImg.src = '';
    modalImg.style.display = 'none';
  }

  // Recipe (translated)
  modalRecipe.textContent = recipeText;

  // modals with animation
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
      currentSwatch = null; // clear it
    }, 300); // match the transition time
  }


  const translations = {
    en: {
      "header.title": "BOTANICAL COLOUR * A REDPATH WAY",
      "header.subtitle": "A living archive of plant dyes —",
      "header.link": "read more about the project",
  
      "about.title": "ABOUT",
      "about.intro": "Botanical Colour is a community-rooted project exploring the magic of natural dyeing through plants, art, and shared knowledge.",
      "about.description": "This archive and project is led by Makepeace Studio and collaborators to honour the living traditions of plant-based colour, seasonal rhythms, and slow making.",
      "about.swatches": "Each swatch represents a plant dye from Margaret & David Redpaths archive, click them to discover artwork, recipes, and workshop memories.",
      "about.invite": "Have something to share? Get in touch or join a workshop.",
      "about.back": "← Back to Swatches",

    "dye.indigo.recipe": `Indigo is one of the oldest and most revered natural dyes, derived from the leaves of indigo-bearing plants such as Indigofera tinctoria. This recipe follows a traditional, environmentally friendly fermentation method.

    Materials Needed:
    - Dried indigo leaves or natural indigo pigment (50g)
    - Fructose sugar or mashed bananas (25g)
    - Calcium hydroxide / lime (25g)
    - Warm water (~40°C)
    - Non-metal container
    - Long spoon or stick
    - Natural fiber cloth (pre-washed)

    Step-by-Step Process:
    1. Fill the container with warm water.
    2. Stir in the indigo pigment.
    3. Add fructose gently to begin the reduction.
    4. Stir in lime slowly to raise the pH.
    5. Cover and rest the vat in a warm place.
    6. Once a coppery film forms, submerge fabric for 3–10 mins.
    7. Remove fabric and let oxidize to blue.

    The vat can be maintained by keeping it warm and occasionally feeding it sugar and lime. Indigo dyeing is a slow, beautiful process that connects us with ancient tradition and the rhythm of natural color transformation.`,

    "dye.madder.recipe": `Soak leaves in water for 24h. Add lime and reduce for color release.`,
  
  "footer.archive": "Visit the Workshop Archive →",
    "footer.gallery": "Gallery →"
  },

  
    cy: {
      "header.title": "LLIWIENAU PLANHIGION * DULL REDPATH",
      "header.subtitle": "Archif fyw o liwiau naturiol —",
      "header.link": "darllen mwy am y prosiect",
  
      "about.title": "AMDANOM",
      "about.intro": "Mae Lliw Planhigion yn brosiect cymunedol sy’n archwilio hud lliwiau naturiol drwy blanhigion, celf, a gwybodaeth rannu.",
      "about.description": "Mae’r archif a’r prosiect hwn yn cael ei arwain gan Makepeace Studio a chydweithwyr i anrhydeddu traddodiadau byw lliwiau planhigion, rhythmau tymhorol, a gwneud araf.",
      "about.swatches": "Mae pob sampl lliw yn cynrychioli lliw planhigyn o archif Margaret a David Redpath – cliciwch i ddarganfod gwaith celf, ryseitiau, a chofnodion gweithdai.",
      "about.invite": "Oes gennych chi rywbeth i’w rannu? Cysylltwch neu ymunwch â gweithdy.",
      "about.back": "← Yn ôl i'r Samplau",

      "dye.indigo.recipe": `Mae Indigo ymhlith y lliwiau naturiol hynaf ac mwyaf parchus, wedi'i ddarganfod o ddail planhigion indigo fel Indigofera tinctoria. Mae'r rysáit hon yn dilyn dull eplesu traddodiadol sy’n gyfeillgar i'r amgylchedd.

Deunyddiau Angenrheidiol:
- Dail indigo sych neu bowdr indigo naturiol (50g)
- Siwgr ffrwctos neu fananas wedi’u mashio (25g)
- Calch neu galsiwm hydrocsid (25g)
- Dŵr cynnes (~40°C)
- Cynhwysydd di-fetel
- Ffon neu lwy hir
- Lliain ffibr naturiol (wedi’i olchi ymlaen llaw)

Camau Gweithredu:
1. Llenwch y cynhwysydd â dŵr cynnes.
2. Ychwanegwch y powdr indigo a’i gymysgu.
3. Ychwanegwch siwgr yn ysgafn i ddechrau'r lleihad.
4. Ychwanegwch y calch yn araf i godi’r pH.
5. Gorchuddiwch a gadewch mewn man cynnes.
6. Pan welwch haen gopr ar y wyneb, socian y ffabrig am 3–10 munud.
7. Tynnwch y ffabrig a gadewch iddo ocsidio i lasu.

Gellir cynnal y vat drwy ei gadw'n gynnes a rhoi siwgr a chalch yn achlysurol. Mae lliwio ag indigo yn broses araf, hardd sy’n cysylltu â thraddodiad hynafol a rhythm lliw naturiol.`,

    "dye.madder.recipe": `Socian y dail mewn dŵr am 24 awr. Ychwanegwch galch a lleihau ar gyfer rhyddhau lliw.`,

    "footer.archive": "Ewch i Archif y Gweithdai →",
    "footer.gallery": "Oriel →"
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = translations[lang] && translations[lang][key];
      if (translation) el.textContent = translation;
    });

    // 🔁 Update modal if open
  if (currentSwatch && drawingModal.style.display === 'flex') {
    const swatchData = data[currentSwatch];
    const recipeText = translations[lang]?.[swatchData.recipeKey] || 'Recipe not available';
    modalRecipe.textContent = recipeText;
  }
}
  
  // Load saved language on page load
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
  });
  

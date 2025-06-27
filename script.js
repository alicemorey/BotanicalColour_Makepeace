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
      recipeKey: 'dye.indigo.recipe',
      swatchImg: 'img/swatches/indigo.webp',
      archiveSectionId: 'indigo'
    },
    madder: {
      img: 'img/madder-drawing.png',
      recipeKey: 'dye.madder.recipe',
      swatchImg: 'img/swatches/madder.webp',
      archiveSectionId: 'madder'
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

   // Set drawing image if it exists
   if (swatchData.img) {
    modalImg.src = swatchData.img;
    modalImg.style.display = 'block';
  } else {
    modalImg.src = '';
    modalImg.style.display = 'none';
  }

  // Modal recipe content with swatch link
  modalRecipe.innerHTML = `
    <div class="recipe-text">
      ${recipeText.replace(/\n/g, '<br>')}
    </div>
    <div class="modal-swatch-link">
      <a href="archive.html#${swatchData.archiveSectionId}" title="See workshop for ${swatch}" target="_blank">
        <img 
          src="${swatchData.swatchImg}" 
          alt="${swatch} swatch" 
          class="modal-swatch-thumbnail"
        />
      </a>
      <p class="modal-swatch-caption">Explore the ${swatch} workshop →</p>
    </div>
  `;

  // Show modals with animation
  drawingModal.style.display = 'flex';
  recipeModal.style.display = 'flex';
  drawingModal.classList.remove('show');
  recipeModal.classList.remove('show');

  setTimeout(() => {
    drawingModal.classList.add('show');
  }, 50);

  setTimeout(() => {
    recipeModal.classList.add('show');
  }, 400);
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

    "dye.indigo.recipe": `
<p><strong>Indigo</strong> is one of the oldest and most revered natural dyes, derived from the leaves of indigo-bearing plants such as <em>Indigofera tinctoria</em>. This recipe follows a traditional, environmentally friendly fermentation method.</p>

<p><strong>Materials Needed:</strong></p>
<ul>
  <li>50g dried indigo leaves or natural indigo pigment</li>
  <li>25g fructose sugar or mashed bananas</li>
  <li>25g calcium hydroxide / lime</li>
  <li>Warm water (~40°C)</li>
  <li>Non-metal container</li>
  <li>Long spoon or stick</li>
  <li>Natural fiber cloth (pre-washed)</li>
</ul>

<p><strong>Step-by-Step Process:</strong></p>
  <li>Fill the container with warm water.</li>
  <li>Stir in the indigo pigment.</li>
  <li>Add fructose gently to begin the reduction.</li>
  <li>Stir in lime slowly to raise the pH.</li>
  <li>Cover and rest the vat in a warm place.</li>
  <li>Once a coppery film forms, submerge fabric for 3–10 minutes.</li>
  <li>Remove fabric and let oxidize to blue.</li>

<p>The vat can be maintained by keeping it warm and occasionally feeding it sugar and lime. Indigo dyeing is a slow, beautiful process that connects us with ancient tradition and the rhythm of natural color transformation.</p>
`,


    "dye.madder.recipe": `
<p><strong>Madder Root</strong> is one of the most ancient and cherished natural dyes, derived from the roots of <em>Rubia tinctorum</em>. It produces a rich spectrum of reds, from soft peach to deep brick—depending on preparation and water chemistry. This recipe honors traditional methods using gentle heat and natural mordants.</p>

<p><strong>Materials Needed:</strong></p>
<ul>
  <li>50g dried madder root (chopped or powdered)</li>
  <li>15g alum (potassium aluminum sulfate)</li>
  <li>5g cream of tartar (optional, brightens reds)</li>
  <li>Natural fiber cloth (wool, silk, or cotton; pre-washed)</li>
  <li>Non-reactive dye pot (stainless steel or enamel)</li>
  <li>Strainer or cloth bag (if using chopped root)</li>
  <li>Warm water (~50–60°C)</li>
  <li>Long spoon or stick</li>
</ul>

<p><strong>Step-by-Step Process:</strong></p>
  <li>Soak the fabric in warm water, then mordant it by simmering for 1 hour in a bath with alum and optional cream of tartar. Let cool in the bath, then rinse and keep damp.</li>
  <li>Place madder root in warm water and soak for several hours or overnight to extract color.</li>
  <li>Heat the madder dye bath gently to ~50–60°C. Do not boil, as high temperatures can dull the red to brown.</li>
  <li>Strain the root if desired, then add the damp, mordanted fabric.</li>
  <li>Maintain low heat and stir gently for 1–2 hours. For deeper hues, let the fabric sit in the cooling dye bath overnight.</li>
  <li>Remove the fabric, rinse thoroughly, and hang to dry in the shade.</li>

<p>Madder dyeing is a meditative process that rewards patience and care. Subtle changes in temperature, pH, and time can yield a fascinating variety of reds, connecting us to a long legacy of natural color creation.</p>
`,

  
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
    modalRecipe.innerHTML = recipeText.replace(/\n/g, '<br>');
  }
}
  
  // Load saved language on page load
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
  });
  

/**
 * Renders a gallery of items on the page.
 * 
 * The function first determines the minimum number of items between `numAr` and `numEn`,
 * and then creates gallery items for each of those numbers, as well as any additional
 * items for the larger of the two numbers.
 * 
 * The gallery items are created using the `createGalleryItem` function, which generates
 * the HTML markup for a single gallery item.
 */
var numAr = 2;
var numEn = 0;

// Function to create gallery item HTML
function createGalleryItem(item) {
  return `
     <div class="col-xl-3 col-lg-4 col-md-6">
       <div class="gallery-item h-100">
         <img src="gallery/${item}.jpg" class="img-fluid" alt="APP Inventor ${item.replace("_", " ")}">
         <div class="gallery-links d-flex align-items-center justify-content-center">
           <a href="gallery/${item}.jpg" title="APP Inventor ${item.replace("_", " ")}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
           <a href="book${item}/index.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
         </div>
       </div>
     </div>
   `;
}

// Function to render gallery items

function renderGalleryItems() {
  const galleryContainer = document.getElementById('gallery-container');
  var min = Math.min(numAr, numEn);

  for (let i = 1; i <= min; i++) {
    galleryContainer.innerHTML += createGalleryItem(i.toString());
    galleryContainer.innerHTML += createGalleryItem(i.toString() + "_en");
  }

  diff = Math.abs(numAr - numEn);
  for (let i = min + 1; i <= diff + min; i++) {
    galleryContainer.innerHTML += createGalleryItem(numAr > numEn ? i.toString() : i.toString() + "_en");
  }
}
// Call the function to render gallery items
renderGalleryItems();


  // Function to create gallery item HTML
  const galleryItems = [
    "1",
    "2"
   ];
   
   // Function to create gallery item HTML
   function createGalleryItem(item) {
     return `
       <div class="col-xl-3 col-lg-4 col-md-6">
         <div class="gallery-item h-100">
           <img src="gallery/${item}.jpg" class="img-fluid" alt="AI ${item.replace("_" , " ")}">
           <div class="gallery-links d-flex align-items-center justify-content-center">
             <a href="gallery/${item}.jpg" title="AI ${item.replace("_" , " ")}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
             <a href="book${item}/index.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
           </div>
         </div>
       </div>
     `;
   }
  
  // Function to render gallery items
  function renderGalleryItems() {
    const galleryContainer = document.getElementById('gallery-container');
    galleryItems.forEach(item => {
      galleryContainer.innerHTML += createGalleryItem(item);
    });
  }
  
  // Call the function to render gallery items
  renderGalleryItems();
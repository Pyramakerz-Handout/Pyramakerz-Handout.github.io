// Array containing gallery items data
const galleryItems = [
    {imgSrc: "1",title: "Book 1 Arabic",link: "book1"},
    {imgSrc: "2",title: "Book 2 Arabic",link: "book2"},
  ];
  
  // Function to create gallery item HTML
  function createGalleryItem(item) {
    return `
      <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
          <img src="gallery/${item.imgSrc}.jpg" class="img-fluid" alt="${item.title}">
          <div class="gallery-links d-flex align-items-center justify-content-center">
            <a href="gallery/${item.imgSrc}.jpg" title="${item.title}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
            <a href="${item.link}/index.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
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
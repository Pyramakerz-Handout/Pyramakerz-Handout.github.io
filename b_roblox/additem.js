// Array containing gallery items data
const galleryItems = [
    {imgSrc: "1",title: "Roblox 1",link: "book1"},
    {imgSrc: "1_en",title: "Roblox 1 English",link: "book1_en"},
    {imgSrc: "2",title: "Roblox 2",link: "book2"},
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
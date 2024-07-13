// Array containing gallery items data
const galleryItems = [
    {imgSrc: "gallery-1",title: "Roblox",link: "b_roblox"},
    {imgSrc: "gallery-2",title: "Robotics",link: "b_robotics"},
    {imgSrc: "gallery-3",title: "AI",link: "b_ai"},
    {imgSrc: "gallery-4",title: "APP Inventor",link: "b_App_inventor"},
    {imgSrc: "gallery-5",title: "Programming universe Seniors",link: "b_programming_universe"},
    {imgSrc: "gallery-6",title: "Programming universe Junior",link: "b_programming_universe_junior"},
    {imgSrc: "gallery-7",title: "Programming universe Junior",link: "b_web"},
  ];
  ];
  
  // Function to create gallery item HTML
  function createGalleryItem(item) {
    return `
      <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
          <img src="assets/gallery/${item.imgSrc}.jpg" class="img-fluid" alt="${item.title}">
          <div class="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/gallery/${item.imgSrc}.jpg" title="${item.title}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
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

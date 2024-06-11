// Array containing gallery items data
const galleryItems = [
    {imgSrc: "gallery-1",title: "Roblox",link: "roblox"},
    {imgSrc: "gallery-1",title: "Roblox 1 English",link: "roblox_en"},
    {imgSrc: "gallery-2",title: "Robotics",link: "robotics"},
    {imgSrc: "gallery-3",title: "AI",link: "AI"},
    {imgSrc: "gallery-4",title: "APP Inventor",link: "APP_inventor"},
    {imgSrc: "gallery-5",title: "Programming universe",link: "pu"},
    {imgSrc: "gallery-7",title: "Roblox 2",link: "Roblox2"},
    {imgSrc: "gallery-6",title: "Robotics 2",link: "Robotics2"},
    {imgSrc: "gallery-9",title: "AI 2",link: "AI2"},
    {imgSrc: "gallery-4",title: "APP Inventor 2",link: "APP_inventor2"},
    {imgSrc: "gallery-8",title: "Programming Universe 2",link: "pu2"},
  ];
  
  // Function to create gallery item HTML
  function createGalleryItem(item) {
    return `
      <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
          <img src="assets/img/gallery/${item.imgSrc}.jpg" class="img-fluid" alt="${item.title}">
          <div class="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/${item.imgSrc}.jpg" title="${item.title}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
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
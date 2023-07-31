// Get all category buttons and gallery items
const categoryButtons = document.querySelectorAll('.category-btn');
const galleryItems = document.querySelectorAll('.grid-item');

// Create a Masonry instance
var elem = document.querySelector('.grid');
var masonry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// Add click event listeners to category buttons
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');
  
      // Get the selected category from the 'data-category' attribute
      const selectedCategory = button.dataset.category;
  
      // Filter gallery items based on the selected category
      galleryItems.forEach(item => {
        if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
          item.style.display = "block"; // Show the item
        } else {
          item.style.display = "none"; // Hide the item
        }
      });
      // Trigger Masonry layout after items are hidden or shown
      masonry.layout();
    });
  });

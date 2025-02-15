let currentIndex = 0; // Track the current image in the carousel

// Function to move the carousel to the desired position
function moveSlide(direction) {
    const images = document.querySelectorAll('.welcome-image'); // Get all images in the carousel
    const totalImages = images.length; // Get the total number of images

    // Calculate the new index (handling the wrapping around the images)
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Move the carousel by adjusting the transform property
    updateCarouselPosition(currentIndex, totalImages);
}

// Function to update the carousel's position
function updateCarouselPosition(index, totalImages) {
    const carousel = document.querySelector('.carousel');

    // Check if carousel exists and update transform
    if (carousel) {
        carousel.style.transition = "transform 0.5s ease"; // Smooth transition for movement
        carousel.style.transform = `translateX(-${index * 100}%)`; // Move carousel to new position
    }
}

// Open Modal when clicking on image
function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// Close Modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Optional: Auto-scroll the carousel
setInterval(() => {
    moveSlide(1); // Automatically move to the next image every 3 seconds
}, 3000);

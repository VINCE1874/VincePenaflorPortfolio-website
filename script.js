// Get the modal
var modal = document.getElementById("myModal");

// Get the image elements and modal image
var images = document.querySelectorAll(".zoomable-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through all images and add click event
images.forEach(function(image) {
  image.onclick = function() {
    modal.style.display = "block"; // Display the modal
    modalImg.src = this.src; // Set modal image source to clicked image
    captionText.innerHTML = this.alt; // Set modal caption to the alt text of image
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


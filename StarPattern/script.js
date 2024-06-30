// Select all elements with the i tag and store them in a NodeList called 'stars'
const stars = document.querySelectorAll('.stars i');

// Loop through the 'stars' NodeList
stars.forEach((star, i) => {
  // Add an event listener that runs a function when the 'click' event is triggered
  star.addEventListener("click", () => {
    // Loop through the 'stars' NodeList again
    stars.forEach((star, index) => {
      // Add the 'active' class to the clicked star and any stars with a lower index
      // and remove the 'active' class from any star with a higher index
      if (index <= i) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  });
});

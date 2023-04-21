// Get the container div using its ID
const container = document.getElementById('container');

// Create a loop that will create 30x30 square divs
for (let i = 0; i < 30 * 30; i++) {
  // Create a new div element
  const square = document.createElement('div');

  // Add the 'square' class to the new div element
  square.classList.add('square');

  // Add a mouseover event listener to the square div
  square.addEventListener('mouseover', function() {
    // Change the background color of the square div to a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = randomColor;
  });

  // Append the new square div to the container div
  container.appendChild(square);
}
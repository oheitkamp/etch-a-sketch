// Get the container div using its ID
const container = document.getElementById('container');

// Create a loop that will create 30x30 square divs
for (let i = 0; i < 30 * 30; i++) {
  // Create a new div element
  const square = document.createElement('div');

  // Add the 'square' class to the new div element
  square.classList.add('square');

  // Append the new square div to the container div
  container.appendChild(square);
}
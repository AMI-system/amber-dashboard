// Initialize the map and fit it to the entire world
const map = L.map('map');
// .fitWorld(); // add this tp the previous line to fit the map to the entire world

// Define world-spanning bounds (full width, limited height)
const bounds = [
  [-30, -180], // Bottom-left (latitude limited to -30)
  [70, 180]    // Top-right (latitude limited to 70)
];

map.fitBounds(bounds); // Fit the map to the bounds

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Function to determine marker color based on image_count
function getColor(imageCount) {
    if (imageCount === 0) {
      return 'rgb(128,128,128)'; // Grey for zero images
    }

    // Normalize the image count to a range of 0 to 1
    const maxImages = 100000; // Upper bound for image_count
    const normalized = Math.min(imageCount / maxImages, 1);

    // Interpolate between light and dark colours
    const lightColour = { r: 242, g: 87, b: 118 }; // rgb(173,216,230)
    const darkColour = { r: 89, g: 0, b: 18 }; // rgb(0,0,139)

    // Calculate the interpolated color
    const r = Math.floor(lightColour.r + normalized * (darkColour.r - lightColour.r));
    const g = Math.floor(lightColour.g + normalized * (darkColour.g - lightColour.g));
    const b = Math.floor(lightColour.b + normalized * (darkColour.b - lightColour.b));

    return `rgb(${r},${g},${b})`; // Return the interpolated color
  }


// Function to determine marker size based on image_count
function getRadius(imageCount) {
  const minRadius = 3; // Minimum marker size (visible for 0 images)
  const maxRadius = 10; // Maximum marker size
  const maxImages = 100000; // Upper bound for image_count

  // Normalize the image count to a range of 0 to 1
  const normalized = Math.min(imageCount / maxImages, 1);

  // Scale radius between minRadius and maxRadius
  return minRadius + normalized * (maxRadius - minRadius);
}

// Fetch points of interest from the JSON file
fetch('points_of_interest.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load points_of_interest.json');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(point => {
      const { name, latitute, longitute, image_count, country, deployment_id} = point;

      // Ensure latitude and longitude are valid
      if (latitute && longitute) {
        // Parse image_count as a number
        const imageCount = parseInt(image_count, 10) || 0;

        // Create a custom marker
        const marker = L.circleMarker([latitute, longitute], {
          radius: getRadius(imageCount), // Scale size dynamically
          color: getColor(imageCount), // Border color
          fillColor: getColor(imageCount), // Fill color
          fillOpacity: 0.8, // Slight transparency
        });

        // Add the marker to the map with a popup
        marker.addTo(map)
          .bindPopup(`<b>${country}</b><br><b>${name}, ${deployment_id}</b><br>Images: ${imageCount.toLocaleString()}`);
      }
    });
  })
  .catch(error => console.error('Error fetching points of interest:', error));

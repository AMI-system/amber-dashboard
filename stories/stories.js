document.addEventListener('DOMContentLoaded', async () => {
    // Array of story file paths and metadata
    const stories = [
      { file: './story1/story1.html', title: 'Story 1: The Beauty of Data' },
      { file: './story2/story2.html', title: 'Story 2: Hidden Patterns' },
    ];

    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    for (let i = 0; i < stories.length; i++) {
      const { file, title } = stories[i];

      try {
        // Fetch the content of the story HTML
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error(`Failed to load ${file}`);
        }
        const storyContent = await response.text();

        // Create a carousel indicator
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#dataStoriesCarousel');
        indicator.setAttribute('data-bs-slide-to', i);
        indicator.setAttribute('aria-label', title);
        if (i === 0) indicator.classList.add('active');
        carouselIndicators.appendChild(indicator);

        // Create a carousel slide
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (i === 0) item.classList.add('active');

        // Insert the story content into the slide
        item.innerHTML = `
          <div class="d-block w-100">${storyContent}</div>
        `;

        carouselInner.appendChild(item);
      } catch (error) {
        console.error(`Error loading story: ${file}`, error);
      }
    }
  });

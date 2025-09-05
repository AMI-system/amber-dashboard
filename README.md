# Ami Dashboard

Dashboard for AMBER project currently hosted [here](https://ami-system.github.io/amber-dashboard/).

## Running locally

To view the dashboard on [http://localhost:8000](http://localhost:8000), run the following command in the root directory of the repository:

```
python -m http.server 8000
```

## Repository structure

```
ami-dashboard/
├── index.html          # Main file containing the tab layout
├── navbar.html          # Navigation bar for the dashboard
├── footer.html          # Footer for the dashboard
├── map/
│   ├── map.html        # Map-specific HTML
│   ├── map.js          # JavaScript for map rendering
│   ├── points_of_interest.json # Data for map markers
│   └── map.css         # CSS for map styling (optional)
├── stories/
│   ├── stories.html    # Stories-specific HTML
│   ├── stories.js      # JavaScript for carousel logic (if needed)
│   ├── stories.css     # CSS for carousel styling
│   ├── story_ml/
│   │   ├── story_ml.html  # HTML for Story ML content
│   │   └── story_ml.jpg  # Images for Story ML
│   ├── story_encounters/
│   │   ├── story_encounters.html  # HTML for Wildlife Encounters content
│   │   └── story_encounters.jpg  # Images for Wildlife Encounters
│   ├── story_map/
│   │   ├── story_map.html  # HTML for Story Map content
│   │   └── story_map.jpg  # Images for Story Map
│   └── ...             # Add more stories as needed
├── about
│   ├── partner_logos/
│   ├── about.css
│   └── about.html
├── css/
│   └── styles.css      # Shared styles for the entire site
├── js/
│   └── main.js         # Shared scripts for the entire site
└── assets/
    ├── favicon.ico     # Favicon
    └── logo.png        # Shared images or assets
```

## New Stories

To add a new story, follow the instructions in `README_ADD_STORY.md`.

## New Deployments

To add a new deployment to the map story, simply update the `points_of_interest.json` file in the `map` directory with the new deployment details.

## Analytics

The AMBER Dashboard uses Google Analytics 4 for tracking user interactions. The tracking code is included in the `<head>` section of each HTML file.

To view the metrics, you will need access to the Google Analytics account associated with the AMBER project. Contact Kat, Tom or David.

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
│   ├── story2/
│   │   ├── index.html  # HTML for Story 2 content
│   │   └── story2.jpg  # Images for Story 2
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

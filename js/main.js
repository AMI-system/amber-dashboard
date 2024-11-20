// Example: Add event listeners for global actions (if any)

// Ensure the active tab is highlighted properly (Bootstrap handles most of this by default)
document.addEventListener('DOMContentLoaded', () => {
  console.log('Main script loaded');
  // Example: Track tab changes if needed
  document.querySelectorAll('.nav-link').forEach((tab) => {
    tab.addEventListener('click', () => {
      console.log(`Switched to tab: ${tab.textContent}`);
    });
  });
});

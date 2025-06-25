// Interactive elements (e.g., navbar toggle for mobile)
document.addEventListener('DOMContentLoaded', () => {
  console.log('Site loaded!');
  // Add animations or dynamic content here
});

/*=============PM dashboard=================*/


function simulateKPI() {
  document.querySelectorAll('.kpi-bar').forEach(bar => {
    const currentWidth = parseInt(bar.style.width);
    bar.style.width = `${currentWidth + 10}%`;
  });
}

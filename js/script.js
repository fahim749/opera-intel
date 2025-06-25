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


/*************PM Skilllsyth Acdemy ************/

function sendMessage() {
  const input = document.getElementById('chat-input');
  const chatDiv = document.querySelector('.chat-demo');
  chatDiv.innerHTML += `<div class="chat-message user">User: ${input.value}</div>`;
  input.value = '';
  // Simulate AI response after 1 second
  setTimeout(() => {
    chatDiv.innerHTML += `<div class="chat-message ai">AI: Great! Now try to suggest a solution.</div>`;
  }, 1000);
}


/*************** Simulation  ***********************/

function allowDrop(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(id));
}
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
  });
});






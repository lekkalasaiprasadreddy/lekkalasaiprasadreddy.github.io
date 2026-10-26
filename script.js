const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

const taskChecks = [...document.querySelectorAll('.task-check')];
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const toast = document.getElementById('toast');
let toastTimer;

function updateChecklist() {
  const completed = taskChecks.filter((check) => check.checked).length;
  progressBar.style.width = `${(completed / taskChecks.length) * 100}%`;
  progressText.textContent = `${completed} of ${taskChecks.length} tasks complete`;

  if (completed === taskChecks.length) {
    toast.textContent = 'Checklist complete — you are ready to deploy!';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }
}

taskChecks.forEach((check) => check.addEventListener('change', updateChecklist));

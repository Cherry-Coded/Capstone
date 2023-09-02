
const textBoxes = document.querySelectorAll('.text-box');


textBoxes.forEach(textBox => {
  textBox.addEventListener('mouseenter', () => {
    textBox.classList.add('expanded');
  });

  textBox.addEventListener('mouseleave', () => {
    textBox.classList.remove('expanded');
  });
});

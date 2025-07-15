// ✅ Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✅ Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ✅ Simple cart handler
function addToCart(item) {
  alert(`${item} added to cart!`);
}

// ✅ Fake email send (demo)
function sendEmail(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  if (name) {
    alert(`Thanks, ${name}! We'll get back to you soon.`);
  } else {
    alert('Please enter your name before submitting.');
  }
  e.target.reset();
}

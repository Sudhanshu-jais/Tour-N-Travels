const testimonials = [
  "Amazing experience!",
  "Best travel service ever!",
  "Highly recommended!",
];

let index = 0;
const testimonialEl = document.getElementById("testimonial");

setInterval(() => {
  index = (index + 1) % testimonials.length;
  testimonialEl.textContent = `"${testimonials[index]}"`;
}, 3000);

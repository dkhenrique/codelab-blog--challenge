const heartIcons = document.querySelectorAll('.fa-heart');

heartIcons.forEach(heartIcon => {
  heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('fa-solid');
    heartIcon.classList.toggle('fa-regular');
  })
})
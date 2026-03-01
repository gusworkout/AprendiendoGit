document.querySelectorAll('.card-expand').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

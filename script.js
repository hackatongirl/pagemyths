document.addEventListener("DOMContentLoaded", () => {
  // Получаем все карточки
  const flashcards = document.querySelectorAll('.flashcard');

  // Добавляем обработчик событий для каждой карточки
  flashcards.forEach(card => {
    card.addEventListener('click', () => {
      // Переключаем класс для карточки, чтобы она перевернулась
      card.classList.toggle('flipped');
    });
  });
});

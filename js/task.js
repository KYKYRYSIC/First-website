const buttonAdd = document.querySelector('.task__buttons-add');
const sound = document.getElementById('hover-sound');
const tasksTitleInput = document.querySelector('.task__form-input');
const tasksDateInput = document.querySelector('.task__form-date');
const tasksDescInput = document.querySelector('.task__form-textarea');
const tasksSaveBtn = document.querySelector('.task__buttons-save');
const tasksContainer = document.querySelector('.task__content');

buttonAdd.addEventListener('mouseenter', () => {
    sound.currentTime = 0; // Сбрасывает звук на начало (для быстрого повтора)
    sound.play();          // Воспроизводит звук
});
$(function () {
    $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })

    $('.task__buttons-add, .overlay, .task__buttons-save').on('click', function (e) {
    e.preventDefault()
    $('.task__form').toggleClass('task__form--show')
    $('.overlay').toggleClass('task__form--show')
    $('.task__buttons-save').toggleClass('task__form--show')
  })
  
}) 


let tasks = [
  
];

tasksSaveBtn.addEventListener("click", function() {
  const titleValue = tasksTitleInput.value;
  const dateValue = tasksDateInput.value;
  const descValue = tasksDescInput.value;
})
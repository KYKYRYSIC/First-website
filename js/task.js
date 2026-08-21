const buttonAdd = document.querySelector('.task__buttons-add');
const sound = document.getElementById('hover-sound');
const tasksTitleInput = document.querySelector('.task__form-input');
const tasksDateInput = document.querySelector('.task__form-date');
const tasksDescInput = document.querySelector('.task__form-textarea');
const tasksSaveBtn = document.querySelector('.task__buttons-save');
const tasksContainer = document.querySelector('.task__content');
const tasksContainerBox = document.querySelector('.task__content-box')
const tasksIcons = document.querySelector('.task__box-icons')
const tasksIconsMenu = document.querySelector('.task__box-heading--mark')

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

let currentFilter = 'all'; // По умолчанию показываем все задачи

function renderTasks() {
  tasksContainer.innerHTML = '';
  let tasksToRender = tasks;
    if (currentFilter === 'marked') {
        // Метод .filter() оставляет только те задачи, у которых isMarked === true
        tasksToRender = tasks.filter(task => task.isMarked);
    }
  tasksToRender.forEach(function (task) {
    const markClass = task.isMarked ? 'add__marked' : '';
    const taskHTML = `
            <div class="task__content-box" data-id="${task.id}">
              <div class="task__box-head">
                <h1 class="task__box-heading">${task.title}</h1>
                <div class="task__box-icons">
                        <button href="" class="task__box-icons--btnboxq ${markClass}">
                          <p class="task__box-btnp">Marked</p>
                          <svg class="task__box-heading--mark icon ${markClass}" xmlns="http://www.w3.org/2000/svg" height="28px"
                            viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
                            <path
                              d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                          </svg>
                        </button>
                        <button href="" class="task__box-icons--btnboxq">
                          <svg class="task__box-heading--dot icon" xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                            <path
                              d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                          </svg>
                        </button>
                        <div class="task__box-doted--menu">
                        <button href="" class="task__box-icons--btnbox ${markClass}">
                          <p class="task__box-btnp">Marked</p>
                          <svg class="task__box-heading--mark icon ${markClass}" xmlns="http://www.w3.org/2000/svg" height="28px"
                            viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
                            <path
                              d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                          </svg>
                        </button>
                        <button href="" class="task__box-icons--btnbox">
                          <svg class="task__box-heading--dot icon" xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                            <path
                              d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                          </svg>
                        </button>
                        <ul class="task__box-btnbox--menus">
                          <li class="task__btnbox-menu--items">
                            <button href="" class="task__box-icons--btnbox">
                          <svg class="task__box-heading--dot---dot icon" xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                            <path
                              d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                          </svg>
                        </button>
                          </li>
                          <li class="task__btnbox-menu--items">
                            <a class="task__btnbox-menu--item" href="#">Delete</a>
                          </li>
                          <li class="task__btnbox-menu--items">
                            <a class="task__btnbox-menu--item" href="#">Coppy</a>
                          </li>
                          <li class="task__btnbox-menu--items">
                            <a class="task__btnbox-menu--item" href="#">Change</a>
                          </li>
                        </ul>
                        </div>
                      </div>
                    </div>
                <div class="task__box-title">${task.description}</div>
                <div class="task__box-inf">${task.date}</div>
            </div>`;
    tasksContainer.innerHTML += taskHTML;
  })
}

tasksSaveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const titleValue = tasksTitleInput.value;
  const dateValue = tasksDateInput.value;
  const descValue = tasksDescInput.value;

  if (titleValue.trim() === '' & dateValue.trim() === '' & descValue.trim() === '') {
    alert('Please, enter someone parameters');
    return;
  }

  const newTask = {
    id: Date.now(),
    title: titleValue,
    date: dateValue,
    description: descValue,
    isCompleted: false,
    isMarked: false
  }

  tasks.push(newTask);

  tasksTitleInput.value = '';
  tasksDateInput.value = '';
  tasksDescInput.value = '';

  renderTasks();
});

// Добавяме прослушване на всички .task__content-box в DOM
document.addEventListener('DOMContentLoaded', function() {
  // 1 Функция за прилагане на съобытия на нови елементи
  const attachEventListeners = (node) => {
    node.addEventListener('mouseenter', () => {
      const icons = node.querySelector('.task__box-icons');
      if (icons) {
        icons.classList.add('show__icons');
      }
    });

    node.addEventListener('mouseleave', () => {
      const icons = node.querySelector('.task__box-icons');
      if (icons) {
        icons.classList.remove('show__icons');
      }
    });
  };

  // 2 НОВАЯ Функция за прилагане на съобытия на меню на троеточие
  const attachMenuEventListeners = (dotNodeList) => {
    dotNodeList.forEach(dot => {
      const iconsContainer = dot.closest('.task__box-icons');
      if (!iconsContainer) return;

      dot.addEventListener('click', () => {
        iconsContainer.classList.toggle('show__icons-doted');
      });

      iconsContainer.addEventListener('mouseleave', () => {
        iconsContainer.classList.remove('show__icons-doted');
      });
    });
  };

  // 3 Функция-заглушка: отметки обрабатываются только делегированным обработчиком и через renderTasks
  const attachMarkEventListeners = (iconsNodeListMark) => {
    // intentionally empty — чтобы избежать двойного переключения класса
  };

  // Проверяме динамичките добавления с MutationObserver
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.classList && node.classList.contains('task__content-box')) {
          attachEventListeners(node); // Добавяме иконки обсъбнини
          
          // 2 Добавяме слушатели само на троеточие
          const newDotIcons = node.querySelectorAll('.task__box-heading--dot');
          attachMenuEventListeners(newDotIcons);

          // 3 Отметки обрабатываются делегированно (renderTasks), поэтому локальные слушатели не ставим
          // const newMark = node.querySelectorAll('.task__box-heading--mark');
          // attachMarkEventListeners(newMark);
        }
      });
    });
  });

  // Наблюдаем за динамичките добавления
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Обработваме вече съществуващите елементи
  document.querySelectorAll('.task__content-box').forEach(box => {
    attachEventListeners(box); // Добавяме иконки обсъбнини
    
    // 2 Добавяме слушатели само на троеточие
    const existingDotIcons = box.querySelectorAll('.task__box-heading--dot');
    attachMenuEventListeners(existingDotIcons);

    // 3 Отметки обрабатываются делегированно через renderTasks — не добавляем локальные слушатели
    // const existingMark = box.querySelectorAll('.task__box-heading--mark');
    // attachMarkEventListeners(existingMark);
  });
});

// Повесили один клик на весь контейнер, где лежат карточки
tasksContainer.addEventListener('click', function(event) {
    // 1. Проверяем, кликнули ли именно по кнопке звездочки (или по иконке внутри)
    const starBtn = event.target.closest('.task__box-icons--btnboxq, .task__box-icons--btnbox');

    // Если клик был мимо звездочки — ничего не делаем
    if (!starBtn) return;

    // Дополнительно убеждаемся, что это именно кнопка "Marked" — она содержит svg с классом task__box-heading--mark
    if (!starBtn.querySelector('.task__box-heading--mark')) return;

    // 2. Находим родительскую карточку и забираем её id из dataset
    const card = starBtn.closest('.task__content-box');
    const taskId = Number(card.dataset.id);

    // 3. Находим нужную задачу в нашем массиве tasks
    const targetTask = tasks.find(function(task) {
        return task.id === taskId;
    });

    // 4. Если задача найдена, меняем ее статус на противоположный (true -> false, false -> true)
    if (targetTask) {
        targetTask.isMarked = !targetTask.isMarked;

        // 5. Перерисовываем список, чтобы HTML обновился на основе новых данных
        renderTasks();
    }
});

// Получаем кнопки фильтрации по их классам/селекторам
const filterAllBtn = document.querySelector('.task__filter-btn--all');
const filterMarkedBtn = document.querySelector('.task__filter-btn--marked');

// Клик по "All"
filterAllBtn.addEventListener('click', function(event) {
    event.preventDefault();
    currentFilter = 'all';
    renderTasks(); // Перерисовываем экран (покажет ВСЕ задачи)
});

// Клик по "Marked"
filterMarkedBtn.addEventListener('click', function(event) {
    event.preventDefault();
    currentFilter = 'marked';
    renderTasks(); // Перерисовываем экран (покажет ТОЛЬКО со звездочкой)
});
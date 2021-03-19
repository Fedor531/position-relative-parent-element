const parent = document.querySelector('.parent');

const pointsArray = [
  {
    id: 1,
    x: 5,
    y: 20,
    color: 'aqua',
  },
  {
    id: 2,
    x: 60,
    y: 5,
    color: 'blue',
  },
  {
    id: 3,
    x: 50,
    y: 50,
    color: 'green',
  },
];

function renderPoints() {
  pointsArray.forEach((item) => {
    const point = document.createElement('div');
    point.classList.add('point');
    point.dataset.id = item.id;
    point.setAttribute(
      'style',
      `top:${item.y}%; left:${item.x}%; background-color:${item.color}`
    );
    parent.insertAdjacentElement('beforeend', point);
  });
}

/* Вывод элементов из массива на страницу */
window.onload = renderPoints;

parent.addEventListener('click', (e) => {
  if (!e.target.classList.contains('point')) {
      console.log('hello');
    /* Чтобы элемент ставился по центру там где кликнули нужно */
    const newPointTop = Number(
      (((e.offsetY - 5) * 100) / parent.offsetHeight).toFixed(3)
    );
    const newPointLeft = Number(
      (((e.offsetX - 5) * 100) / parent.offsetWidth).toFixed(3)
    );

    // Формируем объект нового поинта
    const newPoint = {};
    newPoint.id = pointsArray.length + 1;
    newPoint.x = newPointLeft;
    newPoint.y = newPointTop;
    newPoint.color = 'red';
    pointsArray.push(newPoint);
    renderPoints();
  }
});

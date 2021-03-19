const parent = document.querySelector('.parent');

const pointsArray = [
  {
    id: 1,
    x: 5,
    y: 20,
    color: 'red',
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

window.onload = function () {
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
};

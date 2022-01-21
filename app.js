const $startButton = document.querySelector('#startButton');
const $card1 = document.querySelector('.card1');
const $card2 = document.querySelector('.card2');
const $card3 = document.querySelector('.card3');
const $card4 = document.querySelector('.card4');
const $card5 = document.querySelector('.card5');
const $card6 = document.querySelector('.card6');
const $card7 = document.querySelector('.card7');
const $card8 = document.querySelector('.card8');
const $card9 = document.querySelector('.card9');
const cards = [$card1, $card2, $card3, $card4, $card5, $card6, $card7, $card8, $card9];
const order = [];
let clickable = false;

$card1.addEventListener('click', blink);
$card2.addEventListener('click', blink);
$card3.addEventListener('click', blink);
$card4.addEventListener('click', blink);
$card5.addEventListener('click', blink);
$card6.addEventListener('click', blink);
$card7.addEventListener('click', blink);
$card8.addEventListener('click', blink);
$card9.addEventListener('click', blink);

function blink(event) {
  if (!clickable) return;
  event.target.classList.add('active');
  setTimeout(() => {
    event.target.classList.remove('active');
  }, 1000);
  if (event.target === order[0]) {
    order.splice(0, 1);
    console.log(order);
    if (order.length === 0) {
      setTimeout(() => {
        alert(`SUCCESS!`);
        clickable = false;
      }, 1000);
    }
  } else {
    setTimeout(() => {
      alert(`FAIL.`);
      clickable = false;
    }, 50);
  }
}

function showOrder() {
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    order.push(cards[randomIndex]);
    cards.splice(randomIndex, 1);
  }
  console.log(order);
  order.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('active');
      setTimeout(() => {
        card.classList.remove('active');
      }, 1000);  
    }, 1000 + 1000 * index);
  });
  setTimeout(() => {
    clickable = true;
  }, 11000);
}

$startButton.addEventListener('click', () => {
  showOrder();
});

// startButton click - showOrder - card click - blink
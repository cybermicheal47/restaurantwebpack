import { rendermenu } from './menu.js';

function renderhome() {
  const contentdiv = document.getElementById('content');

  const htmlhome = `
    <div class="containerhome">
      <div class="textmain">
        <h1>Join us and experience mouthwatering <p>dishes at affordable prices!</p></h1>
        <button id="orderButton">Order Now</button>
      </div>
    </div>
  `;

  contentdiv.innerHTML = htmlhome;

  const orderButton = document.getElementById('orderButton');
  orderButton.addEventListener('click', menuClickHandler);
}

function menuClickHandler() {
  rendermenu();
}

export { renderhome };

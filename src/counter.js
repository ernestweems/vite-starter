// import { addBanner } from './banner.module.css';
//import('./style.css'); //to default load stlyes
// import {addBanner} from './banner.js';  we are dynamically importing now
import stylesObj from './counter.module.css';
import styles from './counter.module.css';
export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count');
  const incrementButton = doc.getElementById('increment');
  const decrementButton = doc.getElementById('decrement');

  countElement.classList.add(stylesObj.count);

  let count = 0;

  const render = () => {
    countElement.textContent = count;

    if (count < 0) {
      // countElement.classList.add(addBanner.bannerText);
      import('./banner.js').then(({ addBanner }) => {
        addBanner('Yo! Below Zero');
      });
    }
  };

  const increment = () => {
    count++;
    render();
  };

  const decrement = () => {
    count--;
    render();
  };

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  render();

  return () => {
    incrementButton.removeEventListener('click', increment);
    decrementButton.removeEventListener('click', decrement);
  };
};

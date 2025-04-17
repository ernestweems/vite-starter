console.log('hello from index.js');

//import { initializeCounter } from './counter';

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});

//document.querySelector('h2.counter-title').textContent ='Counter App Widget';

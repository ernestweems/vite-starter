import classes from './banner.module.css';

export const addBanner = (text) => {
  document.querySelector('#content').classList.add(classes.fooBar);
  document.querySelector('#content').textContent = text;
};

import { bannerText } from './banner.module.css';

export const addBanner = (text) => {
  const containter = document.querySelector('#content');
  containter.classList.add(bannerText);
  containter.textContent = text;
};

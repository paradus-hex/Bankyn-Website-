// 'use strict';

// ///////////////////////////////////////
// // Modal window
// //Selectors
// console.log('ko');
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// btnScrollTo.addEventListener('click', function (e) {
//   //modern way(for older complicated way.see the vid forref)
//   section1.scrollIntoView({ behavior: 'smooth' });
// });
// /////////////////////////////////////////
// //Page Navigation
// //!Event Delegation
// //Very efficient method as doesn't loop and create new event handlers
// //1.Add event listener to parent element
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   //2.Determine which element originated the event and match
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });
// //Tabbed component
// const tabs = document.querySelectorAll('.operations__tab');
// const tabContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');
// //Applying event delegation
// tabContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');
//   console.log(clicked);
// });

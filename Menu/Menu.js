/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuBtn = document.querySelector('.menu-button');
const pageBody = document.querySelector('.articles');

function menuMaker(menuData){
  
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  
  menu.classList.add('menu');
  
  menuData.forEach((item) => { 
    let listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  })
  
  menu.appendChild(list);
  menu.classList.add('menu--initial');
  
menuBtn.addEventListener('click', () => {
        if (menu.classList.contains('menu--initial')){
        menu.classList.remove('menu--initial');
        menu.classList.add('menu--open');
      } else if (menu.classList.contains('menu--close')){
        menu.classList.remove('menu--close');
        menu.classList.add('menu--open');
      } else if (menu.classList.contains('menu--open')) {
        menu.classList.remove('menu--open');
        menu.classList.add('menu--close');
      }
});

pageBody.addEventListener('click', () => {
  if (menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    menu.classList.add('menu--close');
  }
});

 return menu; 
}

const newMenu = menuMaker(menuItems);
const header = document.querySelector('.header');
header.appendChild(newMenu);




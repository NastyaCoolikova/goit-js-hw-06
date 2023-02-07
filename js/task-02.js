const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');
console.log (listEl);
for (const ingredient of ingredients){
  const navItem = document.createElement("li");
  navItem.classList.add('item');
  navItem.textContent = ingredient;
  listEl.appendChild(navItem);
};

  
  
  

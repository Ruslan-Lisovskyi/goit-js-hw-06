const liItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach(element => console.log(`Category: ${element.firstElementChild.outerText}
Elements: ${element.lastElementChild.children.length}`));
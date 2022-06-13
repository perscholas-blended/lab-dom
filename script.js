let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

// Part 1
// DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the `#main-title` ID element. Remember there are a couple of ways to query **id**. Change the **text** of the title to something shorter.
  const webTitle = document.querySelector('#main-title');
  webTitle.innerText = 'Welcome to DOM Toretto';

// Part 2
// Select the `body` and change the background-color to a new color of your choice.
const mainColor = document.body.style.backgroundColor = 'beige';

// Part 3
// Select **DOM's Favorite Things** list and remove the last list item.
const listRemoval = document.getElementById('favorite-things');
listRemoval.removeChild(listRemoval.lastElementChild);

// Part 4
// Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements
const newFontSize = document.querySelectorAll('.special-title');
newFontSize.forEach(title =>{
  title.style.fontSize = '2rem';
});

// Part 5
// Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.
  const raceRemoval = document.getElementById('past-races');
  raceRemoval.removeChild(raceRemoval.children[3]);

// Part 6
// Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` text to the name of a city, and append it to the **Past Races** list.
  const newCity = document.getElementById('past-races');
  newCity.innerHTML += '<li>Boston</li>';

// Part 7
// Create a new `.blog-post` corresponding to the new city added in **Part 6**. You will have to create a new `<div>` with class of `.blog-post`, a new `<h1>` with text, and a new `<>` with some text. Make the new element consistent with the other posts. Think about what order you want to create the elements, and what order you want to append them in.

const newDiv = document.createElement('div').classList.add('.blog-post');
const newH1 = document.createElement('h1');
const newPara = document.createElement('p');
const newPost = document.querySelector(".main");
newPost.appendChild(newH1);
newPost.appendChild(newPara);
newPara.innerHTML = 'In my hometown of Boston, I had wished to take Michelle Rodriguez to a Ludacris concert.'

newH1.innerHTML = 'Boston';


}





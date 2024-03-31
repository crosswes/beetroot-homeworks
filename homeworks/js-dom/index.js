// * Files of the homework named index, modal and lights (.html, .css, .js)

// PlayList
const playList = [
  { author: 'LED ZEPPELIN', song: 'STAIRWAY TO HEAVEN' },
  { author: 'QUEEN', song: 'BOHEMIAN RHAPSODY' },
  { author: 'LYNYRD SKYNYRD', song: 'FREE BIRD' },
  { author: 'DEEP PURPLE', song: 'SMOKE ON THE WATER' },
  { author: 'JIMI HENDRIX', song: 'ALL ALONG THE WATCHTOWER' },
  { author: 'AC/DC', song: 'BACK IN BLACK' },
  { author: 'QUEEN', song: 'WE WILL ROCK YOU' },
  { author: 'METALLICA', song: 'ENTER SANDMAN' },
];

// Creating HTML elements
const app = document.createElement('div');
const ol = document.createElement('ol');

// Adding classes
ol.classList.add('js-ol');
app.classList.add('app');

// Adding ID's
ol.id = 'js-list';

// Creating DOM elements
const DOMList = document.getElementById('js-list');

//Appending to DOM
document.body.appendChild(app);
app.appendChild(ol);

// Creating Items list
function itemToList(author, song) {
  const li = document.createElement('li');
  li.classList.add('js-list-item');
  li.innerText = `${author} : ${song}`;
  ol.appendChild(li);
}

// Adding data to list
playList.forEach((item) => {
  itemToList(item.author, item.song);
});

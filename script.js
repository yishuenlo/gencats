const thirtyBtn = document.querySelector('.thirty');

// keywords for search
const cats = [
  "silly cat",
  "funny cat",
  "goofy cat",
  "cat in small box",
  "liquid cat",
  "cat in costume",
  "funny cat faces",
  "silly cat faces",
  "abyssinian cat",
  "aegean cat",
  "american curl cat",
  "american bobtail cat",
  "american shorthair cat",
  "american wirehair cat",
  "aphrodite giant cat",
  "arabian mau cat",
  "australian mist cat",
  "asian semi-longhair cat",
  "balinese cat",
  "bambino cat",
  "bengal cat",
  "birman cat",
  "bombay cat",
  "bazilian shorthair",
  "british longhair",
  "burmese cat",
  "burmilla cat",
  "california spangled",
  "chantilly-tiffany cat",
  "chartreux cat",
  "chausie cat",
  "cornish rex cat",
  "cyprus",
  "dragon li cat",
  "egyptian mau",
  "foldex cat",
  "colorpoint persian cat",
  "japanese bobtail cat",
  "Maine coon",
  "Manx cat",
  "toyger cat",
  "York chocolate cat",
];

const animals = [
  "cat",
  "tuxedo cat",
  "black cat",
  "panther",
  "leopard",
  "tiger",
  "lion",
  "leopard cubs",
  "fennec fox",
  "elephant",
  "dolphin",
  "giraffe",
  "bear cubs",
  "fox",
  "snow leopard",
  "tabby cat",
  "tiger cubs",
  "kangaroo",
  "koala",
  "husky",
  "golden retriever",
  "corgi",
  "puppies",
  "kittens",
  "jaguar",
  "polar bear",
  "penguins",
  "wolf",
  "border collie",
  "red panda",
  "rabbits",
  "deer",
  "cheetah",
  "hedgehog",
  "panda",
  "monkey",
  "sloth",
];

// an empty array to store links
let searchLinks = animals.map(
  (keyword) => `https://www.bing.com/images/search?q=silly ${keyword}`
);

// open and closing tabs
function automateTabs(link) {
  const tab = window.open(link, "_blank");
  // close tab after 5000ms
  setTimeout(function () {
    tab.close();
  }, 5000);
}

// function to run open and closing tabs in sequence
function searching(arr, iterate) {
  // set time lag for subsquent links
  const timelag = 6000;
  // run first link first
  automateTabs(arr[0]);

  //run subsequent links after specific timelag
  for (let i = 1; i < iterate; i++) {
    setTimeout(function () {
      automateTabs(arr[i]);
    }, timelag * i);
  }
}

thirtyBtn.addEventListener("click", function () {
  searching(searchLinks, 34);
});


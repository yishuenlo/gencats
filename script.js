const thirtyBtn = document.querySelector(".thirty");
const quote = document.querySelector("#quote");

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
  "calico cat",
  "panther",
  "leopard",
  "tiger",
  "lion",
  "fennec fox",
  "elephant",
  "giraffe",
  "bear cubs",
  "red fox",
  "snow leopard",
  "tabby cat",
  "kangaroo",
  "koala",
  "husky",
  "golden retriever",
  "corgi",
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
  "arctic fox",
  "Capybara",
  "Patagonian mara",
  "Numbat",
  "Mangalitsa",
  "Margay",
  "Tarsier",
  "pika",
  "Quoll",
  "Quokka",
  "Klipspringer",
  "Japanese weasel",
  "Long-eared jerboa",
  "Japanese dwarf flying squirrel",
  "Sea otters",
  "Sea turtles",
  "Black-footed cats",
  "American mink",
  "Racoon",
  "Possum",
  "Chipmunk",
  "Squirrel",
  "owl",
  "yoda",
  "coyote",
  "rabit",
  "pig",
  "cow",
  "pine marten",
  "formosan black bear",
  "crab-eating mongoose",
  "otter", 
  "chinese ferret badger",
  "yellow-throated marten",
  "sambar deer",
  "formasan sika deer",
  "taiwan serow",
];

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

//START generate random quotes
//quote library
const dailyQuotes = [
  {
    quote: "Make each day your masterpiece.",
    source: "John Wooden",
  },
  {
    quote:
      "Just one small positive thought in the morning can change your whole day.",
    source: "Dalai Lama",
  },
  {
    quote:
      "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson",
  },
  {
    quote: "Every day brings new choices.",
    source: "Martha Beck",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    source: "Steve Jobs",
  },
  {
    quote:
      "Give every day the chance to become the most beautiful day of your life.",
    source: "Mark Twain",
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "Nobody can go back and start a new beginning, but anyone can start today and make a new ending.",
    source: "Maria Robinson",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
  },
  {
    quote:
      "Success isn’t always about ‘Greatness’, it’s about consistency. Consistent, hard work gains success. Greatness will come.",
    source: "Dwayne “The Rock” Johnson",
  },
  {
    quote:
      "Never let the odds keep you from doing what you know in your heart you were meant to do.",
    source: "Unknown",
  },
  {
    quote:
      "The struggle you’re in today is developing the strength you need for tomorrow. Don’t give up.",
    source: "Unknown",
  },
  {
    quote:
      "You have to fight through some bad days to earn the best days of your life.",
    source: "Unknown",
  },
  {
    quote:
      "Trust yourself. You know more than you think you do.",
    source: "Unknown",
  },
  {
    quote:
      "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    source: "Unknown",
  },
  {
    quote:
      "Being challenged in life is inevitable, being defeated is optional.",
    source: "Unknown",
  },
  {
    quote:
      "Beginning is easy, continuing is hard.",
    source: "Unknown",
  },
];

function getRandomQuote() {
  //generate random index based on dailyQuotes.length
  const index = Math.floor(Math.random() * dailyQuotes.length);
  return (quote.innerHTML = `${dailyQuotes[index].quote} --${dailyQuotes[index].source}`);
}

getRandomQuote();
// END generate random quotes

// START tab actions
// open and closing tabs
function automateTabs(link) {
  const tab = window.open(link, "_blank");
  // close tab after 5000ms
  setTimeout(function () {
    tab.close();
  }, 10000);
}

// function to run open and closing tabs in sequence
function searching(iterate) {

  //generate randomized link library
  const searchLinks = shuffleArr(animals).map(
    (keyword) => `https://www.bing.com/images/search?q=baby ${keyword}`
  );

  // set time lag for subsquent links
  const timelag = 8500;
  // run first link first
  automateTabs(searchLinks[0]);

  //run subsequent links after specific timelag
  for (let i = 1; i < iterate; i++) {
    setTimeout(function () {
      automateTabs(searchLinks[i]);
    }, timelag * i);
  }
}

thirtyBtn.addEventListener("click", function () {
  searching(40);
});

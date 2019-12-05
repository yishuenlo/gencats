const tenBtn = document.querySelector('.ten');
const thirtyBtn = document.querySelector('.thirty');

// parts to form search links
let linkFront = 'https://www.bing.com/images/search?q=';
let linkEnd = '&go=Search&qs=ds&form=QBRE';

// an empty array to store links
let searchLinks = [];

// keywords for search
let searchKeywords = [
    'silly cat',
    'funny cat',
    'goofy cat',
    'cat in small box',
    'liquid cat',
    'cat in costume',
    'funny cat faces',
    'silly cat faces',
    'abyssinian cat',
    'aegean cat',
    'american curl cat',
    'american bobtail cat',
    'american shorthair cat',
    'american wirehair cat',
    'aphrodite giant cat',
    'arabian mau cat',
    'australian mist cat',
    'asian semi-longhair cat',
    'balinese cat',
    'bambino cat',
    'bengal cat',
    'birman cat',
    'bombay cat',
    'bazilian shorthair',
    'british longhair',
    'burmese cat',
    'burmilla cat',
    'california spangled',
    'chantilly-tiffany cat',
    'chartreux cat',
    'chausie cat',
    'cornish rex cat',
    'cyprus',
    'dragon li cat',
    'egyptian mau',
    'foldex cat',
    'colorpoint persian cat',
    'japanese bobtail cat',
    'Maine coon',
    'Manx cat',
    'toyger cat',
    'York chocolate cat'
];

// create a new array of links 
function genNewLink(){
    for(var i=0; i<searchKeywords.length; i++){
        let newLink = linkFront + searchKeywords[i] + linkEnd;
        searchLinks.push(newLink);
    }
}

// generate new array of links
genNewLink();

// open and closing tabs
function automateTabs(link){
    let tab = window.open(link, '_blank');
    // close tab after 2000ms
    setTimeout(function () {
        tab.close();
    }, 5000)
}

// set time lag for subsquent links
let timelag = 6000;

// function to run open and closing tabs in sequence
function searching(arr, iterate){
    // run first link first
    automateTabs(arr[0]);

    //run subsequent links after specific timelag
    for(let i = 1; i < iterate; i++){
        setTimeout(function () {
            automateTabs(arr[i]);
        }, timelag * i);
    }
};

tenBtn.addEventListener('click', function () { searching(searchLinks, 10);});
thirtyBtn.addEventListener('click', function () { searching(searchLinks, 34);});
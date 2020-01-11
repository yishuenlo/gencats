const tenBtn = document.querySelector('.ten');
const thirtyBtn = document.querySelector('.thirty');

// parts to form search links
let linkFront = 'https://www.bing.com/search?q=';
let linkEnd = '&go=Search&qs=ds&form=QBRE';

// keywords for search
let searchKeywords = [
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

// an array to store links
let searchLinks = searchKeywords.map(link => linkFront + link + linkEnd);



// initiate state of excution 
let excuted = false;
let currentTime;


//start auto search at certain time, 11am
//know current time
//if function searching has been excuted, turn off auto search
//else, keep auto search on
setInterval(function() {
    //grab fresh date at interval
    let today = new Date();
    console.log(`${today.getHours()}:${today.getMinutes()}`);

    //set current time at interval
    currentTime = `${today.getHours()}:${today.getMinutes()}`;

    //if current time is 11am and function has not been excuted
    if (currentTime == '7:5' && excuted == false) {
        //start searching
        searching(searchLinks, 3);
    }

    //if current time is 10pm and function has been excuted aleady,
    if (currentTime == '22:0' && excuted == true) {
        //refresh and set excuted to false
        excuted = false;
    }
}, 60000);


//----------- excution of searching -----------
// open and closing tabs
function automateTabs(link) {
    let tab = window.open(link, '_blank');
    // close tab after 2000ms
    setTimeout(function () {
        tab.close();
    }, 5000)
}

// set time lag for subsquent links
let timelag = 6000;

// function to run open and closing tabs in sequence
function searching(arr, iterate) {
    // run first link first
    automateTabs(arr[0]);

    //run subsequent links after specific timelag
    for (let i = 1; i < iterate; i++) {
        setTimeout(function () {
            automateTabs(arr[i]);
        }, timelag * i);
    }

    excuted = true;
};

tenBtn.addEventListener('click', function () { searching(searchLinks, 10);});
thirtyBtn.addEventListener('click', function () { searching(searchLinks, 34);});

//keep track of how long the tab has been open
//if it's longer than an hour, and excuted = false, and it's in the afternoon (hour > 11)
//run searching function 


//if the date is different, and function had been run already, reset
//if today's date !== excuted date && excuted = true;
//reset excuted to false;
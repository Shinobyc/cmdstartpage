// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    } else {
        window.open("https://www.google.com");
    }
}

// Search in duckduckgo
d = duckduckgo;
function duckduckgo(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.duckduckgo.com/?q=" + search);
    } else {
        window.open("https://www.duckduckgo.com");
    }  
}

// Search reddit
r = reddit
function reddit(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.reddit.com/r/" + search);
    }
    else {
        window.open("https://www.reddit.com");
    }
}

//Github search(!)
gits = git_search
function git_search(args){
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://github.com/search?q=" + search)
    }
    else {
        window.open("https://www.github.com/");
    }
}

git = github
function github(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://github.com/" + search)
    }
    else {
        window.open("https://www.github.com/");
    }
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}

// Manga
mg = manga
function manga(args) {
    if (args == " dex") {
        window.open("https://www.mangadex.org");
    }
    else if (args == " lib") {
            window.open("https://www.mangalib.me");
        }
        else  if (args == " read") {
                window.open("https://www.readmanga.io");
            }
            else if (args != undefined) {
                    block_log("site not found");
                }
}
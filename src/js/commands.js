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

//help command
h = help;
function help(args) {
    block_log("Список команд: google(g), clear(cls), time(clock), help(h), duckduckgo(d), textcolor(setColor), promptcolor(setPromptColor), bgcolor(setBgColor)"); 
}

d = duckduckgo;
function duckduckgo(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.duckduckgo.com/?q=" + search);
    } else {
        window.open("https://www.duckduckgo.com");
    }  
}


textcolor = setColor
function setColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--text-color", args)
        document.cookie = "textcolor=" + args
    }
}

bgcolor = setBgColor
function setBgColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--main-bg-color", args)
        document.cookie = "bgcolor=" + args
    }
}

promptcolor = setPromptColor
function setPromptColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--prompt-bg-color", args)
        document.cookie = "promptcolor=" + args
    }
}

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

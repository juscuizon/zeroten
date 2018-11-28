function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}


function init() {
    document.getElementById("header-mobile-nav-button").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
    var ele3 = document.getElementsByClassName('header-mobile-nav-button')[0];
    if (!hasClass(ele3, "active")) {
        addClass(ele3, "active");
    } else {
        removeClass(ele3, "active");
    }

    var ele4 = document.getElementsByClassName('header-mobile-nav')[0];
    if (!hasClass(ele4, "active")) {
        addClass(ele4, "active");
    } else {
        removeClass(ele4, "active");
    }

}

function init() {
    document.getElementById("header-mobile-nav-button").addEventListener("click", toggleMenu);
}

//The actual fuction
function menu() {
    var ele = document.getElementsByClassName('mobile-navigation')[0];
    if (!hasClass(ele3, "open")) {
        addClass(ele3, "open");
    } else {
        removeClass(ele3, "open");
    }

}



document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});



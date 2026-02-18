function opentab(evt, tabname){

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // hide all contents
    for (var i = 0; i < tabcontents.length; i++){
        tabcontents[i].classList.remove("active-tab");
    }

    // remove active style from all links
    for (var i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active-link");
    }

    // show selected tab
    document.getElementById(tabname).classList.add("active-tab");

    // highlight selected button
    evt.currentTarget.classList.add("active-link");
}

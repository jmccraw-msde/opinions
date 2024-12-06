//Desktop
function GoogleSearch() {
    var searchText = document.getElementById('searchInputBox').value;
    if (searchText == null) {
        return false;
    } else {
        var link = "http://www.maryland.gov/pages/search.aspx?" + "q=" + searchText + "&site=ugglyla9k1c" + "&name=Education";
        window.open(link, "_self");
        return false;
    }
}

//Mobile
function GoogleSearchMobile() {
    var searchText = document.getElementById('searchInputBoxMobile').value;
    if (searchText == null) {
        return false;
    } else {
        var link = "http://www.maryland.gov/pages/search.aspx?" + "q=" + searchText + "&site=ugglyla9k1c" + "&name=Education";
        window.open(link, "_self");
        return false;
    }
}

function onEnter(e) {
    if (e.keyCode == 13) {
        GoogleSearch();
        console.log("key press is invalid");
        return false;
    } else {
        return true;
    }
}
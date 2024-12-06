// script.js

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.radio-option');
    const resetButton = document.getElementById('resetButton');
    const radios = document.querySelectorAll('input[type="radio"]');
    let selectedOption = null; // Track the selected option

    function updateRadioState() {
        options.forEach(option => option.classList.remove('disabled'));
    }

    options.forEach(option => {
        option.addEventListener('click', function () {
            updateRadioState();
            options.forEach(opt => {
                if (opt !== option) {
                    opt.classList.add('disabled');
                }
            });
        });
    });

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            selectedOption = this.value; // Track the selected option
            updateRadioState();
        });
    });

    resetButton.addEventListener('click', function () {
        radios.forEach(radio => radio.checked = false); // Uncheck all radios
        selectedOption = null; // Reset to no selection
        updateRadioState(); // Get things back to normal
    });
});

// Desktop
function GoogleSearch() {
    const searchText = document.getElementById('searchInputBox').value.trim();
    if (!searchText) {
        return false;
    }

    // Phrase to prepend
    const prependPhrase = "before the Maryland state board";

    // Get the selected search option
    const selectedOption = document.querySelector('input[type="radio"]:checked')?.value;

    let query = '';
    if (selectedOption === 'option1') {
        // Exact phrase with separate quotation marks
        query = `"${prependPhrase}" "${searchText}"`; 
    } else if (selectedOption === 'option2') {
        // All words with AND
        const andSearch = searchText.split(/\s+/).join(' AND ');
        query = `"${prependPhrase}" AND ${andSearch}`;
    } else {
        // No option selected
        query = `"${prependPhrase}" ${searchText}`;
    }

    const link = `http://www.maryland.gov/pages/search.aspx?q=${encodeURIComponent(query)}&site=ugglyla9k1c&name=Education`;
    window.open(link, "_self");
    return false;
}

// Mobile
function GoogleSearchMobile() {
    const searchText = document.getElementById('searchInputBoxMobile').value.trim();
    if (!searchText) {
        return false;
    }

    // Phrase to prepend
    const prependPhrase = "before the Maryland state board";

    // Get the selected search option
    const selectedOption = document.querySelector('input[type="radio"]:checked')?.value;

    let query = '';
    if (selectedOption === 'option1') {
        // Exact phrase with separate quotation marks
        query = `"${prependPhrase}" "${searchText}"`; 
    } else if (selectedOption === 'option2') {
        // All words with AND
        const andSearch = searchText.split(/\s+/).join(' AND ');
        query = `"${prependPhrase}" AND ${andSearch}`;
    } else {
        // No option selected
        query = `"${prependPhrase}" ${searchText}`;
    }

    const link = `http://www.maryland.gov/pages/search.aspx?q=${encodeURIComponent(query)}&site=ugglyla9k1c&name=Education`;
    window.open(link, "_self");
    return false;
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




// document.addEventListener('DOMContentLoaded', function () {
//     const options = document.querySelectorAll('.radio-option');
//     const resetButton = document.getElementById('resetButton');
//     const radios = document.querySelectorAll('input[type="radio"]');
//     let selectedOption = 'option1'; // Default selected option

//     function updateRadioState() {
//         options.forEach(option => option.classList.remove('disabled'));
//     }

//     options.forEach(option => {
//         option.addEventListener('click', function () {
//             updateRadioState();
//             options.forEach(opt => {
//                 if (opt !== option) {
//                     opt.classList.add('disabled');
//                 }
//             });
//         });
//     });

//     radios.forEach(radio => {
//         radio.addEventListener('change', function () {
//             selectedOption = this.value; // Track the selected option
//             updateRadioState();
//         });
//     });

//     resetButton.addEventListener('click', function () {
//         radios.forEach(radio => radio.checked = false); // Uncheck all radios
//         selectedOption = 'option1'; // Reset to default
//         updateRadioState(); // Get things back to normal
//     });
// });

// //Desktop
// function GoogleSearch() {
//     const searchText = document.getElementById('searchInputBox').value.trim();
//     if (!searchText) {
//         return false;
//     }

//     // Phrase to prepend
//     const prependPhrase = "before the Maryland state board";

//     // Get the selected search option
//     const selectedOption = document.querySelector('input[type="radio"]:checked')?.value || 'option1';

//     let query = '';
//     if (selectedOption === 'option1') {
//         // Exact phrase with separate quotation marks
//         query = `"${prependPhrase}" "${searchText}"`; 
//     } else if (selectedOption === 'option2') {
//         // All words with AND
//         const andSearch = searchText.split(/\s+/).join(' AND ');
//         query = `"${prependPhrase}" AND ${andSearch}`;
//     }

//     const link = `http://www.maryland.gov/pages/search.aspx?q=${encodeURIComponent(query)}&site=ugglyla9k1c&name=Education`;
//     window.open(link, "_self");
//     return false;
// }

// //Mobile
// function GoogleSearchMobile() {
//     const searchText = document.getElementById('searchInputBoxMobile').value.trim();
//     if (!searchText) {
//         return false;
//     }

//     // Phrase to prepend
//     const prependPhrase = "before the Maryland state board";

//     // Get the selected search option
//     const selectedOption = document.querySelector('input[type="radio"]:checked')?.value || 'option1';

//     let query = '';
//     if (selectedOption === 'option1') {
//         // Exact phrase with separate quotation marks
//         query = `"${prependPhrase}" "${searchText}"`; 
//     } else if (selectedOption === 'option2') {
//         // All words with AND
//         const andSearch = searchText.split(/\s+/).join(' AND ');
//         query = `"${prependPhrase}" AND ${andSearch}`;
//     }

//     const link = `http://www.maryland.gov/pages/search.aspx?q=${encodeURIComponent(query)}&site=ugglyla9k1c&name=Education`;
//     window.open(link, "_self");
//     return false;
// }

// function onEnter(e) {
//     if (e.keyCode == 13) {
//         GoogleSearch();
//         console.log("key press is invalid");
//         return false;
//     } else {
//         return true;
//     }
// }



// document.addEventListener('DOMContentLoaded', function () {
//     const options = document.querySelectorAll('.radio-option');
//     const resetButton = document.getElementById('resetButton');
//     const radios = document.querySelectorAll('input[type="radio"]');
//     let selectedOption = 'option1'; // Default selected option

//     function updateRadioState() {
//         options.forEach(option => option.classList.remove('disabled'));
//     }

//     options.forEach(option => {
//         option.addEventListener('click', function () {
//             updateRadioState();
//             options.forEach(opt => {
//                 if (opt !== option) {
//                     opt.classList.add('disabled');
//                 }
//             });
//         });
//     });

//     radios.forEach(radio => {
//         radio.addEventListener('change', function () {
//             selectedOption = this.value; // Track the selected option
//             updateRadioState();
//         });
//     });

//     resetButton.addEventListener('click', function () {
//         radios.forEach(radio => radio.checked = false); // Uncheck all radios
//         selectedOption = 'option1'; // Reset to default
//         updateRadioState(); // Get things back to normal
//     });
// });

// //Desktop
// function GoogleSearch() {
//     const searchText = document.getElementById('searchInputBox').value.trim();
//     if (!searchText) {
//         return false;
//     }

//     // Get the selected search option
//     const selectedOption = document.querySelector('input[type="radio"]:checked')?.value || 'option1';

//     let query = '';
//     if (selectedOption === 'option1') {
//         // Exact phrase
//         query = `"${searchText}"`; 
//     } else if (selectedOption === 'option2') {
//         // All words with AND
//         query = searchText.split(/\s+/).join(' AND ');
//     }

//     const link = `http://www.maryland.gov/pages/search.aspx?q=${encodeURIComponent(query)}&site=ugglyla9k1c&name=Education`;
//     window.open(link, "_self");
//     return false;
// }

// //Mobile
// function GoogleSearchMobile() {
//     const searchText = document.getElementById('searchInputBoxMobile').value.trim();
//     if (!searchText) {
//         return false;
//     }

//     // Get the selected search option
//     const selectedOption = document.querySelector('input[type="radio"]:checked')?.value || 'option1';

//     let query = '';
//     if (selectedOption === 'option1') {
//         // Exact phrase
//         query = `"${searchText}"`; 
//     } else if (selectedOption === 'option2') {
//         // All words with AND
//         query = searchText.split(/\s+/).join(' AND ');
//     }

//     const link = `http://www.maryland.gov/pages/search.aspx?q=${encodeURIComponent(query)}&site=ugglyla9k1c&name=Education`;
//     window.open(link, "_self");
//     return false;
// }

// function onEnter(e) {
//     if (e.keyCode == 13) {
//         GoogleSearch();
//         console.log("key press is invalid");
//         return false;
//     } else {
//         return true;
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const options = document.querySelectorAll('.radio-option');
//     const resetButton = document.getElementById('resetButton');
//     const radios = document.querySelectorAll('input[type="radio"]');

//     function updateRadioState() {
//         options.forEach(option => option.classList.remove('disabled'));
//     }

//     options.forEach(option => {
//         option.addEventListener('click', function () {
//             updateRadioState();
//             options.forEach(opt => {
//                 if (opt !== option) {
//                     opt.classList.add('disabled');
//                 }
//             });
//         });
//     });

//     radios.forEach(radio => {
//         radio.addEventListener('change', function () {
//             updateRadioState();
//         });
//     });

//     resetButton.addEventListener('click', function () {
//         radios.forEach(radio => radio.checked = false); // Uncheck all radios
//         updateRadioState(); // Get things back to normal
//     });
// });

// //Desktop
// function GoogleSearch() {
//     var searchText = document.getElementById('searchInputBox').value;
//     if (searchText == null) {
//         return false;
//     } else {
//         var link = "http://www.maryland.gov/pages/search.aspx?q=\"" + searchText + "\"&site=ugglyla9k1c&name=Education";
//         window.open(link, "_self");
//         return false;
//     }
// }

// //Mobile
// function GoogleSearchMobile() {
//     var searchText = document.getElementById('searchInputBoxMobile').value;
//     if (searchText == null) {
//         return false;
//     } else {
//         var link = "http://www.maryland.gov/pages/search.aspx?q=\"" + searchText + "\"&site=ugglyla9k1c&name=Education";

//         window.open(link, "_self");
//         return false;
//     }
// }

// function onEnter(e) {
//     if (e.keyCode == 13) {
//         GoogleSearch();
//         console.log("key press is invalid");
//         return false;
//     } else {
//         return true;
//     }
// }
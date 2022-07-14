
console.log(reddit)

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// FORM EVENT LISTENER.
searchForm.addEventListener('submit', e => {

    // GET SEARCH TERM
    const searchTerm = searchInput.value;

    // CHECK INPUT
    if(searchTerm === '') {
        // SHOW MESSAGE
        showMessage('please add a search term', 'alert-danger');
    }

    // Clear Input
    searchInput.value = '';

    // Search Reddit
        let data = reddit.search(searchTerm);


            console.log(data);
         
    e.preventDefault();
});

// SHOW MESSAGE
function showMessage (message, className){
//  CREATE DIV
const div = document.createElement('div');

// ADD CLASSES
div.className = `alert ${className}`;

// ADD TEXT
div.appendChild(document.createTextNode(message));

// Get Parent
const searchContainer = document.getElementById('search-container');

// Get Search
const search = document.getElementById('search');

// Insert Message
searchContainer.insertBefore(div, search);

// Timeout Alert
setTimeout(() => document.querySelector('.alert').remove(), 3000);
}


// TRUNCATE TEXT
function truncateText (text, limit) {
    const shortened = text.indexOf('', limit);
    if (shortened == -1) return text;
    return text.substring(0, shortened);
}
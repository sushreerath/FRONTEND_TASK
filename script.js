const menu = document.querySelector('#menu');
console.log(menu);
const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

menu.addEventListener('click', function () 
  {sidebar.classList.toggle('show-sidebar');
});

//for search bar
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
   if(searchInput.value.length){
     location.href = searchLink + searchInput.value;
     console.log(searchInput);
   }
});

// Select all category buttons
const categoryButtons = document.querySelectorAll('.category-btn');

// Function to filter videos by category
function filterVideos(category) {
    const videos = document.querySelectorAll('.video');
    
    videos.forEach(video => {
        if (category === 'All') {
            video.style.display = 'block'; // Show all videos
        } else {
            const videoCategory = video.dataset.category;
            if (videoCategory === category) {
                video.style.display = 'block'; // Show videos belonging to the selected category
            } else {
                video.style.display = 'none'; // Hide videos not belonging to the selected category
            }
        }
    });
}

// Add click event listener to each category button
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.textContent; // Get the category text
        filterVideos(category); // Filter videos based on the selected category
    });
});
// Select the loader element
const loader = document.querySelector('.loader');

// Show loader function
function showLoader() {
    loader.style.display = 'block';
}

// Hide loader function
function hideLoader() {
    loader.style.display = 'none';
}

// Simulate data retrieval (replace this with your actual data retrieval logic)
function fetchData() {
    // Show loader when data retrieval starts
    showLoader();

    // Simulate data retrieval delay (replace this with your actual data retrieval function)
    setTimeout(function() {
        // Hide loader when data retrieval is complete
        hideLoader();
    }, 2000); // Simulated delay of 2 seconds
}

// Call fetchData function to initiate data retrieval
fetchData();

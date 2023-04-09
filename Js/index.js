// // execute a event listner just after the page loads
// window.dispatchEvent(new Event('resize'));
// const bfrbutton = document.getElementById('navbarNav');
// // add event listener to window to toggle classes on resize
// window.addEventListener('resize', () => {
//     // add classes bfr
//     if (window.innerWidth > 768) {
//         bfrbutton.classList.add('d-flex');
//         bfrbutton.classList.add('justify-content-end');
//     } else {
//         bfrbutton.classList.remove('d-flex');
//         bfrbutton.classList.remove('justify-content-end');
//     }
// });

// code
function saveItem() {
    // Get the clicked button
    const button = event.target;

    // Get the catering service name from the page
    const cateringService = document.querySelector('h1#name').textContent;

    // Get the catering style from the button
    const cateringStyle = button.textContent.split(' - ')[0];

    // Get the price from the button and convert it to a number
    let price = Number(button.textContent.split(' - INR ')[1].replace(/,/g, '')) + 1;


    // Get existing selected items from local storage (or an empty array if none exist)
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];

    // Add new selected item to the array
    const selectedItem = { cateringService, cateringStyle, price };
    selectedItems.push(selectedItem);

    // Save the updated array in local storage
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
}


function lol() {
    // display all stored local storage items in console
    // for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     console.log(key, localStorage.getItem(key));
    // }


    // Get the array of selected items from local storage
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    console.log(selectedItems);

    // Loop through each item in the array and display its properties
    selectedItems.forEach((selectedItem, index) => {
        console.log(`Selected item ${index + 1}:`);
        console.log(`Catering service: ${selectedItem.cateringService}`);
        console.log(`Catering style: ${selectedItem.cateringStyle}`);
        console.log(`Price: ${selectedItem.price}`);
    });
}

function clear() {
    localStorage.clear();
}

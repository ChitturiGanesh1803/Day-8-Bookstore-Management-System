// document.addEventListener('DOMContentLoaded', function () {
//     const addBookForm = document.getElementById('addBookForm');
//     const bookListing = document.querySelector('.book-listing');

//     addBookForm.addEventListener('submit', function (e) {
//         e.preventDefault();
        
//         const title = document.getElementById('title').value;
//         const author = document.getElementById('author').value;
//         const genre = document.getElementById('genre').value;
//         const price = document.getElementById('price').value;
//         const quantity = document.getElementById('quantity').value;

//         // Create new book card
//         const bookCard = document.createElement('div');
//         bookCard.classList.add('book-card');
//         bookCard.innerHTML = `
//             <h3>${title}</h3>
//             <p><strong>Author:</strong> ${author}</p>
//             <p><strong>Genre:</strong> ${genre}</p>
//             <p><strong>Price:</strong> $${price}</p>
//             <p><strong>Quantity:</strong> ${quantity}</p>
//         `;

//         // Append book card to book listing
//         bookListing.appendChild(bookCard);

//         // Reset form
//         addBookForm.reset();
//     });
// });

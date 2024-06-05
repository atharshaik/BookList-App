// Book Class :represnts a book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class : handle UI tasks
class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title:'Books',
                author: 'athar',
                isbn: '123456',
            },
            {
                title:'Books-1',
                author: 'athar',
                isbn: '123456',
            },
            {
                title:'Books-2',
                author: 'athar',
                isbn: '123456',
            }
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class="btn btn-danger btn-sm delete"></a></td>
        `;
        list.appendChild(row);
            
    }
}
// store class: Handles storage

//Event  : Display books

// Event : Add book 

// Event : remove Book

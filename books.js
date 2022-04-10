function findAuthorById(authors, id) {
  let results = authors.find((author) => id === author.id)
  
  return results 
}

function findBookById(books, id) {
  
  let results = books.find((book) => id === book.id)
  
  return results 
}

function partitionBooksByBorrowedStatus(books) {
  
  let returned = books.filter((book) => book.borrows[0].returned)
  
  let notReturned = books.filter((book) => !book.borrows[0].returned)
  
  return [notReturned, returned ]
}

function getBorrowersForBook(book, accounts) {
  let borrowedBookList =[]
  
  let booksBorrowed = book.borrows
  
  let results = booksBorrowed.forEach((borrow) => {accounts.forEach((account) => {
    if(account.id === borrow.id){account.returned = borrow.returned; borrowedBookList.push(account)}
  })
                                                  
  })
  
  return borrowedBookList.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

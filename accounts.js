function findAccountById(accounts, id) {
  const result = accounts.find((personsId) => personsId.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((lastNameA, lastNameB) => lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1) 
  return result
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0
  
  const accountId = account.id
  
  let loop = books.forEach((borrowedBook) => borrowedBook.borrows.forEach((isBorrowed) => (accountId === isBorrowed.id) && count++))
  
  return count
  
}

function getBooksPossessedByAccount(account, books, authors) {
  
  let possessedBooks = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id)
  
   let bookDetail = possessedBooks.map((detail) => ({ 
  ...detail, author: authors.find((author) => author.id === detail.authorId)
  }))
  
  return bookDetail
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

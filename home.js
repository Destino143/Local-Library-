function getTotalBooksCount(books) {
  let results = books.length
  
  return results 
}

function getTotalAccountsCount(accounts) {
  let results = accounts.length
  
  return results
}

function getBooksBorrowedCount(books) {
  
  let borrowedBooks = books.reduce((acc, book) =>{
    return (acc + (!book.borrows[0].returned))
  }, 0) 
   
  return borrowedBooks
}

//Helper Function
function sortCount(array) {
return array.sort((a, b) => b.count - a.count)
}

function getMostCommonGenres(books) {
   const genre = {}
  for (let i in books) {const book = books[i]
    if (genre[book.genre]) {
      genre[book.genre]++
    } else {
      genre[book.genre] = 1
    }
  }
  
  let countGenre = []
  for (let i in genre) { countGenre.push({ name: i, count: genre[i] })
                        
  }
  countGenre = sortCount(countGenre)
    .filter((item, i) => i < 5)
  
  return countGenre
  
}

function getMostPopularBooks(books) {
  const result = books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  return sortCount(result)
    .filter((item, i) => i < 5)
}

function getMostPopularAuthors(books, authors) {
      let authorsResult = [];

  let popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
     popularAuthor.forEach((book) => {

      let author = authors.find((author) => author.id === book.authorId);

      authorsResult.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });

  return (authorsResult.sort((countA, countB) => countA.count < countB.count ? 1 : -1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

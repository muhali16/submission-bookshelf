const books = require('./book');
const getBook = (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      books: books.map((buku) => ({
        name: buku.name,
        id: buku.id,
        publisher: buku.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

module.exports = getBook;

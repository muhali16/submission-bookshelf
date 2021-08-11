const books = require('./book');
const getBook = (request, h) => {
  const {reading, finished, name} = request.query;
  if (reading) {
    const bookFil = books.filter((b) => Number(b.reading) === Number(reading));
    const response = h.response({
      status: 'success',
      data: {
        books: bookFil.map((itm) => ({
          id: itm.id,
          name: itm.name,
          publisher: itm.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  } else if (finished) {
    const bookFil = books.filter((b) => Number(b.finished)===Number(finished));
    const response = h.response({
      status: 'success',
      data: {
        books: bookFil.map((itm) => ({
          id: itm.id,
          name: itm.name,
          publisher: itm.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  } else if (name) {
    const bookFil = books.filter((b) => {
      return b.name.toLowerCase().includes(name.toLowerCase());
    });
    const response = h.response({
      status: 'success',
      data: {
        books: bookFil.map((itm) => ({
          id: itm.id,
          name: itm.name,
          publisher: itm.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }
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

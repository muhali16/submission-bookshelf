/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const postBook = require('./postBooks');
const getBook = require('./getBooks');
const getBooksId = require('./getBooksId');
const editBooks = require('./editBook');
const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: postBook,
    }, {
        method: 'GET',
        path: '/books',
        handler: getBook,
    }, {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksId,
    }, {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBooks,
    },
];

module.exports = routes;

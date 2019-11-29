export const axios = require('axios');
export const _ = require('lodash');

export const config = {
  api: 'https://my-json-server.typicode.com/andmade/e28-p3-api/events'
};

export function addToBookmarks(event) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  if (!bookmarks) {
    bookmarks = [];
  }
  bookmarks.push(event);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

export function removeFromBookmarks(event) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  bookmarks = _.pull(bookmarks, event);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

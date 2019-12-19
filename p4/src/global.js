export const config = {
  api: 'https://e28-p4-andmade.firebaseio.com/'
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

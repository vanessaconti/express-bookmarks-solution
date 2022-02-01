const bookmarks = require("../controllers/bookmarkController");
const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
  try {
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    console.log(allBookmarks);
    return allBookmarks;
  } catch (error) {
    return error;
  }
};

const getBookmark = async (id) => {
  try {
    const oneBookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
    return oneBookmark;
  } catch (error) {
    return error;
  }
};

const createBookmark = async (bookmark) => {
    try {
        const newBookmark = await db.one("INSERT INTO bookmarks (name, url, category, isFavorite) VALUES($1, $2, $3, $4) RETURNING *", [bookmark.name, bookmark.url,bookmark.category, bookmark.isFavorite]);
        console.log(newBookmark)
        return newBookmark;
    }catch (error){
        return error;
    }
}

module.exports = {
  getAllBookmarks,
  getBookmark,
  createBookmark
};

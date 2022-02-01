const express = require("express");
const bookmarks = express.Router();
const {getAllBookmarks, getBookmark, createBookmark} = require('../queries/bookmarks')
const {checkName, checkBoolean} = require('../validations/checkBookmarks')

// INDEX
bookmarks.get("/", async (req, res) => {
  const allBookmarks = await getAllBookmarks();
  if (allBookmarks[0]) {
    res.status(200).json(allBookmarks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
bookmarks.get("/:id", async (req, res) => {
  const {id} = req.params;
  const bookmark = await getBookmark(id);
  if (bookmark) {
    res.json(bookmark);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE

bookmarks.post("/", checkBoolean, checkName, async (req, res) => {
  try {
    const bookmark = await createBookmark(req.body)
    res.json(bookmark);
  }catch (error) {
    res.status(400).json({error: error});
  }
});

// UPDATE
// bookmarks.put("/:arrayIndex", async (req, res) => {
//   bookmarkArray[req.params.arrayIndex] = req.body;
//   res.status(200).json(bookmarkArray[req.params.arrayIndex]);
// });


// DELETE
// bookmarks.delete("/:indexArray", (req, res) => {
//   const deletedBookMark = bookmarkArray.splice(req.params.indexArray, 1);
//   res.status(200).json(deletedBookMark);
// });

module.exports = bookmarks;

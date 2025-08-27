const express = require('express');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
  // Filter the users array for any user with the same username
  let userswithsamename = users.filter((user) => {
      return user.username === username;
  });
  // Return true if any user with the same username is found, otherwise false
  if (userswithsamename.length > 0) {
      return true;
  } else {
      return false;
  }
}

// Add a book review
regd_users.put("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const review = req.query.review; // Review from query parameter
  const username = req.user.data; // Username from session

  // Check if user is logged in
  if (!username) {
    return res.status(401).send({ error: "User not logged in" });
  }

  // Check if review is provided
  if (!review) {
    return res.status(400).send({ error: "Review is required" });
  }

  // Find the book with the matching ISBN
  const book = Object.values(books).find(book => book.isbn === isbn);

  if (!book) {
    return res.status(404).send({ error: "Book not found" });
  }

  // Add or modify the review
  book.reviews[username] = review; // Store or update review under username key

  res.status(200).send({ message: "Review added or updated successfully", reviews: book.reviews[username]});
});

// DELETE route to remove a user's review for a specific ISBN
regd_users.delete("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const username = req.user.data; // Username from session

  // Check if user is logged in
  if (!username) {
    return res.status(401).send({ error: "User not logged in" });
  }

  // Find the book with the matching ISBN
  const book = Object.values(books).find(book => book.isbn === isbn);

  if (!book) {
    return res.status(404).send({ error: "Book not found" });
  }

  // Check if the user has a review for this book
  if (!book.reviews[username]) {
    return res.status(404).send({ error: "No review found for this user" });
  }

  // Delete the user's review
  delete book.reviews[username];

  res.status(200).send({ message: "Review deleted successfully", reviews: book.reviews[username] });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;

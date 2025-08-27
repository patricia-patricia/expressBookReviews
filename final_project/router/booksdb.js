const express = require('express');

const public_users = express.Router();

let books = {
      1: {"isbn": "978-0-316-48297-4", "author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {"bob": "OK"} },
      2: {"isbn": "978-1-574-81306-7", "author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
      3: {"isbn": "978-2-709-12548-3", "author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
      4: {"isbn": "978-3-892-76401-5", "author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
      5: {"isbn": "978-4-126-39587-6", "author": "Unknown","title": "The Book Of Job", "reviews": {} },
      6: {"isbn": "978-5-687-24913-2", "author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
      7: {"isbn": "978-6-493-87125-0", "author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
      8: {"isbn": "978-7-258-39614-9", "author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
      9: {"isbn": "978-8-374-15982-1", "author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
      10: {"isbn": "978-9-562-78134-3", "author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
}

module.exports=books;

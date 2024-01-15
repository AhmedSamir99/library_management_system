const path = require("path");
const Book = require('../models/entities/book'); // Adjust the path based on your project structure
const models = require(path.join(__dirname, "../models"));
                        
const bookController = {
    // Create a new book
    async createBook(req, res) {
        try {
            const { title, author, isbn, availableQuantity, shelfLocation } = req.body;
            const newBook = await Book.create({ title, author, isbn, availableQuantity, shelfLocation });
            res.status(201).json(newBook);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Retrieve all books
    async getAllBooks(req, res) {
        try {
            const books = await models.Book.findAll();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Retrieve a single book by ID
    async getBookById(req, res) {
        try {
            const book = await Book.findByPk(req.params.id);
            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update a book
    async updateBook(req, res) {
        try {
            const updatedBook = await Book.update(req.body, {
                where: { id: req.params.id }
            });
            if (updatedBook[0]) {
                res.status(200).json({ message: 'Book updated successfully' });
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete a book
    async deleteBook(req, res) {
        try {
            const deleted = await Book.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(200).json({ message: 'Book deleted successfully' });
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = bookController;

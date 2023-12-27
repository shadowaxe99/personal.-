const Blog = require('../models/Blog');
const { validationResult } = require('express-validator');

// Handle fetching all blog posts
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Handle fetching a single blog post by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Handle creating a new blog post
exports.createBlog = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            tags: req.body.tags,
            publishedDate: req.body.publishedDate
        });

        const blog = await newBlog.save();
        res.json(blog);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Handle updating a blog post
exports.updateBlog = async (req, res) => {
    const { title, content, author, tags, publishedDate } = req.body;
    const blogFields = { title, content, author, tags, publishedDate };

    try {
        let blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }

        blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { $set: blogFields },
            { new: true }
        );

        res.json(blog);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Handle deleting a blog post
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }

        await blog.remove();
        res.json({ msg: 'Blog removed' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        res.status(500).send('Server Error');
    }
};
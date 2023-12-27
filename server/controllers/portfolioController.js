const Portfolio = require('../models/Portfolio');

const getPortfolio = async (req, res) => {
  try {
    const portfolioItems = await Portfolio.find({});
    res.status(200).json(portfolioItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio', error });
  }
};

const getPortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;
    const portfolioItem = await Portfolio.findById(id);
    if (!portfolioItem) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    res.status(200).json(portfolioItem);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio item', error });
  }
};

const createPortfolioItem = async (req, res) => {
  try {
    const newPortfolioItem = new Portfolio(req.body);
    const savedPortfolioItem = await newPortfolioItem.save();
    res.status(201).json(savedPortfolioItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating portfolio item', error });
  }
};

const updatePortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPortfolioItem = await Portfolio.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPortfolioItem) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    res.status(200).json(updatedPortfolioItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating portfolio item', error });
  }
};

const deletePortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPortfolioItem = await Portfolio.findByIdAndDelete(id);
    if (!deletedPortfolioItem) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    res.status(200).json({ message: 'Portfolio item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting portfolio item', error });
  }
};

module.exports = {
  getPortfolio,
  getPortfolioItem,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem
};
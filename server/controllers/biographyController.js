const Biography = require('../models/Biography');

// Handle index actions
exports.index = function (req, res) {
    Biography.get(function (err, biographies) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Biographies retrieved successfully",
            data: biographies
        });
    });
};

// Handle create biography actions
exports.new = function (req, res) {
    var biography = new Biography();
    biography.name = req.body.name ? req.body.name : biography.name;
    biography.description = req.body.description;
    biography.timeline = req.body.timeline;
    // save the biography and check for errors
    biography.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New biography created!',
            data: biography
        });
    });
};

// Handle view biography info
exports.view = function (req, res) {
    Biography.findById(req.params.biography_id, function (err, biography) {
        if (err)
            res.send(err);
        res.json({
            message: 'Biography details loading..',
            data: biography
        });
    });
};

// Handle update biography info
exports.update = function (req, res) {
    Biography.findById(req.params.biography_id, function (err, biography) {
        if (err)
            res.send(err);
        biography.name = req.body.name ? req.body.name : biography.name;
        biography.description = req.body.description;
        biography.timeline = req.body.timeline;
        // save the biography and check for errors
        biography.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Biography Info updated',
                data: biography
            });
        });
    });
};

// Handle delete biography
exports.delete = function (req, res) {
    Biography.remove({
        _id: req.params.biography_id
    }, function (err, biography) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Biography deleted'
        });
    });
};
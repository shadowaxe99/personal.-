const TimelineBudget = require('../models/TimelineBudget');

// Handle index actions
exports.index = function (req, res) {
    TimelineBudget.get(function (err, timelineBudget) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Timeline and Budget retrieved successfully",
            data: timelineBudget
        });
    });
};

// Handle create timelineBudget actions
exports.new = function (req, res) {
    var timelineBudget = new TimelineBudget();
    timelineBudget.title = req.body.title ? req.body.title : timelineBudget.title;
    timelineBudget.description = req.body.description;
    timelineBudget.allocatedBudget = req.body.allocatedBudget;
    timelineBudget.timeline = req.body.timeline;

    // save the timelineBudget and check for errors
    timelineBudget.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New timelineBudget created!',
            data: timelineBudget
        });
    });
};

// Handle view timelineBudget info
exports.view = function (req, res) {
    TimelineBudget.findById(req.params.timelineBudget_id, function (err, timelineBudget) {
        if (err)
            res.send(err);
        res.json({
            message: 'TimelineBudget details loading..',
            data: timelineBudget
        });
    });
};

// Handle update timelineBudget info
exports.update = function (req, res) {
    TimelineBudget.findById(req.params.timelineBudget_id, function (err, timelineBudget) {
        if (err)
            res.send(err);

        timelineBudget.title = req.body.title ? req.body.title : timelineBudget.title;
        timelineBudget.description = req.body.description;
        timelineBudget.allocatedBudget = req.body.allocatedBudget;
        timelineBudget.timeline = req.body.timeline;

        // save the timelineBudget and check for errors
        timelineBudget.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'TimelineBudget Info updated',
                data: timelineBudget
            });
        });
    });
};

// Handle delete timelineBudget
exports.delete = function (req, res) {
    TimelineBudget.remove({
        _id: req.params.timelineBudget_id
    }, function (err, timelineBudget) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'TimelineBudget deleted'
        });
    });
};
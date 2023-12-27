```javascript
const Entrepreneurship = require('../models/Entrepreneurship');

// Handle index actions
exports.index = function (req, res) {
    Entrepreneurship.get(function (err, entrepreneurship) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Entrepreneurship details retrieved successfully",
            data: entrepreneurship
        });
    });
};

// Handle create entrepreneurship actions
exports.new = function (req, res) {
    var entrepreneurship = new Entrepreneurship();
    entrepreneurship.dropShippingBusiness = req.body.dropShippingBusiness;
    entrepreneurship.creatorEdgeMedia = req.body.creatorEdgeMedia;
    entrepreneurship.sportsManagement = req.body.sportsManagement;
    entrepreneurship.cryptocurrencyAndFrax = req.body.cryptocurrencyAndFrax;
    entrepreneurship.talentXEntertainment = req.body.talentXEntertainment;
    entrepreneurship.networkingProwess = req.body.networkingProwess;
    entrepreneurship.mentorshipAndAdvice = req.body.mentorshipAndAdvice;
    entrepreneurship.handlingControversies = req.body.handlingControversies;
    entrepreneurship.continuedBusinessFocus = req.body.continuedBusinessFocus;

    // save the entrepreneurship and check for errors
    entrepreneurship.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New entrepreneurship created!',
            data: entrepreneurship
        });
    });
};

// Handle view entrepreneurship info
exports.view = function (req, res) {
    Entrepreneurship.findById(req.params.entrepreneurship_id, function (err, entrepreneurship) {
        if (err)
            res.send(err);
        res.json({
            message: 'Entrepreneurship details loading..',
            data: entrepreneurship
        });
    });
};

// Handle update entrepreneurship info
exports.update = function (req, res) {
    Entrepreneurship.findById(req.params.entrepreneurship_id, function (err, entrepreneurship) {
        if (err)
            res.send(err);

        entrepreneurship.dropShippingBusiness = req.body.dropShippingBusiness ? req.body.dropShippingBusiness : entrepreneurship.dropShippingBusiness;
        entrepreneurship.creatorEdgeMedia = req.body.creatorEdgeMedia ? req.body.creatorEdgeMedia : entrepreneurship.creatorEdgeMedia;
        entrepreneurship.sportsManagement = req.body.sportsManagement ? req.body.sportsManagement : entrepreneurship.sportsManagement;
        entrepreneurship.cryptocurrencyAndFrax = req.body.cryptocurrencyAndFrax ? req.body.cryptocurrencyAndFrax : entrepreneurship.cryptocurrencyAndFrax;
        entrepreneurship.talentXEntertainment = req.body.talentXEntertainment ? req.body.talentXEntertainment : entrepreneurship.talentXEntertainment;
        entrepreneurship.networkingProwess = req.body.networkingProwess ? req.body.networkingProwess : entrepreneurship.networkingProwess;
        entrepreneurship.mentorshipAndAdvice = req.body.mentorshipAndAdvice ? req.body.mentorshipAndAdvice : entrepreneurship.mentorshipAndAdvice;
        entrepreneurship.handlingControversies = req.body.handlingControversies ? req.body.handlingControversies : entrepreneurship.handlingControversies;
        entrepreneurship.continuedBusinessFocus = req.body.continuedBusinessFocus ? req.body.continuedBusinessFocus : entrepreneurship.continuedBusinessFocus;

        // save the entrepreneurship and check for errors
        entrepreneurship.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Entrepreneurship Info updated',
                data: entrepreneurship
            });
        });
    });
};

// Handle delete entrepreneurship
exports.delete = function (req, res) {
    Entrepreneurship.remove({
        _id: req.params.entrepreneurship_id
    }, function (err, entrepreneurship) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Entrepreneurship deleted'
        });
    });
};
```
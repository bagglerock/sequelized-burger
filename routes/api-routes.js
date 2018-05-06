var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.burgers.findAll().then(function(data) {
            var hbsObject = {
                burger: data
              };
            res.render("index", hbsObject);
        })
    });

    app.post("/api/burgers", function (req, res) {
        var newBurger = req.body;
        db.burgers.create({
          burger: newBurger.name
        }).then(function(burger){
            res.json({
                id: burger.insertId
            });
        }).catch(function(err){res.json(err)})
    });

    app.put("/api/burgers/:id", function (req, res) {
          
          db.burgers.update(req.body, {
            where:{
              id: req.params.id
            }
          }).then(function(data){
            res.json(data);
          })
    });

    app.delete("/api/burgers/:id", function (req, res) {
        db.burgers.destroy({
            where:{
              id: req.params.id
            }
          }).then(function(data){
            res.json(data);
          })
    });
}
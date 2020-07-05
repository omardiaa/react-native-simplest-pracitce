const MySchema = require("../schemas/schema1");
const router = require("express").Router();

router.route("/").get((req, res) => {
  MySchema.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const newElement = new MySchema();
  newElement.name = req.body.name;
  newElement.age = req.body.age;

  newElement
    .save()
    .then(() => {
      res.send("Added successfully");
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
});

module.exports = router;

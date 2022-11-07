const database = require("./database");

const getUserList = (req, res) => {
  database.query("SELECT * FROM users").then((i) => {
    res.status(200).json(i[0]);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database.query(`SELECT * FROM users WHERE id=${id}`).then((i) => {
    if (i[0][0]) {
      res.status(200).json(i[0][0]);
    } else {
      res.status(404).json("no data found");
    }
  });
};

module.exports = {
  getUserList,
  getUserById,
};

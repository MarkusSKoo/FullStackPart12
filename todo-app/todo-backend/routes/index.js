const express = require('express');
const router = express.Router();
const { get } = require('../redis/index')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET added todos count. */
router.get('/statistics', async (_, res) => {
  const count = await get("added_todos")
  if (count === null) {
    res.send({ "added_todos": 0 })
  } else {
  const countAsNumber = Number(count)
  res.send({ "added_todos": countAsNumber });
  }
});

module.exports = router;

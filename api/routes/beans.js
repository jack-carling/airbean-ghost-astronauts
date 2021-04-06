const { Router } = require('express');
const router = new Router();
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');
const db = low(adapter);

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});

router.post('/', async (req, res) => {
    const date = req.query.date;
    const total = req.query.total;
    const email = req.query.email;

    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
    }

    const data = {date, total, email, purchaseNum: order.orderNr};
    await db.get('purchases').push(data).write();

    setTimeout(() => {
        res.send(order);
    }, 2000);
});

router.post('/profiles', async (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    const exists = await db.get('profiles').find({email: email}).value();
    const response = {};
    if (exists !== undefined) {
      await db.get('profiles').find({email: email}).assign({name: name}).write();
      response.success = true;
      response.message = 'E-mail exists, name updated.';
    } else {
      const data = {name, email};
      await db.get('profiles').push(data).write();
      response.success = true;
      response.message = 'E-mail doesn\'t exist, profile created.';
    }
    res.send(response);
})

router.get('/purchases', async (req, res) => {
  const email = req.query.email;
  const data = await db.get('purchases').filter({email: email}).value();
  res.send(data);
})

router.get('/key', (req, res) => {
    const key = {
        key: uuid()
    }
    res.send(JSON.stringify(key));
})

module.exports = router
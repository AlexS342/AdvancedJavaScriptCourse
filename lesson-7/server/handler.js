const fs = require('fs');
const cart = require('./cart');


const handler = (req, res, action, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            let newCart = cart[action](JSON.parse(data), req);
            fs.writeFile(file, newCart, (err) => {
                if (err) {
                    res.send(JSON.stringify({ result: 0, text: err }));
                } else {
                    res.send(JSON.stringify({ result: 1, text: 'SUCCESS' }));
                }
            });
        }
    })
};

module.exports = handler;
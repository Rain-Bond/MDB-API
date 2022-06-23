const {OMDB_ADDRESS, OMDB_API_KEY} = require("../../config");
const axios = require('axios');

exports.get_all_bySearch = (req, res) => {
    if (!req.query) {
        res.status.send("Wrong request ");
    }
    const {title, type} = req.query;
    const URL = `${OMDB_ADDRESS}?${OMDB_API_KEY}&s=${title}&type=${type}`;
    axios.get(URL).then(response => {
        if (!response.data.Response) {
            throw new Error(response.data.Error);
        } else {
            res.status(200).send(response.data);
        }
    }).catch(err => {
        if (err.response) {
           console.log(err.response.status)
           console.log(err.response.data)
        }
    });
}

exports.get_one_byID = (req, res) => {

    const id = req.params.id;
    const URL = `${OMDB_ADDRESS}?${OMDB_API_KEY}&i=${id}`;
    axios.get(URL).then(response => {
        res.status(200).send(response.data);
    }).catch(err => {
        if (err.response) {
           console.log(err.response.status)
           console.log(err.response.data)
        }
    });
}
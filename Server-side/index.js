const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.APP_PORT || 8000


app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.APP_DB_USER}:${process.env.APP_DB_PASS}@cluster0.yrwhe.mongodb.net/go4garage?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log("connect err:", err)
    const userCollection = client.db("go4garage").collection("users");
    const vendorCollection = client.db("go4garage").collection("vendors");
    const productCollection = client.db("go4garage").collection("products");

    app.post('/user/registration', (req, res) => {
        const { userName, password } = req.body
        userCollection.find({ userName: userName })
            .toArray((err, data) => {
                if (data.length >= 1) {
                    res.json({
                        status: 409,
                        message: "UserName already existing"
                    })
                } else {
                    const accessToken = jwt.sign({ userName: userName }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
                    // password srote in database by hashing
                    bcrypt.hash(password, 10).then(hash => {
                        userCollection.insertOne({ userName: userName, password: hash })
                            .then(result => {
                                res.json({
                                    status: 200,
                                    message: "user registration successfully",
                                    accessToken
                                })
                            })
                    })
                }
            })
    })

    app.post('/vendor/registration', (req, res) => {
        const { userName, password } = req.body
        vendorCollection.find({ userName: userName })
            .toArray((err, data) => {
                if (data.length >= 1) {
                    res.json({
                        status: 409,
                        message: "UserName already existing"
                    })
                } else {
                    const accessToken = jwt.sign({ userName: userName }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
                    // password srote in database by hashing
                    bcrypt.hash(password, 10).then(hash => {
                        vendorCollection.insertOne({ userName: userName, password: hash })
                            .then(result => {
                                res.json({
                                    status: 200,
                                    message: "vendor registration successfully",
                                    accessToken
                                })
                            })
                    })
                }
            })
    })

    app.post('/user/login', (req, res) => {
        const { userName, password } = req.body
        userCollection.find({ userName: userName })
            .toArray((err, data) => {
                if (data.length >= 1) {
                    // here check password accuracy
                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if (err) res.json(err)
                        if (result) {
                            const accessToken = jwt.sign({ userName: userName }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
                            res.json({
                                status: 200,
                                message: "user login successfully",
                                accessToken
                            })
                        } else {
                            res.json({
                                status: 401,
                                message: "password didn't match"
                            })
                        }
                    })
                } else {
                    res.json({
                        status: 404,
                        message: "user does not existing"
                    })
                }
            })
    })

    app.post('/vendor/login', (req, res) => {
        const { userName, password } = req.body
        vendorCollection.find({ userName: userName })
            .toArray((err, data) => {
                if (data.length >= 1) {
                    // here check password accuracy
                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if (err) res.json(err)
                        if (result) {
                            const accessToken = jwt.sign({ userName: userName }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
                            res.json({
                                status: 200,
                                message: "vendor login successfully",
                                accessToken
                            })
                        } else {
                            res.json({
                                status: 401,
                                message: "password didn't matched"
                            })
                        }
                    })
                } else {
                    res.json({
                        status: 404,
                        message: "userName doesn't exist"
                    })
                }
            })
    })

    app.get('/vendor/list', (req, res) => {
        productCollection.find()
            .toArray((err, data) => {
                res.send(data)
            })
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
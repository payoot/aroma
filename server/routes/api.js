const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/users')

const Member = require('../models/member')
const mongoose = require('mongoose')
    // const db = 'mongodb://payoot2:payoot2@ds135704.mlab.com:35704/botdb'
const db = 'mongodb://payoot1:payoot1@ds359847.mlab.com:59847/nuaddb'



mongoose.connect(db, { useNewUrlParser: true }, err => {
    if (err) {
        console.error('error!' + err)
    } else {
        console.log('Connected to mongdb')
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }

    let payload = jwt.verify(token, 'payoot')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()

}



router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
        // console.log(userData)
    let memberdata = {
        name: '',
        surname: '',
        address1: '',
        address2: '',
        tell: '',
        umail: userData.umail,
        lineId: ''
    }

    let member = new Member(memberdata)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);

        } else {
            console.log('register user', registeredUser);
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'payoot')
                // console.log('eeeeee', member);

            member.save((error, memberUser) => {
                if (error) {
                    console.log(error);

                } else {
                    console.log('regis u', memberUser);
                    res.status(200).send({ token, memberUser })
                    console.log('1 member register');
                }
            });

            // member.save()
        }
    });



});


// router.post('/user/data', (req, res) => {
//     let userData = req.body
//     // let user = new User(userData)
//     user.save((error, registeredUser) => {
//         if (error) {
//             console.log(error);
//         } else {
//             let payload = { subject: registeredUser._id }
//             let token = jwt.sign(payload, 'payoot')
//             res.status(200).send({ token })
//             console.log('1 member register');
//         }
//     })
// })

router.post('/user/update', (req, res) => {
    let userData = req.body;
    let mem_data = new Member(userData)
    mem_data.save((err, mem_res) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send({ mem_res })
            }
        })
        // let user = new User(userData)
        // user.save((error, registeredUser) => {
        //     // if (error) {
        //     //     console.log(error)
        //     // } else {
        //     //     let payload = { subject: registeredUser._id }
        //     //     let token = jwt.sign(payload, 'payoot')
        //     //     res.status(200).send({ token })
        //     // }
        // })
})


router.post('/login', (req, res) => {
    let userData = req.body
    console.log('---login user1 -----', userData);
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('invalid email')
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                console.log('---userdata---', user);

                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'payoot')
                res.status(200).send({ token, user })
            }
        }
    })
})

router.post('/user_data', (req, res) => {
    // let userData = { umail: 'payoot@gmail.com' }
    let userData = req.body
    console.log('---login user_2 -----', userData);
    Member.findOne({ umail: userData.mail }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            // console.log('********user', user);
            if (!user) {
                res.status(401).send('invalid email')
            } else {
                // console.log('---user55555data---', user);

                // let payload = { subject: user._id }
                // let token = jwt.sign(payload, 'payoot')
                res.status(200).send(user)
            }
        }
    })
})

router.get('/events', verifyToken, (req, res) => {
    let events = [{
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.5112"
        },
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.5112"
        },
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.5112"
        },
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.5112"
        },
    ]
    res.json(events);
})
router.get('/special', verifyToken, (req, res) => {
    let events = [{
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.5112"
        },
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.5112"
        },
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.5112"
        },
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.5112"
        },
    ]
    res.json(events);
})
module.exports = router
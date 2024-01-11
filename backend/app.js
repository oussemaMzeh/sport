//import express module
const express = require("express");

//import body-parser module
const bodyParser = require("body-parser");
const { objectify } = require("tslint/lib/utils");
const { log } = require("util");

//import bcrypt module
const bcrypt = require("bcrypt");

//import multer module
const multer = require("multer");

//import path module
const path = require("path");

//import jsonwebtoken module
const jwt = require("jsonwebtoken");

//import express-session module
const session = require("express-session");

//import axios module
const axios = require("axios");

//import mongoose module
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/sportDB');



//cree une application BE named app
const app = express();

//configurer body-parser(pour structure la reponse du BE sous format JSON)
app.use(bodyParser.json())
//configurer le body-parser pour le req recu du FE (acceder au contenu de l'obj
app.use(bodyParser.urlencoded({ extended: true }))

//security config
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
})

//shotcut : files
app.use('/files', express.static(path.join('backend/images')));

const secretKey = 'croco-souhail-23-cun';
app.use(
    session({
        secret: secretKey,
    }));


//type de media
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};

const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        // let error = new Error("Mime type is invalid");
        // if (isValid) {
        //     error = null;
        // }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
})

//Models Importaion
const Match = require("./models/match");
const User = require("./models/user");
const Player = require("./models/player");
const Team = require("./models/team");


//simulate DB
let allMatches = [
    { id: 1, teamOne: "FCB", teamTwo: 'RMD', scoreOne: 1, scoreTwo: 8 },
    { id: 2, teamOne: "FCB", teamTwo: 'JUV', scoreOne: 1, scoreTwo: 3 },
    { id: 3, teamOne: "JUV", teamTwo: 'RMD', scoreOne: 1, scoreTwo: 3 },
    { id: 4, teamOne: "JUV", teamTwo: 'RMD', scoreOne: 2, scoreTwo: 2 }
]
let allPlayers = [
    { id: 1, name: "ronaldo", age: 38, position: "attack" },
    { id: 2, name: "messi", age: 36, position: "attack" },
    { id: 3, name: "mbappe", age: 24, position: "attack" }
]
let allUsers = [
    { id: 1, firstName: "oussema", lastName: "mzeh", email: "oussema@gmail.com", pwd: "123123", tel: "22555888" },
    { id: 2, firstName: "ali", lastName: "mzeh", email: "ali@gmail.com", pwd: "123123", tel: "22555888" },

]
//business logic
//business logic all matches
app.get('/matches', (req, res) => {
    console.log("here into BL :get All matches");
    Match.find().then(
        (docs) => {
            console.log("here docs from DB", docs);
            res.json({ hereAllMatches: docs });
        }
    );

})

//business logic get all players
app.get('/players', (req, res) => {
    console.log("here into BL :get All players");
    Player.find().then(
        (docs) => {
            console.log("here docs from DB", docs);
            res.json({ hereAllPlayers: docs });
        }
    );

})
//app.get('/players', (req, res) => {
//    console.log('here into all players');
//    res.json({ hereAllplayers: allPlayers, msg: "here all players" });
//})

//business logic all teams
app.get('/teams', (req, res) => {
    console.log("here into BL :get All teams");
    Team.find().then(
        (docs) => {
            console.log("here docs from DB", docs);
            res.json({ teamsTab: docs });
        }
    );

})

//busniess logic to get (display) match by id
app.get('/matches/:id', (req, res) => {
    console.log("here into get matchById");
    //recuperer l'id
    let matchId = req.params.id
    Match.findById(matchId).then(
        (doc) => {
            console.log("here doc", doc);
            res.json({ findedMattch: doc })
        })
})
//busniess logic to get(display) player by id
app.get('/players/:id', (req, res) => {
    console.log("here into get playerById");
    //recuperer l'id
    let playerId = req.params.id
    Player.findById(playerId).then(
        (doc) => {
            console.log("here doc", doc);
            res.json({ findedPlayyer: doc })
        })
    //recuperer l'id
    // let x = req.params.id
    // console.log('here into get matchBYID');
    // let player = allPlayers.find(
    //     (obj) => { return obj.id == x }
    // )
    // res.json({ pl: player })
})

//business logic to delete selected player
app.delete('/players/:id', (req, res) => {
    let playerId = req.params.id;
    Player.deleteOne({ _id: playerId }).then(
        (deleteResponse) => {
            console.log("here delete response", deleteResponse);

            if (deleteResponse.deletedCount == 1) {
                res.json({ message: "succes" });
            } else {
                res.json({ message: "Echec" });
            }
        });
    // let x = req.params.id;
    //  let pos;
    //  for (let i = 0; i < allPlayers.length; i++) {
    //      if (allPlayers[i].id == x) {
    //          pos = i;
    //          break;
    //      }
    //   }
    //   allPlayers.splice(pos, 1)
    //   res.json({
    //       message: "players deleted with success",
    //       //supp direct sans ref
    //        //matches:allMatches
    //    })
});
//business logic to delete selected match
app.delete('/matches/:id', (req, res) => {
    let matchId = req.params.id;
    Match.deleteOne({ _id: matchId }).then(
        (deleteResponse) => {
            console.log("here delete response", deleteResponse);

            if (deleteResponse.deletedCount == 1) {
                res.json({ message: "succes" });
            } else {
                res.json({ message: "Echec" });
            }
        });
});
//business logic to add a match
app.post('/matches', (req, res) => {
    console.log('here into add match', req.body);
    let match = new Match(req.body);
    match.save();
    res.json({ msg: 'match added with sucess' })
})
//business logic to add a player
app.post('/players', (req, res) => {
    console.log('here into add match', req.body);
    Team.findById(req.body.tId).then((team) => {              
        if (!team) {
            return res.json({ msg: "Team Not Found" });
        }
        let player = new Player({
            name: req.body.name,
            age: req.body.age,
            position: req.body.position,
            nbr: req.body.nbr,
            team: team._id
        });
        player.save((err, doc) => {
            if (err) {
                res.json({ msg: "Error" })
            } else {
                team.players.push(doc);
                team.save();
                res.json({ msg: "Player Added with Succes" })
            }
        });
    });
    //let player = new Player(req.body);
    //player.save();
    //res.json({ msg: 'player added with sucess' })

    // console.log('here into add player');
    //console.log('here is added player', req.body);
    //let player = req.body;
    // allPlayers.push(player);
    // res.json({ msg: 'player added with sucess' })
});

//business logic to add a teams
app.post('/teams', (req, res) => {
    console.log('here into add team', req.body);
    let team = new Team(req.body);
    team.save();
    res.json({ msg: 'team added with sucess' })
})



//business logic to add a weather
app.post('/weather', (req, res) => {
    console.log('here into weather', req.body);
    let key = "62ee756a34835483299877a61961cafb";
    let city = req.body.Search;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    axios.get(url).then(
        (apisRes) => {
            console.log("here is resp", apisRes.data);
            let result={
                tempurature: apisRes.data
            }

            res.json({ result: apisRes.data})

        })
})

//business logic to update match
app.put('/matches', (req, res) => {
    console.log('here into update ');
    Match.updateOne({ _id: req.body._id }, req.body).then(
        (updateResponse) => {
            console.log("here is update", updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({ msg: "succes" })
            } else {
                res.json({ msg: "Error" })
            }
        }
    )
})
//business logic to update player
app.put('/players/:id', (req, res) => {
    console.log('here into update ');
    Player.updateOne({ _id: req.body._id }, req.body).then(
        (updateResponse) => {
            console.log("here is update", updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({ msg: "succes" })
            } else {
                res.json({ msg: "Error" })
            }
        }
    )
    //  console.log('here into update ', req.body);
    //  console.log('here into update ', req.params.id);
    //  let id = req.params.id;
    //  for (let i = 0; i < allPlayers.length; i++) {
    //      if (allPlayers[i].id == id) {
    //          allPlayers[i] = req.body
    //          break;
    //      }
    //  }
    //  res.json({ msg: 'player' })
})


//business logic to  signup
//app.post('/users/signup', (req, res) => {
//    console.log('here into signup ');
//    let user = req.body
//    allUsers.push(user);
//    res.json({ msg: 'user added with sucess' })
//})

//business logic to signup (new)
app.post('/users/signup', multer({ storage: storageConfig }).single("img"), (req, res) => {
    console.log('here into add user', req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log("here crypted pwd", cryptedPwd);
        req.body.pwd = cryptedPwd;
        req.body.avatar = `http://localhost:3000/files/${req.file.filename}`
        let user = new User(req.body);
        user.save();
        console.log("here user", user);
        res.json({ msg: 'user added with sucess' });
    });
}
);

//business login to login

app.post('/users/login', (req, res) => {
    console.log('here is login', req.body);
    let user = req.body;
    //Check If Email Exist 
    User.findOne({ email: user.email }).then(
        (doc) => {
            //Email is not found 
            if (!doc) {
                return res.json({ msg: "please check your email" });
            }
            //Doc(emai) is found 
            //Compare Pwds
            bcrypt.compare(user.pwd, doc.pwd).then(
                (pwdResult) => {
                    console.log("here pwd Result", pwdResult);
                    if (!pwdResult) {
                        return res.json({ msg: "please check Pwd" });
                    }
                    let userToSend = {
                        fName: doc.firstName,
                        lName: doc.lastName,
                        id: doc._id,
                        role: doc.role
                    };
                    const token = jwt.sign({ userToSend }, secretKey,
                        { expiresIn: '1h' })

                    res.json({
                        msg: "Welcome",
                        token: token
                    });
                });
        })
})
//app.post('/users/login', (req, res) => {
//console.log('here is login');
//console.log('here is login', req.body);
//   let foundedUser = false;
//   let userObj;
//   let user = req.body
//   for (let i = 0; i < allUsers.length; i++) {
//       if (allUsers[i].email == user.email && allUsers[i].pwd == user.passeWord) {
//           foundedUser = true;
//           userObj = allUsers[i];
//           break;
//       }
//   }
//   if (foundedUser) {
//       res.json({ msg: true, fName: userObj.firstName, lName: userObj.lastName })
//
//   } else {
//       res.json({ msg: false })
//   }
//})

//pour  pouvoir importer l'app(la rendre exportable)
module.exports = app;
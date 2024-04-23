const express = require('express')
const user_info = require('../database/loginsignup_db')
const hotel_info = require('../database/hotels_db')
const destination = require('../database/destinations_db')
const cors = require('cors')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
app.use(express.urlencoded( { extended: true}))
app.use(cors())
const { ObjectId } = require('mongodb');

const salt  = 10;
app.get('/userinfo', async (req, res) => {
    let user_id = req.query.user_id
    const z = req.body.check
    try {
        const user = await user_info.findOne({ _id: user_id });
        if (user) {
            res.status(200).json(user);
        } else {
            console.log('User not found');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
})

app.post('/', async (req, res)=>{ 
    // const ipAddress = req.ip || req.connection.remoteAddress;
    // console.log(ipAddress)
    const{name,password} = req.body;
    try {
        console.log(password)
        const check = await user_info.findOne({username: name})
        console.log(check)
        bcrypt.compare(password.toString(), check.password, (compareErr, result) => {
            if (compareErr) {
                // res.json("login", { err: "An error occurred during password comparison." });
                console.log(compareErr)
                
                // return;
            }

        if(check.username === name)
        {

            if(!result)
            {
                res.json('password_not_match')
            }
        else{
            res.json({msg:'exists', id:check.id});
            console.log('password matched!')
        }
    }
    })   
    } catch (e) {
        res.json({msg:'notexists', a:'ello'})
    }
})

app.post('/signup', async (req, res)=>{
    const{email,phone,name,password} = req.body;
    bcrypt.hash(password.toString(), salt, async (err, hash) => {
        console.log(hash)
        if(err)
        {
            console.log(err)
        }

        const user = {
            email:email,
            phone_no:phone,
            username:name,
            password: hash
        }
        console.log(user)
        
        try {
            const check = await user_info.findOne({username:username})
            if(check.username == req.body.username)
            {
                res.json('exists')
            }
            
        } catch (e) {
            let password = req.body.password
            res.json('notexists')
            if(password.length >= 5)
            {
                await user_info.insertMany([user])
                console.log('userinfo inserted!');
            }
            
            
        }
    });
})

app.get('/foodanddine', async (req, res) => {
    try {
        const city = req.query.city;
        const id = req.query.id;
        let hotels;
        if (city=='andheri' || city=='bandra' || city == 'CSMT') {
            hotels = await hotel_info.find({ city });
        } else {
            hotels = await hotel_info.find();
        }
        // Respond with the hotels
        res.status(200).json(hotels);
    } catch (error) {
        console.error('Error fetching hotels:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  });

app.post('/foodanddine', async (req, res) => {
    const info = req.body.id
    const user_id = req.body.user_id
    const liked = req.body.liked
    if(liked){

        a = await user_info.updateOne(
            { _id: user_id }, 
            { $push: { favourite_hotels: info } } )
        }
    else{
         a = await user_info.updateOne(
            { _id: user_id }, 
            { $pull: { favourite_hotels: info } } )
    }

})

app.get('/destinations', async (req, res) => {
    try {
        const response = await destination.find({});
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching destinations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/account', (req, res) => {
    console.log('accccccccc')
})

app.get('/api/user/:user_id', async (req, res) => {
    try {
        console.log('apiiiiiiiiii')
        const user_id = req.params.user_id;
        const user = await user_info.findById(user_id);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to update email
app.put('/api/user/:userId/email', async (req, res) => {
    try {
      const userId = req.params.userId;
      const { email } = req.body;
  
      await User.findByIdAndUpdate(userId, { email });
  
      res.status(200).json({ message: 'Email updated successfully' });
    } catch (error) {
      console.error('Error updating email:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.all('', (req, res) => {
    res.end('<h1>This is Server port</h1>')
})

app.listen(8000, () => {
    console.log('port connected on http://localhost:8000')
})
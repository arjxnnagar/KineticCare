const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


// MONGODB CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/kineticcare')
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((err) => {
        console.log(err)
    })


// USER MODEL
const User = mongoose.model('User', {
    username: String,
    password: String
})


// REGISTER ROUTE
app.post('/register', async (req, res) => {

    try {

        const { username, email, password } = req.body

        const existingUser = await User.findOne({ username })

        if (existingUser) {
            return res.json({
                success: false,
                message: "User already exists"
            })
        }

        const newUser = new User({
            username,
            password
        })

        await newUser.save()

        res.json({
            success: true,
            message: "Registration Successful"
        })

    } catch (error) {

        res.json({
            success: false,
            message: "Server Error"
        })

    }

})


// LOGIN ROUTE
app.post('/login', async (req, res) => {

    try {

        const { username, password } = req.body

        const user = await User.findOne({ username })

        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            })
        }

        if (user.password !== password) {
            return res.json({
                success: false,
                message: "Wrong password"
            })
        }

        res.json({
            success: true,
            message: "Login Successful",

            user: {
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {

        res.json({
            success: false,
            message: "Server Error"
        })

    }

})


app.listen(5000, () => {
    console.log("Server running on port 5000")
})
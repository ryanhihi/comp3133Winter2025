const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/User');
const bodyParser =require('body-parser');
const UserData = require('./UsersData.json');
// const { buildSchema, GraphQLIncludeDirective } = require('graphql');
// const { graphqHTTP } = require("express-graphql");

const app = express();
const SERVER_PORT = 8081;

app.use(bodyParser.json());

//Schema
// const gqlSchema = buildSchema(
//     // `
//     // type Query{
    
//     // }

//     // type Mutation{
//     // }
    
//     // `
// );

// //Root Resolver
// const rootResolver = {
    
// };

// //GqlHttp object
// const graphqHttp = graphqHTTP({
//     schema: userSchema,
//     rootValue: rootResolver,
//     graphiql: true
// });

// app.use("/graphql", graphqHTTP);

//connect to MongoDB
const connectDB = async() => {
    try{
        console.log('Connection to connect to MongoDB');

        mongoose.connect('mongodb+srv://willbluemoon99:EmCK6UKBZx7vVQJm@ryan.nz0hm.mongodb.net/comp3133_labweek4?retryWrites=true&w=majority&appName=Ryan', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then( () => {
            console.log(`MongoDB connected`);
        }).catch( (error) => {
            console.log('Error connecting to MongDB')
        });
    } catch(error){
        console.log(`Unable to connect to Mongo DB: ${error.message}`);
    }
}

//Create route to POST user data
app.post('/users', async(req, res) => {
    try{
        const user = new User(req.body);
    await user.validate();
    const savedUser = await user.save();
    res.status(201).json({
        message: 'User successfully created',
        user: savedUser
    });
    } catch (error){
        res.status(400).json({
            message:'Error creating user',
            error: error.message
        });
    }
});

//Insert data from Usersdata.json
app.post('/users/insertMany', async(req, res) => {
    try{
        const users = await User.insertMany(UserData);
        res.status(201).json({
            message: 'Users inserted successfully',
            users,
        });

    }catch(error){
        res.status(400).json({
            message: 'Error inserting users',
            error: error.message,
        });

    }
});



app.listen(SERVER_PORT, () => {
    console.log('Server started');
    connectDB();
    console.log(`http://localhost:${SERVER_PORT}`)
    // console.log(`http://localhost:${SERVER_PORT}/graphql`)
});



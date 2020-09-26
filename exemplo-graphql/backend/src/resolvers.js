// const users = [

//     { id: 1, name: 'wende', email: 'teste@gmail.com' },
//     { id: 2, name: 'Eliene', email: 'teste2@gmail.com' },

// ];

const User = require('./User');

module.exports = {

    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id)
    },
    
    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email }),
    }


};
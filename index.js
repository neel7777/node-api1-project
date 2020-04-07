const express = require('express');

const server = express();

let users = [
    {
        id: 1,
        name: 'neel',
        bio: 'student'
    },
    {
        id: 2,
        name: 'luis',
        bio: 'instructor'
    }
]

server.use(express.json());

server.get('/', (req, res)=> {
    res.json({api: 'running'})
})

server.get('/api/users', (req, res)=>{
   
    res.json(users)
})

server.get('/api/users/:id', (req, res)=>{
   const id = req.params.id;

   const user = users.find((user) => user.id == id)

   if (user) {
       res.status(201).json(user)
   }
   else {
       res.status(404).json({message: 'This user id does not exist'})
   }
    
})

server.post('/api/users', (req, res)=>{
    const usersInfo = req.body;

    users.push(usersInfo);

    if (user) {
        res.status(201).json(user)
    }
    else {
        res.status(404).json({message: 'There was an error handling the request'})
    }
})

const port = 5000;

server.listen(port, ()=> {
    console.log(`api on port ${port}`)
})
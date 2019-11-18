# Back-End

## User Endpoints

### POST - Register a User
`https://droombw.herokuapp.com/api/auth/register`

Sample schema:
```
       {
          "first_name": "John",
          "last_name": "Doe",
          "email": "johndoe@yahoo.com",
          "password": "E@kd92",
          "occupation": "Manager",
          "past_experience": "CEO",
          "interests": "Long walks on the beach"
        } 
```

### POST - Login
`https://droombw.herokuapp.com/api/auth/login`

Sample schema:
```
        {
          "email": "johndoe@yahoo.com",
          "password": "password
        }
```

### GET - All Users **requires token in header**
`https://droombw.herokuapp.com/api/auth/users`

### GET - User by ID **requires token in header**
`https://droombw.herokuapp.com/api/auth/user/:id`

(Example: https://droombw.herokuapp.com/api/auth/user/7 will get data for user with the id of '7')

### PUT - Edit User Info **requires token in header**
`https://droombw.herokuapp.com/api/auth/user/:id`

### DELETE - Delete User **requires token in header**
`https://droombw.herokuapp.com/api/auth/user/:id`

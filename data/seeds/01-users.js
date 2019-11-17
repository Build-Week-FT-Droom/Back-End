
exports.seed = function(knex) {
  
      return knex('users').insert([
        {
          "first_name": "John",
          "last_name": "Doe",
          "email": "johndoe@yahoo.com",
          "password": "E@kd92",
          "occupation": "Manager",
          "past_experience": "CEO",
          "interests": "Long walks on the beach"
        },
        { 
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "janedoe@hotmail.com",
        "password": "E@kd92",
        "occupation": "President",
        "past_experience": "Vice President",
        "interests": "Making people work hard"
        },
        {
        "first_name": "Skippy",
        "last_name": "McGee",
        "email": "skipster@msn.com",
        "password": "E@kd92",
        "occupation": "Beatnik",
        "past_experience": "Saving the world",
        "interests": "Inclusivity"
        }
      ]);
    
};

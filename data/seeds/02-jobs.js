
exports.seed = function(knex) {
      
    return knex('jobs').insert([
        {
          "user_id": 1,
          "img_url": 'https://ibb.co/DgWD70V.jpg',
          "title": "Movie Critic",
          "salary": "$75,000 per year",
          "description": "As part of their job, a movie critic may evaluate several movies a week, report on general entertainment news, attend film festivals and premieres and analyze trends in movie ticket sales. Movie critics discuss their opinions on films in broadcast media"
        },
        
      ]);
};


exports.seed = function(knex) {
  return knex('jobs').insert([
      {
        "user_id": 1,
        "img_url": 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        "title": "Movie Critic",
        "salary": "$75,000 per year",
        "description": "As part of their job, a movie critic may evaluate several movies a week, report on general entertainment news, attend film festivals and premieres and analyze trends in movie ticket sales. Movie critics discuss their opinions on films in broadcast media"
      },
      {
        "user_id": 2,
        "img_url": 'https://unsplash.com/photos/dvK_CT1Wg78',
        "title": "Travel Writer",
        "salary": "$85,000 per year",
        "description": "Seek out interesting hotspots, restaurants, sightseeing places, or whatever arouses interest."
      },
      {
        "user_id": 3,
        "img_url": 'https://unsplash.com/photos/hE8Mog4qK4Y',
        "title": "Artist",
        "salary": "$60,000 per year",
        "description": "Craft and fine artists typically do the following: Use techniques, such as knitting, weaving, glass blowing, painting, drawing, or sculpting."
      },
      {
        "user_id": 1,
        "img_url": 'https://unsplash.com/photos/UGQoo2nznz8',
        "title": "Detective",
        "salary": "$90,000 per year",
        "description": "Responsible for investigating crimes such as burglaries, homicides, assaults, and other incidents to find and implicate perpetrators. Collects evidence, interviews witnesses, and testifies in court."
      },
      {
        "user_id": 2,
        "img_url": 'https://unsplash.com/photos/Y20JJ_ddy9M',
        "title": "Voice Actor",
        "salary": "$55,000 per year",
        "description": "Perform in many roles, including providing narratives in commercials or playing characters in animated films or video games."
      },
      {
        "user_id": 3,
        "img_url": 'https://unsplash.com/photos/evRB-x0TJkM',
        "title": "Chocolate Taster",
        "salary": "$57,000 per year",
        "description": "You will work alongside approximately 11 Chocolate Tasters and a panel leader; sharing opinions and collaborating with others to reach an agreement on taste."
      },
      {
        "user_id": 1,
        "img_url": 'https://unsplash.com/photos/_3Q3tsJ01nc',
        "title": "Mystery Shopper",
        "salary": "$52,000 per year",
        "description": "Pose as regular customers in order to gauge and report on the quality of products, customer service, and environment of the stores to which you are assigned."
      },
      {
        "user_id": 2,
        "img_url": 'https://unsplash.com/photos/tHkJAMcO3QE',
        "title": "Interior Designer",
        "salary": "$73,000 per year",
        "description": "Make interior spaces functional, safe, and beautiful by determining space requirements and selecting decorative items, such as colors, lighting, and materials."
      },
      {
        "user_id": 3,
        "img_url": 'https://unsplash.com/photos/w9_XGvzxvxo',
        "title": "Brew Master",
        "salary": "$68,000 per year",
        "description": "Use your passion for beer and comprehensive knowledge of brewing processes to craft creative recipes and produce the best, most exciting beers possible."
      },
      {
        "user_id": 1,
        "img_url": 'https://unsplash.com/photos/tW_-BwcVzM0',
        "title": "Astronaut",
        "salary": "$170,000 per year",
        "description": "Board a spacecraft to fly on missions for very specific purposes."
      }
    ]);
};

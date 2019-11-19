
exports.seed = function(knex) {
  return knex('jobs').insert([
      {
        "user_id": 1,
        "img_url": 'https://ibb.co/8gcLPWj',
        "title": "Movie Critic",
        "salary": "$75,000 per year",
        "description": "As part of their job, a movie critic may evaluate several movies a week, report on general entertainment news, attend film festivals and premieres and analyze trends in movie ticket sales. Movie critics discuss their opinions on films in broadcast media"
      },
      {
        "user_id": 2,
        "img_url": 'https://ibb.co/jw64ZDj,jpg',
        "title": "Travel Writer",
        "salary": "$85,000 per year",
        "description": "Seek out interesting hotspots, restaurants, sightseeing places, or whatever arouses interest."
      },
      {
        "user_id": 3,
        "img_url": 'https://ibb.co/4KncF7p.jpg',
        "title": "Artist",
        "salary": "$60,000 per year",
        "description": "Craft and fine artists typically do the following: Use techniques, such as knitting, weaving, glass blowing, painting, drawing, or sculpting."
      },
      {
        "user_id": 4,
        "img_url": 'https://ibb.co/j8ThJBR.jpg',
        "title": "Detective",
        "salary": "$90,000 per year",
        "description": "Responsible for investigating crimes such as burglaries, homicides, assaults, and other incidents to find and implicate perpetrators. Collects evidence, interviews witnesses, and testifies in court."
      },
      {
        "user_id": 5,
        "img_url": 'https://ibb.co/cgYKzhj.jpg',
        "title": "Voice Actor",
        "salary": "$55,000 per year",
        "description": "Perform in many roles, including providing narratives in commercials or playing characters in animated films or video games."
      },
      {
        "user_id": 6,
        "img_url": 'https://ibb.co/nrSVdNY.jpg',
        "title": "Chocolate Taster",
        "salary": "$57,000 per year",
        "description": "You will work alongside approximately 11 Chocolate Tasters and a panel leader; sharing opinions and collaborating with others to reach an agreement on taste."
      },
      {
        "user_id": 7,
        "img_url": 'https://ibb.co/nfgMMSb.jpg',
        "title": "Mystery Shopper",
        "salary": "$52,000 per year",
        "description": "Pose as regular customers in order to gauge and report on the quality of products, customer service, and environment of the stores to which you are assigned."
      },
      {
        "user_id": 8,
        "img_url": 'https://ibb.co/RYG3tcZ.jpg',
        "title": "Interior Designer",
        "salary": "$73,000 per year",
        "description": "Make interior spaces functional, safe, and beautiful by determining space requirements and selecting decorative items, such as colors, lighting, and materials."
      },
      {
        "user_id": 9,
        "img_url": 'https://ibb.co/C7Qmnqj.jpg',
        "title": "Brew Master",
        "salary": "$68,000 per year",
        "description": "Use your passion for beer and comprehensive knowledge of brewing processes to craft creative recipes and produce the best, most exciting beers possible."
      },
      {
        "user_id": 10,
        "img_url": 'https://ibb.co/pjvBBhY.jpg',
        "title": "Astronaut",
        "salary": "$170,000 per year",
        "description": "Board a spacecraft to fly on missions for very specific purposes."
      }
    ]);
};

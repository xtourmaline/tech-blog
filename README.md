# Tech Blog !

## Description
Welcome to the Tech Blog, a solo venture for tech enthusiasts seeking a personal space to share insights and experiences. This platform, powered by Node.js, Express.js, and MySQL, provides a robust foundation for the entire website. Users can securely log in to access the dashboard, post blogs, and engage in discussions through comments. The implementation follows the MVC pattern for a well-organized and efficient structure. Dive into the world of technology and personal exploration on this individual journey.

Key Features:
- Users are presented with the homepage containing existing blog posts, navigation links for the homepage and dashboard, and the login option
- Users can sign up by creating a username and password
- Clicking on the homepage displays existing blog posts with titles and creation dates
- Users can leave comments on existing posts
- Dashboard displays existing blog posts and offers the option to add a new blog post
- Users idle for more than a set time are prompted to log in again before adding, updating, or deleting posts

To view the site, click [here](https://vanessatechblog-0a4574c54977.herokuapp.com/)!

## Table of Contents

- [Usage](#usage)
- [Photos](#photos)
- [Technologies](#technologies)
- [License](#license)

## Usage

To use the website, click on this [link](https://vanessatechblog-0a4574c54977.herokuapp.com/).

Otherwise, create an ```.env``` file and type in credentials to connect to the mySQL database. Afterwards, ```mysql -u root -p < ./db/schema.sql``` and ```npm run seed``` to load the database and seed. Afterwards, ```npm run start``` which will allow the website to be hosted on local host.

## Photos

![](https://media.discordapp.net/attachments/790308309466087424/1199188729814847638/image.png?ex=65c1a289&is=65af2d89&hm=5b927367cec3c1c7df5fe5f2080eb929320247ab6fc32de9b19dd246ed8884f7&=&format=webp&quality=lossless&width=1409&height=779)

![](https://media.discordapp.net/attachments/790308309466087424/1199189047533375588/image.png?ex=65c1a2d4&is=65af2dd4&hm=724bae1c5bd724c349101a1d131e65d7c25724ff3cec0af270345ea4e2056364&=&format=webp&quality=lossless&width=1409&height=776)

![](https://media.discordapp.net/attachments/790308309466087424/1199189218883272724/image.png?ex=65c1a2fd&is=65af2dfd&hm=6bcf0e121cd9d59d1c350c10cae6d718b191b73ca4fd1676c35f3ebb0705fe14&=&format=webp&quality=lossless&width=1409&height=777)

![](https://media.discordapp.net/attachments/790308309466087424/1199189352593510432/image.png?ex=65c1a31d&is=65af2e1d&hm=f7bbf55145986d3736e835b417b4e455f01f2b9e849b65425a4ca38e2f47b405&=&format=webp&quality=lossless&width=1409&height=777)

## Technologies Used

- Node.js
- Express.js
- Handlebars
- mySQL

## License

MIT License
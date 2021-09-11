# Tech Blog

![License Badge](https://img.shields.io/badge/license-ISC-blue)

## Description

A tech blog website! Supports users, posting, comments and more! Built using Node.js, Express, MySQL, Sequelize and hosted on Heroku!

## Table of Contents

1.[Installation Instructions](#installation-instructions)

2.[Usage Instructions](#usage-instructions)

3.[Contribution Instructions](#contribution-instructions)

4.[Questions](#questions)

5.[License](#License)

## Installation Instructions

To install the project locally:

    npm install

You will also need to have mysql installed, instruction can be found here: https://www.mysql.com/

You will also need to rename '.env.EXAMPLE' to '.env' and fill in the appropriate settings for your mysql environment, and provide a secret key for express-session.

## Usage Instructions

Run the schema file to set up the database:

    mysql -u YOUR_USERNAME -p
    SOURCE db/schema.sql

Once the above set up is done run the following code to begin!

    node index

The project is also hosted live on [Heroku](https://riley-tech-blog.herokuapp.com/)

Here are some screenshots of the project:

![Homepage, showing a list of blog posts](./assets/img/homepage.png)
![Viewing a blog post, along with associated comments](./assets/img/blogpost.png)

## Contribution Instructions

I am not actively maintaining this project. Please feel free to fork and make changes

## Questions

For any questions regarding the project please reach out to me on Github: [Github](https://github.com/rileylum) or via Email: rileylum@adam.com.au

## License

ISC License

Copyright (c) 2021, Riley Lum

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

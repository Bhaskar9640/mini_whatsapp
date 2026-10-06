# mini_whatsapp
# Mini WhatsApp

A simple WhatsApp-style chat app where you can create, edit and delete chat messages. Built manually as a practice project with Node.js, Express, EJS and MongoDB.

## Features

- View all chats as cards (From, To, Message, Date)
- Create a new chat
- Edit an existing chat
- Delete a chat
- WhatsApp-inspired colors, fixed header and card hover effect

## Pages

| Page          | File              | Style file          |
|---------------|-------------------|---------------------|
| All chats     | `views/show.ejs`  | `public/style.css`  |
| Add new chat  | `views/new.ejs`   | `public/create.css` |
| Edit chat     | `views/edit.ejs`  | `public/edit.css`   |

## Technologies Used

- HTML, CSS (Flexbox, box-shadow, hover effects)
- JavaScript
- Node.js and Express
- EJS (templates)
- MongoDB and Mongoose

## Project Structure

miniwhatsapp/
│── model/
│   └── schema.js        (chat schema: from, to, msg, date)
│── public/
│   ├── create.css
│   ├── edit.css
│   └── style.css
│── views/
│   ├── edit.ejs
│   ├── new.ejs
│   └── show.ejs
│── index.js             (server and routes)
│── init.js              (adds sample chats to the database)
│── package.json
└── README.md


## How to Run

1. Clone or download this project
2. Open the folder in a terminal
3. Install packages:
```
   npm install
```
4. Make sure MongoDB is running on your computer
5. (Optional) Add sample chats:
```
   node init.js
```
6. Start the app:
```
   node index.js
```
7. Open `http://localhost:8080` in your browser (use the port written in your `index.js`)

## Colors Used

| Part         | Color     |
|--------------|-----------|
| Body         | `#ece5dd` |
| Header       | `#202c33` |
| Chat card    | `#128c7e` |
| Message box  | `#dcf8c6` |

## Future Improvements

- Add user login
- Add search for chats
- Make it fully mobile responsive

## Author

BHaskar

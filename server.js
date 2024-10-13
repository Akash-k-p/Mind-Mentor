const cors = require('cors');
const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up CORS for development environment
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from the React frontend
  credentials: true,               // Allow credentials like cookies
};
app.use(cors(corsOptions));

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// For logging requests during development
app.use((req, res, next) => {
  console.log(`****** ${req.method} request on endpoint: ${req.url}`);
  next();
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});

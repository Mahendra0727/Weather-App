const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

//Moustache --> .hbs extension --> using ---> VIEW ENGINE : to display the dynamic website
app.set('view engine', 'hbs');

const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

//updating the views folder path inside another folder
app.set('views', template_path);

// updating and creating, registering   the partials folder  to use its properties
hbs.registerPartials(partials_path);

//to display the static website
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

//ROUTING --> for the view engine (.hbs)
app.get('/', (req, res) => {
  res.render('index.hbs');
});

//if the URL doesn't match with any of the above specified url then do this...
app.get('/*', (req, res) => {
  res.status(404).render('404error.hbs', {
    pageMsg: 'Oops!,Page not found',
  });
});

app.listen(port, () => {
  
  console.log(`server is running at port ${port}`);
});

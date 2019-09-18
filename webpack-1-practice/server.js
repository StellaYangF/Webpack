const express = require('express');
const app = express();
app.get('/api/list', (req,res) => {
  res.send(['Banana', 'Apple', 'Pear'])
});

app.listen(4000, ()=>{
  console.log('Server start at 4000, press Ctrl + C to stop.')
})
const express = require('express');
const app = express();
const path = require('path');

// ==== set production ====
if(process.env.NODE_ENV !== 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// ==== start server ====
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('server start at port: 5000')
})

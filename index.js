const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const subjectsList = require('./data/subjectName.json');
const subjectDetails = require('./data/TopicDetails.json');
const enrollCard = require('./data/EnrollPackage.json')

app.get('/', (req, res) => {
    res.send('Server Running')
});

app.get('/subjectLists', (req, res) => {
    res.send(subjectsList)
})
  
app.get('/detailsSubs/:id', (req, res) => {
    const id = req.params.id
    const detailSub = subjectDetails.filter(sd => sd.id === id)
    res.send(detailSub)
})

app.get('/subsDetails/:id', (req, res) => {
    const id = req.params.id;
    const subDetails = subjectDetails.find(subDetail => subDetail.id === id)
    res.send(subDetails)
    // console.log(req.params.id);
})

// http://localhost:5000/detailsSubs/
app.get('/detailsData/:id', (req, res) => {
    const id = req.params.id;
    const details = enrollCard.find(subDetail => subDetail.id === id)
    res.send(details)
    // console.log(req.params.id);
})


app.get('/enrollDetails', (req, res) => {
    res.send(enrollCard)
    // console.log(req.params.id);
})

app.listen(port, () => console.log('serve run console'))
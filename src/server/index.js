const express = require('express');
const bodyParser = require('body-parser')
const os = require('os');
const {
    Annotation,
    Label,
    TextSnippet
} = require('./models')

const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('dist'));

// hello world api
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// text snippets
const textSnippetUrl = '/api/text_snippet';
app.get(textSnippetUrl, (req, res) => {
    TextSnippet.findAll().then((data) => {
        res.send(data);
    });
});

app.post(textSnippetUrl, (req, res) => {
    console.log(req.body);
    const {
        title,
        text,
    } = req.body;
    if (typeof title !== "string") {
        throw "title must be string";
    }
    if (typeof text !== "string") {
        throw "text must be string";
    }
    TextSnippet.create({
        title,
        text,
    }).then((data) => res.send(data));
})


// labels
const labelsUrl = '/api/label';
app.get(labelsUrl, (req, res) => {
    Label.findAll().then((data) => {
        res.send(data);
    })
})


// annotations
const annotationsUrl = '/api/annotation';
app.get(annotationsUrl, (req, res) => {
    Annotation.findAll().then((data) => {
        res.send(data);
    })
})

// output when initialization is complete
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}!`));

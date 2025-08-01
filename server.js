import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const app = express();
const port = 3000;
const viewsDir = path.resolve() + '/views/';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})
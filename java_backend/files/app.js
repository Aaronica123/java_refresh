import express from "express";
import create from "./view.js";
import delete_1 from "./delete.js";
import fetch from "./fetch.js";
const app =express();

app.use(express.json());


app.post('/create',create);
app.delete('/delete',delete_1);
app.get('/fetch',fetch);

export default app;
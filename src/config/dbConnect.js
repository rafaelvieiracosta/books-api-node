import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rafael:a1s2d3f4@book-api.wka7kvh.mongodb.net/main");

let db = mongoose.connection;

export default db;
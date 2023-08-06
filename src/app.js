// mongoose.set('strictQuery', false); for version lesser than 7

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2");


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));

// Connection creation
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// // Schema creation
//       const playlistSchema = new mongoose.Schema({
//                 name: String,
//                 ctype: String,
//                 videos: Number,
//                 author: String,
//                 active: Boolean
//             });
// //   Collection creation
// const PlaylistFrontEND = new mongoose.model("Playlist", playlistSchema);


// Connection creation
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// // Schema creation
//       const playlistSchema = new mongoose.Schema({
//                 name: String,
//                 ctype: String,
//                 videos: Number,
//                 author: String,
//                 active: Boolean
//             });
// //   Collection creation
// const PlaylistFrontEND = new mongoose.model("Playlist", playlistSchema);
//       // Create Document or insert one by one
//         const FEPlaylist = new PlaylistFrontEND ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
// FEPlaylist.save();


// Connection creation
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// // Schema creation
//       const playlistSchema = new mongoose.Schema({
//                 name: String,
//                 ctype: String,
//                 videos: Number,
//                 author: String,
//                 active: Boolean
//             });
// //   Collection creation
// const PlaylistFrontEND = new mongoose.model("Playlist", playlistSchema);
//       // Create Document or insert one by one
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFrontEND ({
//           name: "Material Asad",
//           ctype: "UI Framework",
//           videos: 22,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const result = await FEPlaylist.save();
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
// createDocument();

// Video 52
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
// createDocument();


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         const result = await PlaylistFronte.find();
//         console.log(result);    
//         }
// getDocument();


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         const result = await PlaylistFronte.find({ctype: "UI-UX"});
//         console.log(result);    
//         }
// getDocument();


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         const result = await PlaylistFronte.find({ctype: "UI-UX"})
//         .select({name:2});
//         console.log(result);    
//         }
// getDocument();


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         const result = await PlaylistFronte.find({ctype: "UI-UX"})
//         .select({name:3})
//         .limit(1);
//         console.log(result);    
//         }
// getDocument();


// Video 54
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte.find({ctype: "UI-UX"})
//         .select({name:2})
//         .limit(1);
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// getDocument();

// Video 54
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({videos: 39})
//         .select({name:2})
//         .limit(1);
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// getDocument();


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({videos: 39})
//         .select({name:2})
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// getDocument();

// Video 54
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({videos: {$gt: 10}})
//         // .find({videos: {$gte: 10}})
//         // .find({videos: {$lte: 10}})
//         .select({name:2})
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// getDocument();


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({ctype : "UI Framework"})
//         // .find({ctype : {$in: ["UI Framework"]}})
//         // .find({ctype : {$in: ["UI Framework", "UI-UX"]}})
//         // .find({ctype : {$nin: ["UI Framework"]}})
//         // .find({ctype : {$nin: ["UI Framework", "UI-UX"]}})
//         .select({name:7})
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// getDocument();


// Video 55 Logical Operator
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({$or: [ {ctype: "UI-UX"},{videos: 39} ]})
//         // .find({$or: [ {ctype: "UI-UX"},{videos: {$gt: 10}} ]}) 
//         // .find({$and: [ {ctype: "UI-UX"},{videos: 39} ]})
//         // .find({$nor: [ {ctype: "UI-UX"},{videos: 39} ]})
//         // .find({$nor: [ {ctype: "UI-UX"},{videos: {$lt: 10}} ]}) 
//         .select({name:7})
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// getDocument();


// Video 56 Sorting and counting
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({$or: [ {ctype: "UI-UX"},{videos: 39} ]})
//         .select({name:7})
//         // .count();
//         .count();
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// getDocument();



// Upadte document using Mongoose in Express app
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({$or: [ {ctype: "UI-UX"},{videos: 39} ]})
//         .select({name:7})
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}

// // const updateDocument = async (id) =>  {
// //   const result= await PlaylistFronte.updateOne({_id : id});
// const updateDocument = async (_id) =>  {
//   try{
//     const result= await PlaylistFronte.updateOne({_id}, {$set: 
//       { name: "BalsamiqUpdated"}
//       });
//       console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// }
// updateDocument("647440eb76c6bd9e4196d383");


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({$or: [ {ctype: "UI-UX"},{videos: 39} ]})
//         .select({name:7})
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// const updateDocument = async (_id) =>  {
//   try{
//     const result= await PlaylistFronte.findByIdAndUpdate({_id}, {$set: 
//       { name: "BalsamiqPro"}
//       }, {
//         new : true
//       }
//       );
//       console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// }
// updateDocument("647440eb76c6bd9e4196d383");


// Video 58 Delete Query
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: String,
//                     ctype: String,
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
//       const getDocument = async () => {
//         try{
//         const result = await PlaylistFronte
//         .find({$or: [ {ctype: "UI-UX"},{videos: 39} ]})
//         .select({name:7})
//         console.log(result);    
//         }catch(err){
//             console.log(err);
//         }}
// const updateDocument = async (_id) =>  {
//   try{
//     const result= await PlaylistFronte.findByIdAndUpdate({_id}, {$set: 
//       { name: "BalsamiqPro"}
//       }, {
//         new : true
//       }
//       );
//       console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// }

// const deleteDocument = async (_id) => {
//   try{
//     // const result = await PlaylistFronte.deleteMany( {_id} );
//     // const result = await PlaylistFronte.deleteOne( {_id} );
//     const result = await PlaylistFronte.findByIdAndDelete( {_id} );
//     console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// }
// deleteDocument("647440eb76c6bd9e4196d383"); 


// Video 59 Built-in validation
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: {
//                       type: String,
//                       required: true,
//                       unique: true,
//                       // lowercase: true
//                       // uppercase: true
//                       // trim: true
//                       // minlenght: 2,
//                       // minlenght: [2, "minimum 2 leters"],
//                       // maxlenght: 32
//                     },
//                     ctype: {
//                       type: String,
//                       required : true,
//                       enum: ["UI Framework", "UI-UX"]
//                     },
//                     videos: Number,
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Materialize",
//           ctype: "UI Framework",
//           videos: 18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
// createDocument(); 


// Custom Validation
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: {
//                       type: String,
//                       required: true,
//                       unique: true,
//                     },
//                     ctype: {
//                       type: String,
//                       required : true,
//                       enum: ["UI Framework", "UI-UX"]
//                     },
//                     videos: 
//                     {
//                       type: Number,
//                       validate(value){
//                         if (value<0){
//                           throw new Error("Videos should not be Negative")
//                         }
//                       }
//                     },
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Material",
//           ctype: "UI Framework",
//           // videos: 18,
//           videos: -18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
// createDocument(); 


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb2")
// .then(() =>  console.log("Connected to MongoDB, connection successful"))
//       .catch((error) =>  console.log(error));
// const playlistSchema = new mongoose.Schema({
//                     name: {
//                       type: String,
//                       required: true,
//                       unique: true,
//                     },
//                     ctype: {
//                       type: String,
//                       required : true,
//                       enum: ["UI Framework", "UI-UX"]
//                     },
//                     videos: 
//                     {
//                       type: Number,
//                       validate:{
//                         validator:function(value){
//                           return value.length <0
//                         },
//                         message: "Videos count should not be negative"
//                       }
//                     },
//                     author: String,
//                     active: Boolean
//                 });
//     //   Collection creation
// const PlaylistFronte = new mongoose.model("Playlist", playlistSchema);
// const createDocument  = async () => {
//         try{
//         const FEPlaylist = new PlaylistFronte ({
//           name: "Material",
//           ctype: "UI Framework",
//           // videos: 18,
//           videos: -18,
//           author: "Asad Habeeb",
//           active: true
//         })
//         const FEAPlaylist = new PlaylistFronte ({
//                 name: "Balsamiq",
//                 ctype: "UI-UX",
//                 videos: 19,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FEBPlaylist = new PlaylistFronte ({
//                 name: "InVision Freehand",
//                 ctype: "UI-UX",
//                 videos: 29,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const FECPlaylist = new PlaylistFronte ({
//                 name: "Axure RP",
//                 ctype: "UI-UX",
//                 videos: 39,
//                 author: "Asad Habeeb",
//                 active: true
//               })
//         const result = await PlaylistFronte.insertMany([FEPlaylist,FEAPlaylist,FEBPlaylist,FECPlaylist]);
//         console.log(result);
//       }catch(err) {
//         console.log(err);
//       }}
// createDocument(); 


// Npm validator
// Connection creation
const mongoose = require("mongoose");
const validator = require("validator")
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/asadhabeebdb3")
.then(() =>  console.log("Connected to MongoDB, connection successful"))
      .catch((error) =>  console.log(error));
// Schema creation
      const playlistSchema = new mongoose.Schema({
        name: {
                                type: String,
                                required: true,
                                unique: true,
                              },
                              ctype: {
                                type: String,
                                required : true,
                                enum: ["UI Framework", "UI-UX"]
                              },
                              videos: 
                              {
                                type: Number,
                                validate(value){
                                  if(value < 0){
                                    throw new Error("Videos count should not be negative");
                                  }
                                }
                              },
                              email: {
                                type: String,
                                required: true,
                                unique: true,
                                validate(value){
                                  if(!validator.isEmail(value)){
                                    throw new Error("Email is invalid");
                                  }
                                }
                              },
                              author: String,
                              active: Boolean
                          });
//   Collection creation
const PlaylistFrontEND = new mongoose.model("Playlist", playlistSchema);
      // Create Document or insert one by one
const createDocument  = async () => {
        try{
        const FEPlaylist = new PlaylistFrontEND ({
          name: "Materialismism",
          ctype: "UI Framework",
          videos: 22,
          author: "Asad Habeeb",
          email: "asad.habeeb@gmail.com",
          active: true
        })
        const result = await FEPlaylist.save();
        console.log(result);
      }catch(err) {
        console.log(err);
      }}
createDocument();

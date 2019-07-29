const express = require('express');
const debug = require('debug')('app:adminRoutes');
const { MongoClient } = require('mongodb');
const adminRouter = express.Router();


	const books = [
			{
		      title:'War and Peace',
		      genre: 'Historical Fiction',
		      author: 'El Oriabs',
		      read:false
			},

			{
		      title:'Stranger Things',
		      genre: 'Historical Fiction',
		      author: 'El Jay',
		      read:false
			},

			{
		      title:'Les Miserables',
		      genre: 'Science Fiction',
		      author: 'Ivy Blue',
		      read:false
			}
        ];


function router() {
  adminRouter.route('/')
     .get((req, res) => {
     	const url = 'mongodb://localhost:27017';
     	const dbName = 'libraryApp';

     	(async function mongo(){
     		let client;
     		try{
     			client = await MongoClient.connect(url);
                console.log(MongoClient.connect(url));
     			debug('Connected correctly to server');

     			const db = client.db(dbName);

     			const response = await db.collection('books').insertMany(books);

     			res.json(response);
                
     		}catch(err){
              debug(err.stack);  
     		}
 			client.close();
     	}());
    }); 
     return adminRouter;

}

module.exports = router;
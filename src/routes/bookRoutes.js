const express = require('express');
const bookRouter = express.Router();

function router(nav){
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
        ]

			bookRouter.route('/')
					.get((req, res)=>{
						res.render('booksListView',
						{   
							nav, 
							title:"Library",
							books
						}
						);
					});


				bookRouter.route('/:id')
					.get((req, res) => {
						const { id } = req.params
						res.render('bookView',
						{   
							nav, 
							title:"Library",
							book: books[id]
						}
						);
					})	;

					return bookRouter;

}



module.exports = router;	
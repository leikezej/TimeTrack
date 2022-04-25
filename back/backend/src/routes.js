'use strict'

module.exports = function(app){
	const controller = require('./controller');

	// GET
	app.get('/notes',controller.getNotes); //get all note
	app.get('/notes/:id',controller.getANote) //get a note
	app.get('/categories',controller.getCategories); //get all category
	app.get('/categories/:id',controller.getNotesByCategory); //get note by category

	// POST
	app.post('/notes/',controller.addNote);
	app.post('/categories/',controller.addCategory);

	// PUT
	// PUT and PATCH is same HTTP method to update data. On PUT, we have to send all the requested data and are not allowed to send undefined data whereas with PATCH, you can send only the data parameters you want to update
	app.put('/notes/:id',controller.updateNote);
	app.put('/categories/:id',controller.updateCategory);

	// DELETE
	app.delete('/notes/:id',controller.deleteNote);
	app.delete('/categories/:id',controller.deleteCategory);
}
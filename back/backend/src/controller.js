'use strict'

const response  = require('./response');
const connection  = require('./database/connect');
const isEmpty = require('lodash.isEmpty');

//Ziggot/Example
exports.welcome = function (req, res){
	return response.message('Welcome!',res);
}

//GET ALL NOTE
exports.getNotes = function(req, res){
	let search = req.query.search
	let sort = req.query.sort || 'DESC'
	let page = req.query.page || 1
	let limit = req.query.limit || 10
	
	let query = `SELECT note_items.id, title, note, category_id, category, note_items.createAt, note_items.updateAt FROM note_items LEFT JOIN note_categories ON note_items.category_id = note_categories.id`
	
	// search by title
	if(!isEmpty(search)){ 
		query += ` WHERE title LIKE'%`+search+`%'`
	}

	// sorting descending and ascending
	query += ` ORDER BY note_items.updateAt `+ sort

	let offset
	// pagination
	if(page<=0){
		offset = 0;
	}
	else{
		offset = (page - 1)*limit
	}

	query += ` LIMIT `+limit+` OFFSET `+offset

	connection.query(query, (error, data, field) => {
		if(error){
			console.log(error);
			return response.error(res)
		}
		else{
			return response.info(data, page, limit, sort, res);
		}
	})
}

//GET A NOTE BY ID
exports.getANote = function(req, res){
	let id = req.params.id;
	let sort = req.query.sort || 'DESC'
	let page = req.query.page || 1
	let limit = req.query.limit || 10

	let query = `SELECT * FROM note_items WHERE id=${id}`
	connection.query(query, (error, data, field) => {
		if(error){
			console.log(error)
			return response.error(res)
		}
		else{
			return response.info(data, page, limit, sort, res);
		}
	})
}

//GET NOTE BY CATEGORY
exports.getNoteByCategory = function(req, res){
	let id = req.params.id;
	let search = req.query.search
	let sort = req.query.sort || 'DESC'
	let page = req.query.page || 1
	let limit = req.query.limit || 10

	let query = `SELECT note_items.id,title,note,category_id,category,color,note_items.createAt,note_items.updateAt FROM note_items LEFT JOIN note_categories ON note_items.category_id=note_categories.id WHERE note_items.category_id=${id}`

	// search by title
	if(!isEmpty(search)){ 
		query += ` AND title LIKE'%`+search+`%'`
	}

	// sorting descending and ascending
	query += ` ORDER BY note_items.updateAt `+ sort

	let offset
	// pagination
	if(page<=0){
		offset = 0;
	}
	else{
		offset = (page - 1)*limit
	}

	query += ` LIMIT `+limit+` OFFSET `+offset

	connection.query(query, (error, data, field) => {
		if(error){
			console.log(error);
			return response.error(res)
		}
    else{
			return response.info(data, page, limit, sort, res);
		}
	});
}

//GET ALL CATEGORY
exports.getCategories = function(req, res){
	let sort = req.query.sort || 'DESC'
	let page = req.query.page || 1
	let limit = req.query.limit || 10
	
	let query = `SELECT * FROM note_categories`
	connection.query(query, (error, data, field) => {
		if(error){
			console.log(error);
			return response.error(res);
		}
		else{
			return response.info(data, page, limit, sort, res);
		}
  });
}

//ADD NEW NOTE
exports.addNote = function(req, res){
	let {title, note, category_id} = req.body

	let query = `INSERT INTO note_items SET title='${title}',note='${note}',category_id=${category_id}`
	connection.query(query, (error, data, field) => {
			if(error){
				console.log(error);
				return response.error(res)
			}
			else{
				let query = `SELECT note_items.id,title,note,category_id,category,color,note_items.createAt,note_items.updateAt FROM note_items LEFT JOIN note_categories ON note_items.category_id = note_categories.id WHERE note_items.id=${data.insertId}`
				connection.query(query, (error, data2, field) => {
					if(error){
						console.log(error)
						return response.error(res);
					}
					else {
						return response.ok(data2, res);
					}
				})
			}
		}
	);
}

//ADD NEW CATEGORY
exports.addCategory = function(req, res){
	let {category, color, icon} = req.body

	let query = `INSERT INTO note_categories SET category='${category}',icon='${icon},color='${color}'`
	connection.query(query, (error, data, field) => {
		if(error) {
			console.log(error);
			return response.error(res)
		}
		else{
			let query = `SELECT * FROM note_categories WHERE id=${data.insertId}`
			connection.query(query, (error, data2, field) => {
				if(error){
					console.log(error)
					return response.error(res);
				}
				else {
					return response.ok(data2, res);
				}
			})
		}
	});
}

//UPDATE NOTE
exports.updateNote = function(req, res){
	let id = req.params.id;
	let {title, note, category_id} = req.body
	
	let query = `UPDATE note_items SET title='${title}',note='${note}',category_id=${category_id} WHERE id=${id}`
 	connection.query(query, (error, data, field) => {
		if (error){
			console.log(error);
			return response.error(res)
		}
		else{
			if (data.affectedRows == 0) {
				return response.notFound(res)
			}
			else {
				let query = `SELECT note_items.id,title,note,category_id,category,color,note_items.createAt,note_items.updateAt FROM note_items LEFT JOIN note_categories ON note_items.category_id=note_categories.id WHERE note_items.id=${id}`
				connection.query(query, (error, data2, field) => {
					if (error){
						console.log(error);
						return response.error(res)
					}
					else{
						return response.ok(data2, res);
					}
				})
   		}
		}
	})
}

//UPDATE CATEGORY
exports.updateCategory = function(req, res){
	let id = req.params.id;
	let {category, color, icon} = req.body
	 
	let query = `UPDATE note_categories SET category='${category}',color='${color}',icon='${icon}' WHERE id=${id}`
 	connection.query(query, (error, data, field) => {
		if (error){
			console.log(error)
			return response.error(res)
		}
		else{
			if (data.affectedRows == 0) {
				return response.notFound(res)
			}
			else{
				let query = `SELECT * FROM note_categories WHERE id=${id}`
				connection.query(query, (error, data2, field) => {
					if (error){
						console.log(error);
						return response.error(res)
					}
					else{
						return response.ok(data2, res);
					}
				})
			}
		}
	})
}

//DELETE NOTE
exports.deleteNote = function(req,res){
	let id = req.params.id;

	let query = `DELETE FROM note_items WHERE id=${id}`
	connection.query(query, (error, data, field) => {
		if (error){
			console.log(error)
			return response.error(res)
		}
		else{
			if (data.affectedRows == 0) {
				return response.notFound(res)
			}
			else{
				let query = `SELECT note_items.id,title,note,category_id,category,color,note_items.createAt,note_items.updateAt FROM note_items LEFT JOIN note_categories ON note_items.category_id=note_categories.id WHERE note_items.id=${id}`
				connection.query(query, (error, data2, field) => {
					if (error){
						console.log(error);
						return response.error(res)
					}
					else{
						return response.ok(data2, res);
					}
				})
			}
		}
	})
}

//DELETE CATEGORY
exports.deleteCategory = function(req, res){
	let id = req.params.id;

	let query = `DELETE FROM note_categories WHERE id=${id}`
	connection.query(query, (error, data, field) => {
		if (error){
			console.log(error)
			return response.error(res)
		}
		else{
			if (data.affectedRows == 0) {
				return response.notFound(res)
			}
			else{
				let query = `SELECT * FROM note_categories WHERE id=${id}`
				connection.query(query, (error, data2, field) => {
					if (error){
						console.log(error);
						return response.error(res)
					}
					else{
						return response.ok(data2, res);
					}
				})
			}
		}
	})
}	
// // const express = require('express');
// // const { signup, login, isAuth } = ('../controllers/auth.js');

// // module.exports = function(auth){
// // 	// const auth = require('../controllers/auth');
    
// //     // will match any other path
// //     router.use('/', (req, res, next) => {
// //         res.status(404).json({error : "page not found"});
// //     });
    
// //         router.get('/public', (req, res, next) => {
// //         res.status(200).json({ message: "here is your public resource" });
// //     });
    
// //     const router = express.Router();

// //     router.post('/login', login);

// //     router.post('/signup', signup);

// //     router.get('/private', isAuth);
        
        
// //     app.get('/login', login);
    
// //     app.post('/signup', signup);
    
// //     app.get('/private', isAuth)
    
// 	// // GET
// 	// app.get('/notes',controller.getNotes); //get all note
// 	// app.get('/notes/:id',controller.getANote) //get a note
// 	// app.get('/categories',controller.getCategories); //get all category
// 	// app.get('/categories/:id',controller.getNotesByCategory); //get note by category

// 	// // POST
// 	// app.post('/notes/',controller.addNote);
// 	// app.post('/categories/',controller.addCategory);

// 	// // PUT
// 	// // PUT and PATCH is same HTTP method to update data. On PUT, we have to send all the requested data and are not allowed to send undefined data whereas with PATCH, you can send only the data parameters you want to update
// 	// app.put('/notes/:id',controller.updateNote);
// 	// app.put('/categories/:id',controller.updateCategory);

// 	// // DELETE
// 	// app.delete('/notes/:id',controller.deleteNote);
// 	// app.delete('/categories/:id',controller.deleteCategory);




// const express = require('express');

// const { signup, login, isAuth } = require('../controllers/auth.js');

// const router = express.Router();

// router.post('/login', login);

// router.post('/signup', signup);

// router.get('/private', isAuth);

// router.get('/', (req, res, next) => {
//     res.status(200).json({ message: "here is your public resource" });
// });

// // will match any other path
// router.use('/', (req, res, next) => {
//     res.status(404).json({error : "page not found"});
// });

// // export default router;
// // module.exports(routes);
// module.exports = router;

// const express = require('express');

// const { signup, login, isAuth } = require('../controllers/auth.js');

// const router = express.Router();

// router.post('/login', login);

// router.post('/signup', signup);

// router.get('/private', isAuth);

// router.get('/public', (req, res, next) => {
//     res.status(200).json({ message: "here is your public resource" });
// });

// // will match any other path
// router.use('/', (req, res, next) => {
//     res.status(404).json({error : "page not found"});
// });

// module.exports = {router};
// export default router;

module.exports = app => {
	const tutorials = require("../controllers/tutorial.controller.js");
	const { signup, login, isAuth } = require( '../controllers/auth.js');
  
	var router = require("express").Router();
  
	router.post('/login', login);
	
	router.post('/signup', signup);

	router.get('/private', isAuth);
  
    router.get('/public', (req, res, next) => {
		res.status(200).json({ message: "here is your public resource" });
	});
  
    router.use('/', (req, res, next) => {
		res.status(404).json({error : "page not found"});
	});
	
	router.post('/register', function (req, res) {
		User.register(new User({ email: req.body.email }), req.body.password, function (err, user) {
		  if (err) {
			return res.status(400).send({ error: 'Email address in use.' })
		  }
		  res.status(200).send({ user: user.id });
		});
	  });
	  
	  router.post('/login', function (req, res, next) {
		passport.authenticate('local', function (err, user, info) {
		  if (err) {
			return next(err);
		  }
		  if (!user) {
			return res.status(401).json({ error: 'Invalid credentials.' });
		  }
		  if (user) {
			var token = jwt.sign({ id: user._id, email: user.email }, secret);
			return res
			  .status(200)
			  .json({ token });
		  }
		})(req, res, next);
	  });
	
  
	// Create a new Tutorial
	router.post("/", tutorials.create);
  
	// Retrieve all Tutorials
	router.get("/", tutorials.findAll);
  
	// Retrieve all published Tutorials
	router.get("/published", tutorials.findAllPublished);
  
	// Retrieve a single Tutorial with id
	router.get("/:id", tutorials.findOne);
  
	// Update a Tutorial with id
	router.put("/:id", tutorials.update);
  
	// Delete a Tutorial with id
	router.delete("/:id", tutorials.delete);
  
	// Create a new Tutorial
	router.delete("/", tutorials.deleteAll);
  
	app.use('/api/tutorials', router);
  };
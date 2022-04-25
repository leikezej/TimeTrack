id (an auto-generated UUID)
firstName
lastName
email
password
permissionLevel (what is this user allowed to do?)

POST on the endpoint /users (create a new user)
GET on the endpoint /users (list all users)
GET on the endpoint /users/:userId (get a specific user)
PATCH on the endpoint /users/:userId (update the data for a specific user)
DELETE on the endpoint /users/:userId (remove a specific user)

1 – Use HTTP Methods & API Routes

POST /user or PUT /user:/id to create a new user,
GET /user to retrieve a list of users,
GET /user/:id to retrieve a user,
PATCH /user/:id to modify an existing user record,
DELETE /user/:id to remove a user.

2 – Use HTTP Status Codes Correctly
2xx, if everything was okay,
3xx, if the resource was moved,
4xx, if the request cannot be fulfilled because of a client error (like requesting a resource that does not exist),
5xx, if something went wrong on the API side (like an exception happened)

If you are using Express, setting the status code is as easy as res.status(500).send({error: 'Internal server error happened'}). Similarly with Restify: res.status(201)

#3 – Use HTTP headers to Send Metadata
pagination,
rate limiting,
or authentication.
#4 – Pick the right framework for your Node.js REST API

#6 – Do JWT-Based, Stateless Authentication
JWT consists of three parts:

Header, containing the type of the token and the hashing algorithm
Payload, containing the claims
Signature (JWT does not encrypt the payload, just signs it!)
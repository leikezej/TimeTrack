require("dotenv").config({ path: __dirname + "/.env.test" });
const exec = require("execute-command-sync");
const { expect } = require("chai");
const rimraf = require("rimraf");
const MySQLSchema = require(__dirname + "/../src/index.js");

describe("MySQLSchema class", function() {

	after(() => {
		/*
		rimraf.sync(__dirname + "/schema.database.1.js");
		rimraf.sync(__dirname + "/schema.database.2.js");
		rimraf.sync(__dirname + "/schema.database.fn.js");
		rimraf.sync(__dirname + `/../schema.${process.env.DB_NAME}.json`);
		rimraf.sync(__dirname + `/../schema.${process.env.DB_NAME}.js`);
		//*/
	})

	it("generates schema by API", async function() {
		try {
			const schema = await MySQLSchema.getSchema({ output: __dirname + "/schema.database.1.js" });
			const schemaPredictible = require(__dirname + "/schema.database.1.predictible.js")
			//expect(schemaPredictible).to.deep.equal(schema);
		} catch(error) {
			console.log(error);
			throw error;
		}
	});

	it("generates schema by CLI", function() {
		try {
			exec(`./bin/mysql-schema\
				--user              ${process.env.DB_USER}\
				--password          ${process.env.DB_PASSWORD}\
				--host              ${process.env.DB_HOST}\
				--port              ${process.env.DB_PORT}\
				--database          ${process.env.DB_NAME}\
				--as-json           false\
				--output            ./test/schema.database.2.js`, { cwd: __dirname + "/.." });
			const schemaPredictible = require(__dirname + "/schema.database.1.predictible.js")
			const schema = require(__dirname + "/schema.database.2.js")
			//expect(schemaPredictible).to.deep.equal(schema);
		} catch(error) {
			console.log(error);
			throw error;
		}
	});

	it("allows functions in extensions", async function() {
		try {
			const schema = await MySQLSchema.getSchema({ output: __dirname + "/schema.database.fn.js" }, {
				general: {
					someFunction: (a,b,c) => a+b+c
				}
			});
			const schemaSource = require(__dirname + "/schema.database.fn.js");
			expect(schemaSource.someFunction(1,2,3)).to.equal(6);
			expect(schema.someFunction(1,2,3)).to.equal(6);
		} catch(error) {
			console.log(error);
			throw error;
		}
	});

	it("allows json and default filename", async function() {
		try {
			const schema = await MySQLSchema.getSchema({
				asJson: true,
			}, {
				general: {
					someNumber: 500,
					someFunction: (a,b,c) => a+b+c
				}
			});
			const schemaOutput = require(__dirname + `/../schema.${process.env.DB_NAME}.json`);
			expect(typeof schemaOutput.someFunction).to.equal("undefined");
		} catch(error) {
			console.log(error);
			throw error;
		}
	});

	it("allows js and default filename", async function() {
		try {
			const schema = await MySQLSchema.getSchema({}, {
				general: {
					someNumber: 500,
					someFunction: (a,b,c) => a+b+c
				}
			});
			const schemaOutput = require(__dirname + `/../schema.${process.env.DB_NAME}.js`);
			expect(typeof schemaOutput.someFunction).to.equal("function");
		} catch(error) {
			console.log(error);
			throw error;
		}
	});

});
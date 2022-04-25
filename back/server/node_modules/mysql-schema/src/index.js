const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
const { stringify: JsStringify } = require("javascript-stringify");
const _debug = require("debug");
const debug = _debug("mysql-schema");
const debugError = _debug("mysql-schema:error");

_debug.enable("mysql-schema");

/**
 *
 * ### `const MySQLSchema = require("mysql-schema")`
 *
 * Master class of the `mysql-schema` API.
 *
 */
class MySQLSchema {

	static getConnection(options) {
		return mysql.createConnection({
			user: options.user,
			password: options.password,
			database: options.database,
			host: options.host,
			port: options.port,
			...options.otherOptions
		});
	}

	static GET_QUERY_FOR_CONSTRAINTS(options) {
		return `
			SELECT
				TABLE_CONSTRAINTS.TABLE_NAME AS '$table',
				KEY_COLUMN_USAGE.COLUMN_NAME AS '$column',
				TABLE_CONSTRAINTS.CONSTRAINT_TYPE AS '$constraintType',
			    TABLE_CONSTRAINTS.CONSTRAINT_NAME AS '$constraintName',
				KEY_COLUMN_USAGE.REFERENCED_TABLE_NAME AS '$referencedTable',
			    KEY_COLUMN_USAGE.REFERENCED_COLUMN_NAME AS '$referencedColumn',
			    KEY_COLUMN_USAGE.ORDINAL_POSITION AS '$ordinalPosition',
		    	KEY_COLUMN_USAGE.POSITION_IN_UNIQUE_CONSTRAINT AS '$positionInUniqueConstraint'
			FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
			LEFT JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE
		    	ON KEY_COLUMN_USAGE.TABLE_SCHEMA = TABLE_CONSTRAINTS.TABLE_SCHEMA
					AND KEY_COLUMN_USAGE.TABLE_NAME = TABLE_CONSTRAINTS.TABLE_NAME
					AND KEY_COLUMN_USAGE.CONSTRAINT_NAME = TABLE_CONSTRAINTS.CONSTRAINT_NAME
			WHERE TABLE_CONSTRAINTS.TABLE_SCHEMA = '${options.database}'
				AND TABLE_CONSTRAINTS.CONSTRAINT_TYPE != 'PRIMARY KEY';`;
	}

	static GET_QUERY(options) {
		return `
			SELECT DISTINCT
			    TABLES.TABLE_SCHEMA AS '$database',
			    TABLES.TABLE_NAME AS '$table',
			    # TABLES.TABLE_TYPE AS '$tableType',
			    COLUMNS.COLUMN_NAME AS '$column',
			    COLUMNS.COLUMN_TYPE AS '$columnType',
			    COLUMNS.IS_NULLABLE AS '$isColumnNullable',
			    COLUMNS.COLUMN_DEFAULT AS '$defaultColumnValue',
			    COLUMNS.EXTRA AS '$extraColumnInformation',
			    COLUMNS.ORDINAL_POSITION AS '$ordinalColumnPosition',
			    COLUMNS.CHARACTER_MAXIMUM_LENGTH AS '$maximumCharactersLength',
			    IF(LOCATE(' unsigned', COLUMNS.COLUMN_TYPE) > 0,1,0) AS '$isUnsigned',
			    COLUMNS.EXTRA LIKE '%auto_increment%' AS '$isAutoIncrement',
			    KEY_COLUMN_USAGE.CONSTRAINT_NAME AS '$boundConstraint',
			    KEY_COLUMN_USAGE.REFERENCED_TABLE_NAME AS '$referencedTable',
			    KEY_COLUMN_USAGE.REFERENCED_COLUMN_NAME AS '$referencedColumn'
			FROM INFORMATION_SCHEMA.TABLES
			LEFT JOIN INFORMATION_SCHEMA.COLUMNS ON
			    COLUMNS.TABLE_SCHEMA = TABLES.TABLE_SCHEMA AND
			    COLUMNS.TABLE_NAME = TABLES.TABLE_NAME
			LEFT JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE ON
			    KEY_COLUMN_USAGE.TABLE_SCHEMA = TABLES.TABLE_SCHEMA AND
			    KEY_COLUMN_USAGE.TABLE_NAME = TABLES.TABLE_NAME AND
			    KEY_COLUMN_USAGE.COLUMN_NAME = COLUMNS.COLUMN_NAME
			WHERE
			    TABLES.TABLE_SCHEMA = '${options.database}' AND
			    TABLES.TABLE_TYPE = 'BASE TABLE'
			ORDER BY '$database' ASC, '$table' ASC, '$column' ASC;`;
	}

	static GET_QUERY_FOR_KEYS(options) {
		return `
			SELECT 
				INFORMATION_SCHEMA.KEY_COLUMN_USAGE.TABLE_SCHEMA AS '$database',
				INFORMATION_SCHEMA.KEY_COLUMN_USAGE.TABLE_NAME AS '$table',
				INFORMATION_SCHEMA.KEY_COLUMN_USAGE.COLUMN_NAME AS '$column',
				INFORMATION_SCHEMA.KEY_COLUMN_USAGE.CONSTRAINT_NAME AS '$constraint',
				INFORMATION_SCHEMA.KEY_COLUMN_USAGE.REFERENCED_TABLE_NAME AS '$referencedTable',
				INFORMATION_SCHEMA.KEY_COLUMN_USAGE.REFERENCED_COLUMN_NAME AS '$referencedColumn'
			FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
			WHERE INFORMATION_SCHEMA.KEY_COLUMN_USAGE.TABLE_SCHEMA = '${options.database}'
			AND INFORMATION_SCHEMA.KEY_COLUMN_USAGE.REFERENCED_COLUMN_NAME IS NOT NULL;
		`;
	}

	static DEFAULT_OPTIONS() {
		return {
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			database: process.env.DB_NAME,
			otherOptions: {},
			configurations: process.env.DB_CONFIGURATIONS || false,
			extensions: process.env.DB_EXTENSIONS || false,
			asJson: false,
			envFile: false,
			output: process.env.DB_SCHEMA || false,
		};
	}

	static DEFAULT_EXTENSIONS() {
		return {
			perColumn: {
				auth_user: {
					id: {
						description: "First injected extension"
					}
				}
			}
		};
	}

	/**
	 *
	 * ### `MySQLSchema.getSchema(options:Object):Promise<schema:Object>`
	 *
	 * @asynchronous
	 * @description Generates a schema representing the MySQL database pointing.
	 * @parameter `options` - object with properties (all of them optional):
	 *
	 *    - `user`:           `string` - user of the database
	 *        - *default:*      **`process.env.DB_USER`** or `"root"`
	 *    - `password`:       `string` - password of the database
	 *        - *default:*      **`process.env.DB_PASSWORD`** or `""`
	 *    - `host`:           `string` - host of the database
	 *        - *default:*      **`process.env.DB_HOST`** or `"127.0.0.1"`
	 *    - `port`:           `string` - port of the database
	 *        - *default:*      **`process.env.DB_PORT`** or `3306`
	 *    - `database`:       `string` - name of the database
	 *        - *default:*      **`process.env.DB_NAME`** or `"test"`
	 *    - `configurations`: `string` - configurations file for the database (overrides the other parameters)
	 *        - *default:*      **`process.env.DB_CONFIGURATIONS`** or `false`
	 *        - *usage:*        object that allows to set the same database configuration from an external file.
	 *    - `extensions`:     `string` - extensions file for the generation
	 *        - *default:*      **`process.env.DB_EXTENSIONS`** or `false`
	 *        - *usage:* object that allows to extend the schema:
	 *            - `perTable`:      filled with nested table, column, and extension properties.
	 *            - `perColumn`:     filled with nested column, and extension properties.
	 *            - in `general`:    filled with extension properties.
	 *    - `asJson`:         `boolean` - flag to output a `json` instead of a `js` file
	 *        - *default:*      `false`
	 *        - *usage:*        flag to output a JSON file. As JSON, functions, regex and dates are lost as genuine types in the exportation.
	 *    - `output`:         `string` - destination of the file with the schema
	 *        - *default:*      **`process.env.DB_SCHEMA`** or `false`
	 *
	 */
	static getSchema(passedOptions = {}, passedExtensions = {}) {
		let USEROPTIONS, USEREXTENSIONS, CONNECTION;
		return new Promise((ok, fail) => {
			USEROPTIONS = Object.assign({}, this.DEFAULT_OPTIONS(), passedOptions);
			if (USEROPTIONS.configurations) {
				Object.assign(USEROPTIONS, require(path.resolve(USEROPTIONS.configurations)));
			}
			USEREXTENSIONS = Object.assign({}, this.DEFAULT_EXTENSIONS(), passedExtensions);
			if (USEROPTIONS.extensions) {
				Object.assign(USEREXTENSIONS, require(path.resolve(USEROPTIONS.extensions)));
			}
			USEREXTENSIONS = Object.assign({}, USEREXTENSIONS, passedExtensions);
			if (USEROPTIONS.envFile) {
				require("dotenv").config({
					path: USEROPTIONS.envFile
				});
			}
			if(USEROPTIONS.debug) {
				debug("Opening connection...");
			}
			const query = this.GET_QUERY(USEROPTIONS);
			const queryForConstraints = this.GET_QUERY_FOR_CONSTRAINTS(USEROPTIONS);
			const queryForKeys = this.GET_QUERY_FOR_KEYS(USEROPTIONS);
			CONNECTION = this.getConnection(USEROPTIONS);
			let index = 0;
			const schema = {};
			if(USEROPTIONS.debug) {
				debug("Querying constraints...");
				debug(queryForConstraints);
			}
			CONNECTION.query(queryForConstraints, (error, data) => {
				if (error) {
					debugError("error generating schema constraints");
					debugError(error);
					return fail(error);
				}
				schema.constraints = data;
				index++;
				if (index === 3) ok(schema);
			});
			if(USEROPTIONS.debug) {
				debug("Querying columns...");
				debug(query);
			}
			CONNECTION.query(query, (error, data) => {
				if (error) {
					debugError("error generating schema");
					debugError(error);
					return fail(error);
				}
				schema.columns = data;
				index++;
				if (index === 3) ok(schema);
			});
			CONNECTION.query(queryForKeys, (error, data) => {
				if (error) {
					debugError("error generating keys");
					debugError(error);
					return fail(error);
				}
				schema.keys = data;
				index++;
				if (index === 3) ok(schema);
			});
		}).then(schema => {
			if(USEROPTIONS.debug) {
				debug("Closing connection...");
			}
			CONNECTION.end();
			return schema;
		}).then(schema => {
			if(USEROPTIONS.debug) {
				debug("Formatting result...");
			}
			return this.format(schema, USEROPTIONS, USEREXTENSIONS);
		}).then(schema => {
			return new Promise((ok, fail) => {
				if (!USEROPTIONS.output) {
					USEROPTIONS.output = `./schema.${USEROPTIONS.database}.${USEROPTIONS.asJson ? "json" : "js"}`;
				}
				if (USEROPTIONS.asJson) {
					if(USEROPTIONS.debug) {
						debug("Creating schema.*.json file...");
					}
					fs.writeFile(USEROPTIONS.output, this.formatJsonOutput(schema), "utf8", (error) => {
						if (error) return fail(error);
						return ok(schema);
					});
				} else {
					if(USEROPTIONS.debug) {
						debug("Creating schema.*.js file...");
					}
					fs.writeFile(USEROPTIONS.output, this.formatJsOutput(schema), "utf8", (error) => {
						if (error) return fail(error);
						return ok(schema);
					});
				}
			}).then(schema => {
				if(USEROPTIONS.debug) {
					debug("Created file at: ");
					debug(path.resolve(USEROPTIONS.output));
				}
				return schema;
			}).catch(error => {
				throw error
			});
		});
	}

	static format(...args) {
		return require(__dirname + "/formatter.js")(...args);
	}

	static formatJsonOutput(schema) {
		return JSON.stringify(schema, null, 2);
	}

	static formatJsOutput(schema) {
		return `module.exports = ${this.stringifyFn(schema, 2)};`;
	}

	/**
	 *
	 * ### `MySQLSchema.stringifyFn(value:Object, spaces:Number):String`
	 *
	 * @description Like `JSON.stringify`, but with a replacer that
	 * converts to JavaScript instead, accepting `Function`, `RegExp`
	 * and `Date` objects as native data.
	 *
	 */
	static stringifyFn(obj, tab = 2) {
		return JsStringify(obj, function(value, indent, stringify) {
			if(typeof value === "function") {
				return value.toString();
			}
			if (value instanceof RegExp) {
				return `/${value.source}/${value.flags}`;
			}
			if(value instanceof Date) {
				return `new Date(${JSON.stringify(value.toString())})`;
			}
			return stringify(value, null, tab);
		}, tab);
	}

}

module.exports = MySQLSchema;

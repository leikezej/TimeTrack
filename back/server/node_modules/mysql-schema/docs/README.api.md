
### `const MySQLSchema = require("mysql-schema")`

Master class of the `mysql-schema` API.




### `MySQLSchema.getSchema(options:Object):Promise<schema:Object>`



**Asynchronous**.


**Description**:  Generates a schema representing the MySQL database pointing.


**Parameter**:  `options` - object with properties (all of them optional):

   - `user`:           `string` - user of the database
       - *default:*      **`process.env.DB_USER`** or `"root"`
   - `password`:       `string` - password of the database
       - *default:*      **`process.env.DB_PASSWORD`** or `""`
   - `host`:           `string` - host of the database
       - *default:*      **`process.env.DB_HOST`** or `"127.0.0.1"`
   - `port`:           `string` - port of the database
       - *default:*      **`process.env.DB_PORT`** or `3306`
   - `database`:       `string` - name of the database
       - *default:*      **`process.env.DB_NAME`** or `"test"`
   - `configurations`: `string` - configurations file for the database (overrides the other parameters)
       - *default:*      **`process.env.DB_CONFIGURATIONS`** or `false`
       - *usage:*        object that allows to set the same database configuration from an external file.
   - `extensions`:     `string` - extensions file for the generation
       - *default:*      **`process.env.DB_EXTENSIONS`** or `false`
       - *usage:* object that allows to extend the schema:
           - `perTable`:      filled with nested table, column, and extension properties.
           - `perColumn`:     filled with nested column, and extension properties.
           - in `general`:    filled with extension properties.
   - `asJson`:         `boolean` - flag to output a `json` instead of a `js` file
       - *default:*      `false`
       - *usage:*        flag to output a JSON file. As JSON, functions, regex and dates are lost as genuine types in the exportation.
   - `output`:         `string` - destination of the file with the schema
       - *default:*      **`process.env.DB_SCHEMA`** or `false`




### `MySQLSchema.stringifyFn(value:Object, spaces:Number):String`



**Description**:  Like `JSON.stringify`, but with a replacer that 
converts to JavaScript instead, accepting `Function`, `RegExp`
and `Date` objects as native data.




# mysql-schema

Generate a JSON representing the schema of your MySQL database.

## Install

`$ npm i -g mysql-schema`

## Why?

To generate schema definitions of MySQL databases automatically.

To abstract your code and repeat things the least possible.

When you care about the shape, content relies on you. *Be water.*

## Usage

This tool enables you to generate a `json` file representing your `mysql` database.

### CLI usage

This is a short explanation of how the CLI works.

```bash
$ mysql-schema
	[--user]           root               # database user                 = process.env.DB_USER           || 'root'
	[--password]                          # database user password        = process.env.DB_PASSWORD       || ''
	[--host]           127.0.0.1          # database host                 = process.env.DB_HOST           || '127.0.0.1'
	[--port]           3306               # database port                 = process.env.DB_PORT           || 3306
	[--database]       test               # database name                 = process.env.DB_NAME           || 'test'
	[--configurations]                    # database configurations file  = process.env.DB_CONFIGURATIONS || false
	[--extensions]                        # database schema extensions    = process.env.DB_EXTENSIONS     || false
	[--as-json]                           # to generate a json & not a js = false
	--output           schema.{db}.js     # output file                   = "schema.${database}.js"
```

### API usage

This is a short explanation of how the API works.

```js
require("mysql-schema").getSchema({
	user:            process.env.DB_USER           || 'root',
	password:        process.env.DB_PASSWORD       || '',
	host:            process.env.DB_HOST           || '127.0.0.1',
	port:            process.env.DB_PORT           || '3306',
	database:        process.env.DB_NAME           || 'test',
	configurations:  process.env.DB_CONFIGURATIONS || false,
	extensions:      process.env.DB_EXTENSIONS     || false,
	asJson:          false,
	output:          `./schema.${database}.js`
})
```

## API reference



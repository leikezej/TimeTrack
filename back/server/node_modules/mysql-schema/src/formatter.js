const toCamelCase = function(text) {
    // return text;
    return text.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
    });
};
const toPascalCase = function(text) {
    const temp = toCamelCase(text);
    return temp.substr(0, 1).toUpperCase() + temp.substr(1);
    return text;
};
const findIn = function(object, selectors, defValue = undefined) {
    const selector = [].concat(selectors);
    let selected = object;
    for (let index = 0; index < selector.length; index++) {
        if (!(selector[index] in selected)) {
            return defValue;
        }
        selected = selected[selector[index]];
    }
    return selected;
};
const findInAny = function(objects, selectors, defValue = undefined) {
    const selector = [].concat(selectors);
    ObjectIteration:
        for (let indexObjects = 0; indexObjects < objects.length; indexObjects++) {
            let selected = objects[indexObjects];
            for (let index = 0; index < selector.length; index++) {
                if (!(selector[index] in selected)) {
                    continue ObjectIteration;
                }
                selected = selected[selector[index]];
            }
            return selected;
        }
    return defValue;
};
const allTypes = {
	boolean: ["BIT", "TINYINT"],
	spatial: ["GEOMETRY", "POINT", "LINESTRING", "POLYGON", "GEOMETRYCOLLECTION", "MULTILINESTRING", "MULTIPOINT", "MULTIPOLYGON"],
	number: ["SMALLINT", "MEDIUMINT", "INT", "BIGINT", "DECIMAL", "FLOAT", "DOUBLE", "BIT"],
	binary: ["BINARY", "VARBINARY"],
	text: ["VARCHAR", "TINYTEXT", "TEXT", "MEDIUMTEXT", "LONGTEXT"],
	file: ["TINYBLOB", "BLOB", "MEDIUMBLOB", "LONGBLOB"],
	list: ["ENUM", "SET"],
	date: ["DATE", "TIME", "DATETIME", "TIMESTAMP", "YEAR"],
	json: ["JSON"],
};
const floatNumberTypes = ["DECIMAL", "FLOAT", "DOUBLE"];
const getGeneralInformation = function(mysqlTypeLower, row, table, results) {
	const mysqlType = mysqlTypeLower.toUpperCase();
	let info = {};
	Object.keys(allTypes).forEach(generalType => {
		const subtypes = allTypes[generalType];
		subtypes.forEach(subtype => {
			if (mysqlType.indexOf(subtype) === 0) {
				info.type = generalType;
				info.subtype = subtype.toLowerCase();
				info.typeTerm = mysqlTypeLower.replace(/(\(| ).*/g, "");
				info.archetype = mysqlTypeLower;
			}
		});
	});
	///////////////////////////////////////
	// 1. On list: get optionsList
	if(info.type === "list") {
		info.optionsList = row.$columnType
			.replace(info.typeTerm, "")
			.replace(/^\('|'\)$/g, "")
			.split(/','/g);
	} else {
		info.optionsList = null;
	}
	///////////////////////////////////////
	// 2. On numbers: get isFloat
	if (info.type === "number") {
		if (floatNumberTypes.indexOf(info.subtype.toUpperCase()) !== -1) {
			info.isFloat = false;
		} else {
			info.isFloat = true;
		}
	} else {
		info.isFloat = null;
	}
	//////////////////////////////////////
	// 3. On numbers: get isUnsigned
	if (info.type === "number") {
		if (row.$isUnsigned === 1) {
			info.isUnsigned = true;
		} else {
			info.isUnsigned = false;
		}
	} else {
		info.isUnsigned = null;
	}
	//////////////////////////////////////
	// 4. On numbers & primary keys: get isAutoIncrement
	if (info.type === "number" && row.$boundConstraint === "PRIMARY") {
		if (row.$isAutoIncrement === 1) {
			info.isAutoIncrement = true;
		} else {
			info.isAutoIncrement = false;
		}
	} else {
		info.isAutoIncrement = null;
	}
	///////////////////////////////////////
	// 5. On texts: get maxTextLength
	if (["text", "binary", "file", "json"].indexOf(info.type) !== -1) {
		info.maxTextLength = row.$maximumCharactersLength;
	} else {
		info.maxTextLength = row.$maximumCharactersLength;
	}
	///////////////////////////////////////
	// 6. On bound constraint: get referencesTo
	const { constraints } = results;
	info.isUnique = row.$boundConstraint === "PRIMARY";
	info.isForeignKey = false;
	info.referencesTo = [];
	info.referencedBy = [];
	/*
	for(let index = 0; index < constraints.length; index++) {
		const constraint = constraints[index];
		const isSameTable = constraint.$table === row.$table;
		const isSameColumn = constraint.$column === row.$column;
		if(isSameTable && isSameColumn) {
			if(constraint.$constraintType === "UNIQUE") {
				info.isUnique = true;
			} else if(constraint.$constraintType === "FOREIGN KEY") {
				info.isForeignKey = true;
				info.referencesTo.push({
					id: constraint.$constraintName,
					model: toPascalCase(constraint.$referencedTable),
					table: constraint.$referencedTable,
					column: constraint.$referencedColumn,
					isPrimaryKey: row.$boundConstraint === "PRIMARY",
				});
			}
		}
	}
	///////////////////////////////////////
	// 7. On any: get referencedBy
	const { columns } = results;
	columns.forEach(column => {
		const isSameTable = column.$referencedTable === row.$table;
		const isSameColumn = column.$referencedColumn === row.$column;
		if(isSameTable && isSameColumn) {
			info.referencedBy.push({
				model: toPascalCase(column.$table),
				table: column.$table,
				column: column.$column,
				isPrimaryKey: column.$boundConstraint === "PRIMARY"
			});
		}
	});
	//*/
	return info;
};
const createColumnObjectSorted = function(unordered) {
	const ordered = {};
	const order = [,
		"order",
		"model",
		"table",
		"column",
		"type",
		"typeTerm",
		"subtype",
		"default",
		"extra",
		"isPrimaryKey",
		"isAutoIncrement",
		"isNullable",
		"isFloat",
		"isUnsigned",
		"isForeignKey",
		"isUnique",
		"referencesTo",
		"referencedBy",
		"optionsList",
		"minTextLength",
		"maxTextLength",
		"database",
		"archetype",
		"schema",
	];
	Object.keys(unordered).sort().sort((a, b) => {
		return order.indexOf(a) > order.indexOf(b) ? 1 : -1;
	}).filter(function(key) {
		return !key.startsWith("$");
	}).forEach(function(key) {
		ordered[key] = unordered[key];
	});
	return ordered;
};
const createTableObjectSorted = function(unordered) {
	const ordered = {};
	Object.keys(unordered).sort((a, b) => {
		return unordered[a].order > unordered[b].order ? 1 : -1;
	}).forEach(function(key) {
		ordered[key] = unordered[key];
	});
	return ordered;
};
module.exports = function DefaultSort(results, options, extensions) {
	const schema = {};
	const { columns } = results;
	// @TODO: 
	for (let iRow = 0; iRow < columns.length; iRow++) {
		const row = columns[iRow];
		// 1. Create table if not exists:
		const modelName = toPascalCase(row.$table);
		const tableName = row.$table;
		if (!(tableName in schema)) {
			schema[tableName] = {};
		}
		// 2. Add column:
		const columnName = row.$column;
		if (!(columnName in schema[tableName])) {
			schema[tableName][columnName] = Object.assign({}, {schema: row});
		}
		// 3. Add column attributes:
		schema[tableName][columnName].isNullable = row.$isColumnisNullable === "YES";
		schema[tableName][columnName].default = row.$defaultColumnValue;
		schema[tableName][columnName].extra = row.$extraColumnInformation === "" ? false : row.$extraColumnInformation;
		schema[tableName][columnName].isPrimaryKey = row.$boundConstraint === "PRIMARY";
		schema[tableName][columnName].order = row.$ordinalColumnPosition;
		schema[tableName][columnName].column = columnName;
		schema[tableName][columnName].model = modelName;
		schema[tableName][columnName].table = row.$table;
		schema[tableName][columnName].database = row.$database;
		const typeInfo = getGeneralInformation(row.$columnType, row, schema[tableName], results);
		Object.assign(schema[tableName][columnName], typeInfo);
		schema[tableName][columnName] = createColumnObjectSorted(schema[tableName][columnName]);
		
		if((typeof(extensions.perColumn) === "object") && row.$table in extensions.perColumn) {
			if(columnName in extensions.perColumn[row.$table]) {
				Object.assign(schema[tableName][columnName], extensions.perColumn[row.$table][columnName]);
			}
		}
	}
	Object.keys(schema).forEach(tableName => {
		schema[tableName] = createTableObjectSorted(schema[tableName]);
	});

	const constraints = Object.keys(schema).reduce((models, tableName) => {
		const modelAttributes = schema[tableName];
		const modelName = toPascalCase(tableName);
		const model = (() => {
			const attributes = Object.keys(modelAttributes);
			const column = modelAttributes[attributes[0]];
			const model = column.model;
			const database = column.database;
			const table = column.table;
			const primaryKeys = (() => {
				const pks = [];
				attributes.forEach(attributeName => {
					const attribute = modelAttributes[attributeName];
					if(attribute.isPrimaryKey) {
						pks.push(attributeName);
					}
				});
				return pks;
			})();
			/*
			const foreignKeys = (() => {
				const fks = [];
				attributes.forEach(attributeName => {
					const attribute = modelAttributes[attributeName];
					if(attribute.isForeignKey) {
						attribute.referencesTo.forEach(referencesTo => {
							const { table, column, id } = referencesTo;
							fks.push({
								constraint: id,
								column: attributeName,
								referencedTable: table,
								referencedColumn: column
							});
						});
					}
				});
				return fks;
			})();
			//*/
			///////////////// +>>>>>>>>>>>>>
			const foreignKeys = [];
			for(let indexKeys = 0; indexKeys < results.keys.length; indexKeys++) {
				const keyData = results.keys[indexKeys];
				const { $constraint, $table, $column, $referencedTable, $referencedColumn } = keyData;
				if($table === tableName) {
					modelAttributes[$column].isForeignKey = true;
					const refData = { constraint: $constraint, column: $column, referencedTable: $referencedTable, referencedColumn: $referencedColumn };
					modelAttributes[$column].referencesTo.push(refData);
					foreignKeys.push(refData);
				}
				
			}
			///////////////// <<<<<<<<<<<<<+

			let additionals = {};
			if((typeof(extensions.perTable) === "object") && table in extensions.perTable) {
				additionals = extensions.perTable[table];
			}
			return { database, model, table, attributes, primaryKeys, foreignKeys, ...additionals };
		})();
		models[tableName] = model;
		return models;
	}, {});
	const _ = { columns: schema, constraints };
	if(extensions.general) {
		Object.assign(_, extensions.general);
	}
	return _;
};
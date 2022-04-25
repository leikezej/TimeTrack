module.exports = {
  columns: {
    Table_1: {
      Column_1: {
        order: 1,
        model: 'Table_1',
        table: 'Table_1',
        column: 'Column_1',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: true,
        isAutoIncrement: false,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'database2',
        archetype: 'int',
        schema: {
          $database: 'database2',
          $table: 'Table_1',
          $column: 'Column_1',
          $columnType: 'int',
          $isColumnNullable: 'NO',
          $defaultColumnValue: null,
          $extraColumnInformation: '',
          $ordinalColumnPosition: 1,
          $maximumCharactersLength: null,
          $isUnsigned: 0,
          $isAutoIncrement: 0,
          $boundConstraint: 'PRIMARY',
          $referencedTable: null,
          $referencedColumn: null
        }
      }
    }
  },
  constraints: {
    Table_1: {
      database: 'database2',
      model: 'Table_1',
      table: 'Table_1',
      attributes: [
        'Column_1'
      ],
      primaryKeys: [
        'Column_1'
      ],
      foreignKeys: []
    }
  }
};
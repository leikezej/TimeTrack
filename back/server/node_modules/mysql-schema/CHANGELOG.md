### Version 0.0.6:

- Fixed `ORDER BY` clause that was failing in `MySQL v.8.0.23`.
  - File `index.js` was changed from:
  ```sql
ORDER BY TABLES.TABLE_SCHEMA ASC, TABLES.TABLE_NAME ASC, COLUMNS.COLUMN_NAME ASC;
  ```
  - To:
  ```sql
ORDER BY '$database' ASC, '$table' ASC, '$column' ASC;
  ```




### Version 1:

- Fixed `MULTIPLE UNIQUE CONSTRAINTS` hiding `FOREIGN KEYS`.
  (dirty patch but it seemed enough)

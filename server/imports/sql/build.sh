sql2graphql \
--output-dir=server/imports/sql/models \
--database=reviews \
--host=dockerhost \
--port=3306 \
--password=password \
--backend=mysql \
--es6 --colors

# --relay, -r - Generate Relay-style schema (boolean [default: false])
# --output-dir, -o - Directory to use when generating app (string [required])
# --es6 - Use ES6 for generated code (boolean [default: false])
# --database, --db - Database name (string [required])
# --db-filename - Database filename, used for SQLite (string)
# --host, -h - Hostname of database server (string [default: "localhost"])
# --port, -P - Port number of database server (number)
# --user, -u - Username to use when connecting (string [default: "root"])
# --password, -p - Password to use when connecting (string [default: ""])
# --table, -t - Tables to generate type schemas for (array [default: "*"])
# --backend, -b - Type of database (string [default: "mysql"])
# --strip-suffix - Remove a suffix from table names when generating types (array)
# --strip-prefix - Remove a prefix from table names when generating types (array)
# --interactive, -i - Interactive mode (boolean [default: false])
# --colors, -c - Colorize the code output (boolean [default: false])
# --use-tabs - Use tabs for indentation (boolean [default: false])
# --tab-width - Width of tabs (number [default: 2])
# --quote - Quote style (single/double) (string [default: "single"])
# --default-description - The description to use for columns without a comment (string [default: "@TODO DESCRIBE ME"])
# --unaliased-primary-keys Disable aliasing of primary key fields to "id" for each type (boolean [default: false])
# --help - Show help (boolean)

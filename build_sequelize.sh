./node_modules/sequelize-auto/bin/sequelize-auto \
--output=./server/imports/sql/models \
--database=reviews \
--host=dockerhost \
--port=3306 \
--user=root \
--pass=password \
--dialect=mysql \
--es6 --colors

# -h, --host      IP/Hostname for the database.                                      [required]
# -d, --database  Database name.                                                     [required]
# -u, --user      Username for database.                                             [required]
# -x, --pass      Password for database.
# -p, --port      Port number for database.
# -c, --config    JSON file for sending additional options to the Sequelize object.
# -o, --output    What directory to place the models.
# -e, --dialect   The dialect/engine that you're using: postgres, mysql, sqlite
# -a, --additional  Path to a json file containing model definitions (for all tables) which are to be
#
# defined within a model's configuration parameter. For more info:
#  https://sequelize.readthedocs.org/en/latest/docs/models-definition/#configuration

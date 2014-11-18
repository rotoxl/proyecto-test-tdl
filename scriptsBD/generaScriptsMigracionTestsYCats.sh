# /Applications/MAMP/Library/bin/mysqldump -u root -p --no-data --opt tapp37 > "./migration_schema.sql"
# /Applications/MAMP/Library/bin/mysqldump -u root -p --no-create-info --opt tapp37 > "./migration_data.sql"

f=`date +%Y-%m-%d:%H:%M:%S`
echo --Export en fecha: $f > ./EXPORT_tablasTestsYRelacionadas.sql

echo "
truncate table preguntas_tests;
truncate table tests_t;
truncate table test_categorias;
truncate table categorias;
truncate table tests;
" >> ./EXPORT_tablasTestsYRelacionadas.sql

/Applications/MAMP/Library/bin/mysqldump -u root -proot tapp37 --no-create-info categorias 		>> ./EXPORT_tablasTestsYRelacionadas.sql
/Applications/MAMP/Library/bin/mysqldump -u root -proot tapp37 --no-create-info tests 			>> ./EXPORT_tablasTestsYRelacionadas.sql
/Applications/MAMP/Library/bin/mysqldump -u root -proot tapp37 --no-create-info test_categorias >> ./EXPORT_tablasTestsYRelacionadas.sql
/Applications/MAMP/Library/bin/mysqldump -u root -proot tapp37 --no-create-info tests_t 		>> ./EXPORT_tablasTestsYRelacionadas.sql
/Applications/MAMP/Library/bin/mysqldump -u root -proot tapp37 --no-create-info preguntas_tests >> ./EXPORT_tablasTestsYRelacionadas.sql

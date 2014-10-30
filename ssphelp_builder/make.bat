cd "%~dp0"
call node_modules\.bin\coffee html_content_extract.coffee ../ssphelp src
call indexsite "do"
call nwordlinks_default
call ass-indexer -i search.html -o dist/assdb.json dist

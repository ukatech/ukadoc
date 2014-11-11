#!/bin/sh
node node_modules/indexsite/indexsite.js do
node node_modules/nwordlinks/nwordlinks.js -d ./dist/ -w reference.html -s "#contents dl" -c "#contents" -x -h
node node_modules/all-site-search/ass-indexer.js -i search.html -o dist/assdb.json dist

cp -f dist/* ../../ukadoc/ssphelp/
cp -f -R dist/lib ../../ukadoc/ssphelp/
cp -f -R ../ssphelp/image ../../ukadoc/ssphelp/
cp -f -R ../manual ../../ukadoc

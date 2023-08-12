#!/bin/sh
node node_modules/indexsite/indexsite.js do
node node_modules/nwordlinks/nwordlinks.js -d ../ssphelp/ -w reference.html -s "#contents dl" -c "#contents" -x -h
node node_modules/all-site-search/ass-indexer.js -i search.html -o ../ssphelp/assdb.json ../ssphelp

cp -f ../ssphelp/* ../../ukadoc/ssphelp/
cp -f -R ../ssphelp/lib ../../ukadoc/ssphelp/
cp -f -R ../ssphelp/image ../../ukadoc/ssphelp/
cp -f -R ../manual ../../ukadoc

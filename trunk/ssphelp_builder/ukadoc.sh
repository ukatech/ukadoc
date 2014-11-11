#!/bin/sh
export LANG=ja_JP.UTF-8

PATH="$PATH:/usr/local/bin"

svn update /home/web/bugtraq/ukadoc-src

cd /home/web/bugtraq/ukadoc-src/ssphelp_builder/

sh node_modules/.bin/coffee html_content_extract.coffee ../ssphelp src
node node_modules/indexsite/indexsite.js do
node node_modules/nwordlinks/nwordlinks.js -d ./dist/ -w reference.html -s "#contents dl" -c "#contents" -x -h
node node_modules/all-site-search/ass-indexer.js -i search.html -o dist/assdb.json dist

cp -f dist/* ../../ukadoc/ssphelp/
cp -f -R dist/lib ../../ukadoc/ssphelp/
cp -f -R ../ssphelp/image ../../ukadoc/ssphelp/
cp -f -R ../manual ../../ukadoc

svn revert src
svn revert dist

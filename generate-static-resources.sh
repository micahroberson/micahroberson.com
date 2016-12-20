#!/bin/bash

echo "Generating static resources"
rm -rf dist/*
wget --html-extension --recursive --convert-links --page-requisites --no-parent --directory-prefix dist --no-host-directories --restrict-file-names=unix http://localhost:3000/
sed -i -E 's/data-react-?[a-zA-Z]*="[0-9]*"//g' dist/index.html
sed -i -E 's/class="next-head"//g' dist/index.html
sed -i -E 's/<script.*<\/script>//g' dist/index.html
sed -i -E 's/id="__next"//g' dist/index.html

echo "Done"
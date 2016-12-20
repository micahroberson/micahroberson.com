#!/bin/bash

echo "Generating static resources"
rm -rf dist/*
wget --html-extension --recursive --convert-links --page-requisites --no-parent --directory-prefix dist --no-host-directories --restrict-file-names=unix http://localhost:3000/
sed -i ':a;N;$!ba;s/\n//g' dist/index.html
sed -i -E 's/data-react-?[a-zA-Z]*="[0-9]*"//g' dist/index.html
sed -i -E 's/class="next-head"//g' dist/index.html
sed -i -E 's/<script.*<\/script>//g' dist/index.html
sed -i -E 's/id="__next"//g' dist/index.html
analytics="<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-34306816-1', 'auto');ga('send', 'pageview');</script>"
sed -i "s#</body>#$analytics</body>#" dist/index.html
echo "Done"

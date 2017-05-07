#!/bin/bash

echo "Generating static resources"
rm -rf dist/*
wget --html-extension --recursive --convert-links --page-requisites --no-parent --directory-prefix dist --no-host-directories --restrict-file-names=unix http://localhost:3000/
sed -i ':a;N;$!ba;s/\n//g' dist/index.html
sed -i -E 's/data-react-?[a-zA-Z]*="[0-9]*"//g' dist/index.html
sed -i -E 's/class="next-head"//g' dist/index.html
sed -i -E 's/<script.*<\/script>//g' dist/index.html
sed -i -E 's/id="__next"//g' dist/index.html
cp dist/index.html dist/amp.html

analytics="<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-34306816-1', 'auto');ga('send', 'pageview');</script>"
sed -i "s#</body>#$analytics</body>#" dist/index.html
sed -i 's#</head>#<link rel="amphtml" href="https://micahroberson.com/amp.html"></head>#' dist/index.html

sed -i 's#<html>#<html ⚡>#' dist/amp.html
sed -i 's#<style>#<style amp-custom>#' dist/amp.html
sed -i 's#</head>#<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script><style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript><script async src="https://cdn.ampproject.org/v0.js"></script></head>#' dist/amp.html
sed -i 's#</body>#<amp-analytics type="googleanalytics" id="analytics1"><script type="application/json">{"vars": {"account": "UA-34306816-1"}, "triggers": {"trackPageview": {"on": "visible", "request": "pageview"}}}</script></amp-analytics></body>#' dist/amp.html
echo "Done"

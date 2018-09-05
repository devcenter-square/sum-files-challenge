#!/usr/bin/bash

git checkout -b "files/generate"
counter=0
while [ $counter -le 10 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
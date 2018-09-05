#!/usr/bin/bash

counter=30
while [ $counter -le 39 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
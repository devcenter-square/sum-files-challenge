#!/usr/bin/bash

counter=40
while [ $counter -le 49 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
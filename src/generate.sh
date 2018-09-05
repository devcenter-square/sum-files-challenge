#!/usr/bin/bash

counter=60
while [ $counter -le 69 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
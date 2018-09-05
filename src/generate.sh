#!/usr/bin/bash

counter=50
while [ $counter -le 59 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
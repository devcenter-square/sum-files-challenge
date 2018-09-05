#!/usr/bin/bash

counter=4
while [ $counter -le 100 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
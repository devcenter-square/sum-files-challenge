#!/usr/bin/bash

counter=11
while [ $counter -le 19 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
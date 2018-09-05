#!/usr/bin/bash

counter=70
while [ $counter -le 79 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
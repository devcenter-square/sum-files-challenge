#!/usr/bin/bash

counter=80
while [ $counter -le 89 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
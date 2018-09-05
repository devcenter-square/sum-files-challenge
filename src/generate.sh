#!/usr/bin/bash

counter=20
while [ $counter -le 29 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done
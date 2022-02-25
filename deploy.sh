#!/usr/bin/env sh
set -e

npm run build

cd dist


git init
git checkout -b dev
git add -A
git commit -m 'deploy'

git push -f git@github.com:nicolaszi/starwars-list.git dev:gh-pages

cd ..
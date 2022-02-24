#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist


git init
git checkout -b dev
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nicolaszi/starwars-list.git dev:gh-pages

cd -
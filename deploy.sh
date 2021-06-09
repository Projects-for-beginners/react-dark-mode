#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy assets
cp -r src dist

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Projects-for-beginners/react-dark-mode.git master:gh-pages

cd -
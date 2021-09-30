set -e

npm run build

cd ./dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/teamGro/abc.git master:gh-pages


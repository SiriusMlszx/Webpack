yarn build &&
git checkout gh-pages &&
rm -rf src *.html *.css *.png *.js &&
mv dist/* ./ &&
rm -rf dist;
git add . && 
git commit -m 'update' &&
git push 
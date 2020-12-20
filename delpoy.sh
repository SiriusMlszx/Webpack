yarn build &&
git checkout gh-pages &&
del /p src *.html *.css *.png *.js &&
mv dist/* ./ &&
del /p dist;
git add . && 
git commit -m 'update' &&
git push 
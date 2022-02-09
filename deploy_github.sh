rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update website" &&
git branch -M main &&
git remote add origin git@github.com:heycn/elephant-notebook-website.git &&
git push -f -u origin main &&
cd -
echo https://heycn.github.io/elephant-notebook-website/index.html
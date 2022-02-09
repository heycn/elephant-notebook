rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update website" &&
git remote add origin git@gitee.com:heycn/elephant-notebook-website.git &&
git push -f -u origin master &&
cd -
echo https://heycn.gitee.io/elephant-notebook-website/
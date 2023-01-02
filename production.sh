#!/bin/bash
ng build --configuration production
git checkout production
find . -maxdepth 1 -type f -not \( -name ".git" -or -name ".gitignore" -or -name "production.sh" \) -delete
rm -rf assets
cp -r dist/Mouhib-Porfolio/* ./
cp dist/Mouhib-Porfolio/.htaccess ./.htaccess

# my-cordova

```
sudo npm install -g cordova
cordova create MyCordova com.forsrc.cordova MyCordova
cd MyCordova
cordova platform add browser
cordova platform add ios
cordova platform add android
sudo npm install -g @angular/cli

mv .gitignore .gitignore.bak
mv package.json package.json.bak
cd ..
ng new MyCordova --create-application=false --routing=false --style=scss

cd MyCordova/

ng g application app --routing=true --style=scss

ng add @angular/material

sed -i 's/dist\/app/www/' angular.json
#sed -i 's/es2015/es5/' tsconfig.json

# main.ts:
#const onDeviceReady = () => {
#  platformBrowserDynamic().bootstrapModule(AppModule)
#    .catch(err => console.error(err));
#};
# index.html:  <script type="text/javascript" src="cordova.js"></script>

ng build --baseHref=./

cordova run browser
```

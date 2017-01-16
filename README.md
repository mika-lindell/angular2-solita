# Having some good times with Angular2.

Requires NodeJS & npm.

To install:
```
– npm install
```

Make copies of following files:
* config/webpack.dev.default.ts
* config/webpack.prod.default.ts

And rename copied files to:
* config/webpack.dev.ts
* config/webpack.prod.ts

Profit: Change local config without messing it in repo.


Run with:
```
– npm start
```

Dev server defaults at: [http://192.168.0.100:8080/]
* For one to access it with other devices in same LAN.
* If it doesn't work for you, change it to *http://localhost* or something else at *config/helpers.js*.

<del>
Build with:
```
– npm run build
```
*config/webpack.prod.js:*
When building remember to set *publicPath* (cdn) as the path or url containing your assets e.g scripts, images & css.
</del>

<del>
Test with:
```
– npm test
```
</del>
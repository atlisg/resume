# resume

My online résumé built in Vue.js. Template used: [vue-template-webpack-typescript](https://github.com/ryutamaki/vue-template-webpack-typescript) (A full-featured Webpack + typescript + vue-loader setup with hot reload, linting, testing & css extraction)

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Deployment

```bash
# Log into Droplet
ssh root@167.71.129.131

# Find running process
forever list

# Stop server
forever stop {pid}

# After pulling repo, remove dist folder
rm -rf dist

# Build new dist
npm run build

# Start server
forever start -c http-server ./dist -p 80
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

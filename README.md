# Taskmanager
Demo: http://boolie.org/sandbox/durchstarten-mit-angularjs-bootstrap/#/
german Tutorial: http://boolie.org/durchstarten-mit-angularjs-bootstrap

## install Dependencies
`npm install`

## modify Boostrap
`cd node_modules/boostrap/`

`npm install`

`sudo npm install -g grunt-cli`

change the Font Path:

/node_modules/boostrap/less/variables.less :

l79: @icon-font-path:          "../fonts/"; to @icon-font-path:          "../../font/icon/";

run `grunt`

### Copy the Files to Projektdir
`cp node_modules/angular/angular.min.js library/angular/angular.min.js`

`cp node_modules/angular-route/angular-route.min.js library/angular/angular-route.min.js`

`cp node_modules/angular-animate/angular-animate.min.js library/angular/angular-animate.min.js`

`cp node_modules/bootstrap/dist/css/bootstrap.min.css library/bootstrap/bootstrap.min.css`

`cp node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot font/icon/glyphicons-halflings-regular.eot`

`cp node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg font/icon/glyphicons-halflings-regular.svg`

`cp node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf font/icon/glyphicons-halflings-regular.ttf`

`cp node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff font/icon/glyphicons-halflings-regular.woff`

`cp node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2 font/icon/glyphicons-halflings-regular.woff2`

`cp node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js library/angularUI/ui-bootstrap.js`

`cp node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css library/angularUI/ui-bootstrap-csp.css`

`cp node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js library/angularUI/ui-bootstrap-tpls.js`

## install / start Server
`npm install http-server -g`

`http-server`

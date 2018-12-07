# PublicNTP website
This is the official repo for the PublicNTP Website

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
yarn - https://yarnpkg.com/lang/en/docs/install/
npm - https://www.npmjs.com/get-npm
```

### Installing

Run `npm install` or `yarn install`

To start the local server run `npm start`

> Note:
> Partials are not registered with gulp so if any changes take place in a partial
> The project will need to be manually restarted.

### Stack:
* [Node](https://nodejs.org/en/) + [express](https://expressjs.com),
* [Handlebars](https://handlebarsjs.com/),
* [gulp](https://gulpjs.com/),
* [scss](https://sass-lang.com/)



## Deployment and New content documentation

This project is divided into two parts. The static section, and the dynamic section.
The dynamic section of the app only has one purpose, to build the static part.
The static section of the app can be found in the dist folder. The dist folder should not be edited manually as it will be overwritten by the build process.

All builds should be done on dev.


### Push to dev:

  - `cd /var/www/publicntp/dist`

  - `gulp gather --env dev`

  - `gulp pushs3 --env dev`

###  Push to staging:

  - `gulp gather --env staging`

  - `gulp pushs3 --env staging`

###  Push to production:
  **MAKE A BACKUP FIRST**

  - `gulp gather --env production`

  - `gulp pushs3 --env production`

  =================================

  To gather/generate website files and also push them to the s3 bucket, do the following:

  - `gulp ship --env dev/staging/production`

  - The command take up to a 1 minute to run, so leave it and be patient :)

## Credit
- [PublicNTP, Inc.](https://publicntp.org)
- [PXP](https://pxp200.com)
- [Rooster Glue, Inc.](https://roosterglue.com)
- [GPSTest Project](https://github.com/barbeau/gpstest/wiki)
- [Keltson Howell](https://keltsonhowell.com)
- [Tod Robbins](https://github.com/todrobbins)
- [Cody Deskins](https://github.com/cdeskins)
- [Alex Porter](https://github.com/TheAlexPorter)
- [Eric Evans](https://github.com/Zipbug)

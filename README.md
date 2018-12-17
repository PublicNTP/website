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

### Individuals
- [Alex Porter](https://github.com/TheAlexPorter)
- [Brad Woodfin](https://github.com/woodfjo)
- [Bryant Oblad](https://github.com/boblad)
- [Cam Peterson](https://github.com/campeterson)
- [Cody Deskins](https://github.com/cdeskins)
- [Dan Noland](https://github.com/nolandda)
- [Eric Evans](https://github.com/Zipbug)
- [Keltson Howell](https://keltsonhowell.com/)
- [Micah Brown](https://github.com/Brnin8r)
- [Scott Waddell](https://github.com/swaddell)
- [Terry Ott](https://github.com/TerryOtt)
- [Tod Robbins](https://github.com/todrobbins)
- [Wylie Thomas](https://github.com/wyliethomas)

### Organizations
- Kempt Design LLC
- [Pony Express Productions, LLC](https://pxp200.com/)
- [PublicNTP, Inc.](https://publicntp.org/)
- [Rooster Glue, Inc.](https://roosterglue.com/)
- [Sixbucks Solutions, LLC](https://github.com/SixbucksSolutions)

### Project
- [Knight Labs](http://timeline.knightlab.com/)

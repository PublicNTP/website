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

#### Stack:
* [Node](https://nodejs.org/en/) + [express](https://expressjs.com),
* [Handlebars](https://handlebarsjs.com/),
* [gulp](https://gulpjs.com/),
* [scss](https://sass-lang.com/)



## Deployment and New content documentation

This project is divided into two parts. The static section, and the dynamic section.
The dynamic section of the app only has one purpose, to build the static part.
The static section of the app can be found in the dist folder. The dist folder should not be edited manually as it will be overwritten by the build process.

All builds should be done on staging.

the root of the app on staging lives at `/home/boblad/website`

To add a new page that is not a blog post, it must be created through the dynamic section of the app. Create a route and create all the following appropriate files.

After the page is complete, it is very important to add the path of the route to the `staticRoutes.js` file found in the root of the project. If the path is not added, it will not be available in the static version of the site.

To add a blog post, DO NOT add the path to the `staticRoutes.js` file. To edit or add a new blog post, simply use the `/data/posts.json` file. Follow the existing formatting of the `posts.json` exactly, the json must have no errors.

After all of the content looks correct, it is time to start the build process.

Step 1. Make sure the app is not currently running through pm2 or any node process
 * (`pm2 status` will show all processes with pm2)

2. In the `/home/boblad/website` directory run `gulp gather`. This command will start an instance of the dynamic app and scrape each path of the site and dump its contents in the dist folder creating a static version of the site. It is imperative that there are no errors with this command. Check the logs for errors. You will then need to kill the app with control-c.

3. If there are no errors in step 2, view the static app at webdev.publicntp.org.

4. If everything looks good on step 3. Commit and push your changes to git

5. Add the contents of the dist folder to the correct s3 bucket to update the production and staging versions of the site.
  * Note: Commands to automate this are coming soon.

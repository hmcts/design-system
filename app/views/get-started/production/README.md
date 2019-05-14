This guide explains how to set up your project so you can start using the styles and coded examples in the HMCTS Design System in production.

## Before you start

First you must have followed the [GOV.UK Design System production setup guide](https://design-system.service.gov.uk/get-started/production/).


## Include HMCTS Frontend in your project

To start using HMCTS styles, components and patterns contained here, you’ll need to include HMCTS Frontend in your project.

We recommend [installing HMCTS Frontend using npm](https://github.com/hmcts/frontend/blob/master/docs/installation/installing-with-npm.md). Using this option, you will be able to:

- selectively include the CSS or JavaScript for individual components
- build your own styles or components based on the palette or typography and spacing mixins
- customise the build (for example, overriding colours or enabling global styles)
- use the component Nunjucks templates


<!--

### Importing styles

You need to import the HMCTS Frontend styles into the main Sass file in your
project. You should place the below code before your own Sass rules (or Sass
imports) if you want to override HMCTS Frontend with your own styles.

To import all components, add the below to your Sass file:

  ```CSS
  @import "node_modules/@hmcts/frontend/all";
  ```

### Setting up server.js

In order to import HMCTS Frontend images and fonts to your project, you should configure your application to reference or copy the relevant HMCTS Frontend assets.

1. Open `server.js` in the root directory
2. Add the following snippets:

```
app.use('/assets', express.static(path.join(__dirname, '/node_modules/@hmcts/frontend/assets')));
app.use('/node_modules/hmcts-frontend', express.static(path.join(__dirname, '/node_modules/@hmcts/frontend')))
```

### Importing script

Add jQuery and all.js to your (base) template

```
<script src="/node_modules/hmcts-frontend/vendor/jquery.js"></script>
<script src="/node_modules/hmcts-frontend/all.js"></script>```

### Using Nunjucks macros

A Nunjucks macro is a simple template that generates more complex HTML.

Nunjucks macros save you time by managing repetitive or error-prone tasks, like linking form labels to their controls.

Nunjucks macros also make it easier to keep your application up to date. You can run a command to update component code instead of having to manually update your HTML.

To use Nunjucks macros in your application, you’ll need to setup Nunjucks views to point to the location of HMCTS Frontend components, which is `node_modules/@hmcts/frontend/components/`.

To include a specific component macro in your page template, you need to import the macro.

For example, to use the timeline macro, use the import statement `{% raw %}{% from "timeline/macro.njk" import hmctsTimeline %}{% endraw %}`.

-->
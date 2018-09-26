Use the Primary Navigation component when your service has a number of top level links.

{{dsExample({
  name: 'primary-navigation',
  example: 'default',
  height: 179
})}}

## When to use this component

Use this together with the [Header](/components/header) component for non-citizen facing services.

## When not to use this component

Do not use the Primary Navigation component for a citizen facing service because they already have their own primary navigation component in the header.

## How it works

There are 2 ways to use the file upload component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

### What links belong in the primary navigation component?

The primary navigation should contain the top level items for a service. For example, it could contain “Cases” and “Appointments”. Preferably action buttons such as “Create case” shouldn't be placed here.

## Research on this component

The primary navigation component has been tested in:

- Judicial user interface
- Professional user interface
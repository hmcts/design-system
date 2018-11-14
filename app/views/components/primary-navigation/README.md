Use the Primary Navigation component when your service has a number of top level links.

{{dsExample({
  name: 'primary-navigation',
  example: 'default',
  height: 179
})}}

## When to use this component

Use this together with the [Header](/components/header) component for non-citizen facing services. This component comes directly after the Header.

## When not to use this component

Do not use the Primary Navigation component for a citizen facing service because they already have their own primary navigation component in the header.

## Examples

### Inline search

You can configure this component to show an inline search form. Use this type of search when users can search everything within a service.

{{dsExample({
  name: 'primary-navigation',
  example: 'inline-search',
  height: 179
})}}

### Toggle search

You can configure this component to show a toggleable search form. Use this type of search when users can only search for certain things in a certain way. For example, searching for cases via case reference number or party.

{{dsExample({
  name: 'primary-navigation',
  example: 'toggle-search',
  height: 250
})}}

### What links belong in the primary navigation component?

The primary navigation should contain the top level items for a service. For example, it could contain “Cases” and “Appointments”. Preferably action buttons such as “Create case” shouldn't be placed here.

## Research on this component

The primary navigation component has been tested in:

- Judicial user interface
- Professional user interface
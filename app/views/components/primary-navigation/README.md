Let users navigate top level locations within your service. Optionally, you can also supply a globally accessible search form too.

{{dsExample({
  name: 'primary-navigation',
  example: 'default',
  height: 179
})}}

## When to use this component

Use this together with the [Header](/components/header) component for non-citizen facing services. This component comes directly after the Header.

## When not to use this component

Don't use this for citizen facing services as they should use the GOV.UK Design System's [header and navigation](https://design-system.service.gov.uk/components/header/) component.

## With inline search

You can configure this component to show an inline search form. Use this type of search when users can search everything within a service.

{{dsExample({
  name: 'primary-navigation',
  example: 'inline-search',
  height: 179
})}}

## With toggle search

You can configure this component to show a toggleable search form. Use this type of search when users can only search for certain things in a certain way. For example, searching for cases via case reference number or party.

{{dsExample({
  name: 'primary-navigation',
  example: 'toggle-search',
  height: 250
})}}

## Links

The primary navigation should contain top level links for locations within your service. So if your service contains cases and appointments, they should be primary navigation items.

Don't put calls to action in the primary navigation area. For example, “Create case” should belong within the “cases” section and not within the primary navigation bar.

## Research on this component

The primary navigation component has been tested in:

- Judicial user interface
- Professional user interface
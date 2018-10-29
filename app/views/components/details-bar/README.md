Use the Details Bar component to provide context to the user that they are within a particular detail view.

{{dsExample({
  name: 'details-bar',
  example: 'default',
  height: 175
})}}

## When to use this component

Use this component when the user is looking at an item in detail but when the detail view is split across several screens.

For example, when moving from a case list to a case detail the user is taken to a case summary but they can also view additional sections of the case such as timeline and documents.

To give users context, give them a details bar that appears at the top of each of those pages.

## When not to use this component

Don't use this component if there is only one detail page such as clicking on a case and seeing a single page of information. In this case, use a sensible `h1` with a back link above it to get back to the list view.

## How it works

### Standard

{{dsExample({
  name: 'details-bar',
  example: 'standard',
  height: 175
})}}

### Advanced

{{dsExample({
  name: 'details-bar',
  example: 'advanced',
  height: 175
})}}

## Research on this component

This component has been used in:

- Judicial user interface
- Professional user interface
- Fees and payments
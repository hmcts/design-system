Help users find items in a long list in a way that matches their mental model and preference.

{{dsExample({
  section: 'patterns',
  name: 'filter-a-list',
  example: 'default',
  height: 1150
})}}

## When to use this pattern

When users are trying to find items that match a particular set of attributes.

## When not to use this pattern

Don't use this pattern if there aren't many items to filter.

## How it works

The list should first appear unfiltered. After selecting one or more filters, the user submits the form which filters the list.

By default filters shouldn't persist across sessions or navigation. Where there is a clear user need, you can specify which filters should persist and for how long.

The filters acan be any form control, including date inputs, checkboxes, free text and radio buttons. Use the appropriate form control for the type of attribute being filtered on.

Filters can be used in combination with [search](/components/search). In this case, the flow should be:

1. Type a search term and submit the search form
2. See a search results page with filters
3. Users can then filter the search results page further or search again starting from (1)

## Research on this component

This pattern has been through several design crits. As this gets tested we'll update the research on this pattern.
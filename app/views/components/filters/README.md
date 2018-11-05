Use the Filter component to filter a large set of results.

{{dsExample({
  name: 'filters',
  example: 'default',
  height: 900
})}}

## When to use this component

Use this component to help users find a particular item in a large collection according to their own preferences and mental models.

## How it works

The filter component can take any set of GOV.UK form fields such as radio buttons, checkboxes, memorable date inputs and text boxes.

The filters should reflect attributes about the items in the list of results. For example, if you have a case list with status as a column, then you can have status as a filter.

Users submit the form with one or more filters and the results are filtered accordingly with the filters marked as selected at the top of the filter.

Clicking on a selected filter removes the filter from the results.

## Research on this component

This component has been through a number of internal crits. We'll add to this section once we have tested this component with users.
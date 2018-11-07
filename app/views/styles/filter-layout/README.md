
Use the filter layout in tandem with the [Filter component](/components/filter).

## Exploded view

{{dsExample({
  name: 'filter-layout',
  example: 'default',
  height: 300,
  section: 'styles'
})}}

## How it works

Place the filter inside `.filter-layout__filter` and the list inside `.filter-layout__content`.

The list will expand to fill the available space.

In large screens, the filter will be shown by default on the left handside.

On small screens (and when JavaScript is enabled), the filter will show as an overlay which is triggered using the [Filter Menu Button](/component/filter-menu-button) component. See the [Filter pattern](/patterns/filter) for a full example.
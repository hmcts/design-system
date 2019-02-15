Use the Rich Text Editor component to let users format their input in a text area.

{{dsExample({
  name: 'rich-text-editor',
  example: 'default',
  height: 400
})}}

## When to use this component

Use this when a user needs to format a message with HTML.

## When not to use this component

Don't use this if the user only needs to send a basic message.

## How it works

There are 2 ways to use the add another component. You can use HTML or, if you’re using Nunjucks, you can use the Nunjucks macro.

## Configuration

By default, the toolbar has lists and numbered list buttons. You can turn these off if you don't need them.

You can also add bold, underline and italic buttons but these styles should be used with caution because:

- underlined text can be confused with links
- bold and italic should be used sparingly

## Research on this component

This component has been tested in JUI.

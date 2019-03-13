

Help users enter an amount of money in a specified currency.

{{dsExample({
  name: 'currency-input',
  example: 'default',
  height: 200
})}}

## When to use this component

Use the currency input component when you need users to tell you an amount of money in a particular currency, for example pounds sterling, euros or dollars.

## How it works

The component uses `type=”text”` rather than `type=number` to ensure that all users can enter the decimal symbol. And the pattern attribute is used to trigger a numeric keypad on iOS devices. Find out more in [when to use the number input](https://adamsilver.io/articles/form-design-when-to-use-the-number-input/).

The input does not prevent users from typing invalid numbers because that makes the interface seem unresponsive. Instead rely on clear labels, hints and error messages.

The currency symbol is styled differently to the input so that users don't confuse it with the input's value.

## Research on this component

The design, code and guidance here are based on [recommendations from the community](https://github.com/alphagov/govuk-design-system-backlog/issues/68) and examples of the currency input in HMCTS services such as [making a money claim](https://www.gov.uk/make-money-claim).
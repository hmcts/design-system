In addition to the [layout styles](https://design-system.service.gov.uk/styles/layout) in the GOV.UK Design System, the HMCTS Design System provides a number of helpers.

## Page wrappers and component mixins

Like `.govuk-width-container` we have an `.hmcts-width-container` class that does the same thing. The difference is that you pass a parameter that overrides the `$govuk-page-width` or `$hmcts-page-width` variables on a component by component basis.

For example, if you wanted one particular instance of the sub navigation component to have a max-width of `400px` you could create a modifier like this:

{% code %}
.hmcts-sub-navigation__container--400 {
      @include hmcts-width-container($width: 400px);
}
{% endcode %}


And pass the modifier class to the macro:

{% code %}html
{% raw %}{{hmctsSubNavigation({
      containerClasses: 'hmcts-sub-navigation__container--400'
})}}{% endraw %}
{% endcode %}

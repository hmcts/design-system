
<img src="/public/images/calendar-date-picker.gif" alt="Animation of the calendar date picker component. It is placed directly above the H1." />


## When to use this pattern

If users may need to enter multiple dates.

Using the standard date field and add another patterns could be repetitive and laborious. It could be particularly frustrating for users who have physical conditions which affects their typing or if they tire easily.


## How it works

A familiar visual calendar pattern displaying months and dates.

Users are able to select single standalone dates or consecutive dates to make up a date range. Dates that aren't available can't be selected and have distinct visual styling.

The summary list below the calendar helps users to keep track of dates they've selected, particularly when navigating to different months. It also acts as a summary for the user to review before they proceed.

Selected dates can be deselected by clicking the date in the calendar or the remove link in the summary list below.

There are some design features which haven't yet be implemented in code.

- Restricting navigation so users can't navigate to months in the past if only dates in the future are selectable.
- In the summary list date ranges should be displayed as, e.g. 'Monday, 3rd June to Thursday, 6th June 2019'. Currently, they're displayed as a single date per item in the list.
- When a date from an another month is selected within the current month view the calendar moves to the new month. This can be disorientating. The calendar should stay in the current month unless unless the user explicitly navigates to the month.

There is a non-JS version of the pattern which uses the standard date fields and 'add another' patterns to build up a list of dates.


## Research on this pattern

- This has tested positively in the SSCS service. Users understood how to navigate through the calendar and how to select and deselect dates.

- Some users didn't understand why some dates weren't selectable. Further design and research could be done in this area.

- The pattern has been tested and passed accessibility WCAG 2 guidelines at DAC (Digital Accessibility Centre). It has also been reviewed at GDS assessments. 
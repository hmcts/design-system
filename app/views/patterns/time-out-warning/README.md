
<img src="/public/images/time-out-modal.png" alt="A screenshot of the time out modal in use. It is placed directly above the H1." />


## When to use this pattern

If a user has entered sensitive information which could be accessed if the device is left available for others to use. For example a computer in a library or other public place.

This pattern is most useful when there is no functionality for a user to save their data and return to it later.

## How it works

If there are no keyboard or mouse interactions after 'x' time the current session will end and any data entered by the user in the current session is deleted (if the data hasn't been saved to the users account).

The user should be pre-warned that this will occur. This can be done at the start and during the service. For example by adding to pages the text 'This service will time out in 20 minutes if there is no activity. This is to protect your personal information.' This explains what will happen and why.

To further safe guard users being timed out unexpectedly the pattern includes a modal window which is displayed after 'y' minutes and a visual timer counts down the remaining time to 'x'. The user is able to choose to continue in the service or exit. If no action is taken the session is automatically ended.

'x' and 'y' times should be determined by evaluating the tasks the users may need to do away from the computer, such as go and find documents balanced with the security risk. In SSCS 'x' is set as 20 minutes and 'y' as 18 minutes.


## Research on this pattern
### Key insights
- In page messsaging needs to be clear it's the time of inactivity not the time taken to complete the form. 
- Users can feel rushed and anxious if the timeout message is on each page or the time too short. It should be at the start of the service and just on pages users take longer to complete. For exampe 'Reasons for appealing' in SSCS Appeal a benefit decision.
- The ability to save and return would reduce anxiety about the service potentially timing out. 
# RSS feed email notifications

Get email notifications for whenever a new post is made onto an RSS feed.

**NOTE:** You might have to edit some of the result filtering to match the return format for your specific RSS feed.


## Setup:

There are several config files that you will have to add to this directory to get things working.

1. `GMAIL_APP_PASS`
    - Follow this guide here to create an app password for your gmail account:
        - https://support.google.com/accounts/answer/185833?hl=en
2. `USERNAME`
    - Your email username (`your.email@gmail.com`).
    - Emails will appear as sent from this email.
3. `TARGET_EMAIL`
    - The email you want to send notifications to.
4. `RSS_SOURCE_URL`
    - The url to pull xml data for the RSS feed from.
    - You should be able to find this wherever you found the source for the feed.
    - When opened in a browser this should probably show up as totally unformatted xml text.


## Running:
Run the `index.js` file with node:

```properties
node index.js
```

You'll probably want to set this command to run automatically on whatever device you want.
For example with a [crontask](https://www.tutorialspoint.com/unix_commands/crontab.htm)

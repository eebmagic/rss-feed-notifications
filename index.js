const strftime = require('strftime');
const nodemailer = require('nodemailer');
const fs = require('fs');
const Parser = require('rss-parser');
const parser = new Parser();

const username = fs.readFileSync('USERNAME', 'utf8').trim();
const password = fs.readFileSync('PASSWORD', 'utf8').trim();
const gmailPass = fs.readFileSync('GMAIL_APP_PASS', 'utf8').trim();
const targetEmail = fs.readFileSync('TARGET_EMAIL', 'utf8').trim();
const rssURL = fs.readFileSync('RSS_SOURCE_URL', 'utf8').trim();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: targetEmail,
    pass: gmailPass
  }
});

const today = strftime("%a, %d %b %Y")
// console.log(`TODAY: ${today}`);

(async () => {
    const feed = await parser.parseURL(rssURL);
    const filtered = feed.items.filter(item => item.pubDate.startsWith(today));

    filtered.forEach(item => {
        const title = item.title;
        const uploadDate = item.published;
        const content = item['content:encoded'];

        const mailOptions = {
            to: targetEmail,
            subject: title,
            text: content,
            html: content
        }

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

    });

})();

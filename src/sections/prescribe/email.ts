import { Email } from './smtp';
import { SMTPClient } from "smtp-client";

export const sendMail = (info) => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mikoforbusinesspurposes@gmail.com",
        Password : "F0F9E9A06F3A845F0BFE025BE273AFCA4770",
        To : 'mikoangeles2001@gmail.com',
        From : "mikoforbusinesspurposes@gmail.com",
        Subject : "kill yourself",
        Body : info
      }).then(
        message => alert(message)
      );
}

export const sendMailClient = () => {
    let s = new SMTPClient({
      host: "smtp.elasticemail.com",
      port: 587
    });
  
    (async function () {
      await s.connect();
      await s.greet({ hostname: "smtp.elasticemail.com" }); // runs EHLO command or HELO as a fallback
      await s.authPlain({
        username: "mikoforbusinesspurposes@gmail.com",
        password: "F0F9E9A06F3A845F0BFE025BE273AFCA4770"
      }); // authenticates a user
      await s.mail({ from: "mikoforbusinesspurposes@gmail.com" }); // runs MAIL FROM command
      await s.rcpt({ to: "mikoangeles2001@gmail.com" }); // runs RCPT TO command (run this multiple times to add more recii)
      await s.data("Hola mundo mail source"); // runs DATA command and streams email source
      await s.quit(); // runs QUIT command
    })().catch(console.error);
  };
import { Email } from './smtp';
import { SMTPClient } from "smtp-client";

export const sendMail = (info) => {
    Email.send({
        SecureToken: "6e2cb0ca-b3c6-476a-bbb5-0607bbb86fda",
        To : info.email,
        From : "mikoangeles2001@gmail.com",
        Subject : "asndadshudashouadshadshads",
        Body : info.gen + "" + info.dos + " localhost:3000/mims"
      }).then(
        message => alert(message)
      );
}

export const sendMailClient = () => {
    let s = new SMTPClient({
      host: "smtp.elasticemail.com",
      port: 2525
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
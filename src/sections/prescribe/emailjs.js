import { Email } from './smtp';
import { SMTPClient } from "smtp-client";

export const sendMail = (info, clinicdata, selectedMeds, mimsdb) => {
    Email.send({
        SecureToken: "6e2cb0ca-b3c6-476a-bbb5-0607bbb86fda",
        To : info.email,
        From : "mikoforbusinesspurposes@gmail.com",
        Subject : "asndadshudashouadshadshads",
        Body : EmailFormat(info,clinicdata,selectedMeds, mimsdb)
      }).then(
        message => alert(message)
      );
}

const EmailFormat = (info, clinicdata, selectedMeds, mimsdb) => {
  const tablegenerator = (id) => {
    console.log(id);
    let xd = String(id);
    console.log(xd);
    console.log(mimsdb[xd]);
    console.log(mimsdb);
    return `
      <tr style="border: 1px solid black">
      <td style="border: 1px solid black">${mimsdb[xd]['ill']}</td>
      <td style="border: 1px solid black">${mimsdb[xd]['gen']}</td>
      <td style="border: 1px solid black">${mimsdb[xd]['dos']}</td>
      <td style="border: 1px solid black">${mimsdb[xd]['qty']}</td>
      <td style="border: 1px solid black">${mimsdb[xd]['srp']}</td>
      </tr>
    `
  }
  const dctable = (medlist) => {
    let td = medlist.map(tablegenerator);
    return `${td}`
  }
  let thebodieshitthefloor = `
  <center><h1><b>${clinicdata.ClnNam}</b></h1></center>
  <center><h3><b>${clinicdata.ClnAdr.adr + " "+ clinicdata.ClnAdr.adrstreet + " " + clinicdata.ClnAdr.adrcity + " " + clinicdata.ClnAdr.adrcountry}</b></h3></center>
  <center><h3><b>${clinicdata.ClnCon}</b></h3></center>
  <div class="float-container">
      <div style="float:left">
        <h4>${info.nam}</h4>
        <h4>${info.dob}</h4>
        <br><br><br><br>
        <h1 style="float:left">RX</h1>
      </div>
      <div style="float:right">
        <h4>${info.age}</h4>
        <h4>${info.dat}</h4>
        <br><br><br><br><br><br>
        <h4>${clinicdata.DocNam}</h4>
        <h4>${clinicdata.DocLic}</h4>
        <h4>${clinicdata.DocPTR}</h4>
      </div>
  </div>
  <center>
      <div>
          <br><br><br><br><br><br><br><br><br><br><br><br>
          <table style="border: 1px solid black; border-collapse:collapse">
              <tr style="border: 1px solid black">
                  <th style="border: 1px solid black">Illness</th>
                  <th style="border: 1px solid black">Generic Name</th>
                  <th style="border: 1px solid black">Dosage</th>
                  <th style="border: 1px solid black">Quantity</th>
                  <th style="border: 1px solid black">Instructions</th>
              </tr>
              ${dctable(selectedMeds)}
          </table>
          <h4>${selectedMeds}</h4>
          <div style="float:right">
              
          </div>
      </div>
  </center>
  `
  return thebodieshitthefloor                                                                                                                                                                                                                                                                                                                                                                                                                               
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
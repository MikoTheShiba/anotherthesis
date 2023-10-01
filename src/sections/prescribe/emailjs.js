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
    let xd = String(id);
    return `
      <tr style="border: 1px solid black">
        <td style="border: 1px solid black">${mimsdb[xd]['brd']}</td>
        <td style="border: 1px solid black">${mimsdb[xd]['ill']}</td>
        <td style="border: 1px solid black">${mimsdb[xd]['gen']}</td>
        <td style="border: 1px solid black">${mimsdb[xd]['dos']}</td>
        <td style="border: 1px solid black">${String(mimsdb[xd]['SRP'])}</td>
      </tr>
    `
  }
  const altgetter = (genlist) => {
    let alts = [];
    genlist.map((x) => {let fdb = Object.entries(mimsdb).filter(([key,obj]) => obj.gen === x); let fin=alts.concat(fdb); alts=fin;})
    return alts.map(([key, obj]) => key);
  }
  const dctable = (medlist) => {
    let td = medlist.map(tablegenerator);
    let finalstring = ``;
    td.map((x) => finalstring=finalstring+x);
    return finalstring;
  }
  const datable = (medlist) => {
    let genlist = []
    let finalstring = ``;
    medlist.map((x) => {let n = mimsdb[String(x)]['gen']; if(genlist.indexOf(n) == -1){genlist.push(n)}});
    altgetter(genlist).map((x) => finalstring=finalstring+tablegenerator(x))
    return finalstring;
  }
  console.log(clinicdata);
  let thebodieshitthefloor = `
  <center><h1><b>${clinicdata.clnNam}</b></h1></center>
  <center><h3><b>${clinicdata.adrnum + " "+ clinicdata.adrstreet + " " + clinicdata.adrcity + " " + clinicdata.adrcountry}</b></h3></center>
  <center><h3><b>${clinicdata.clnCon}</b></h3></center>
  <div class="float-container">
      <div style="float:left">
        <h4>Patient Name: ${info.nam}</h4>
        <h4>Date of Birth: ${info.dob}</h4>
        <br><br><br><br>
        <h1 style="float:left">RX</h1>
      </div>
      <div style="float:right">
        <h4>Patient Age: ${info.age}</h4>
        <h4>Date: ${info.dat}</h4>
        <br><br><br><br><br><br>
      </div>
  </div>
  <center>
      <div>
          <br><br><br><br><br><br><br><br><br><br><br><br>
          <h2>PRESCRIBED MEDS</h2>
          <table style="border: 1px solid black; border-collapse:collapse">
              <tr style="border: 1px solid black">
                  <th style="border: 1px solid black">Brand</th>
                  <th style="border: 1px solid black">Illness</th>
                  <th style="border: 1px solid black">Generic Name</th>
                  <th style="border: 1px solid black">Dosage</th>
                  <th style="border: 1px solid black">SRP</th>
              </tr>
              ${dctable(selectedMeds)}
          </table>
          <h4>${info.ins}</h4>
          <br><br>
          <h2>ALTERNATIVES LIST</h2>
          <table style="border: 1px solid black; border-collapse:collapse">
              <tr style="border: 1px solid black">
                  <th style="border: 1px solid black">Illness</th>
                  <th style="border: 1px solid black">Generic Name</th>
                  <th style="border: 1px solid black">Dosage</th>
                  <th style="border: 1px solid black">SRP</th>
              </tr>
              ${datable(selectedMeds)}
          </table>
          <div style="float:right">
            <h4>Doctor's Name: ${clinicdata.docNam}</h4>
            <h4>License: ${clinicdata.docLic}</h4>
            <h4>PTR: ${clinicdata.docPTR}</h4>
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
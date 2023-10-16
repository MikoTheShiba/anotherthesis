import { Email } from './smtp';
import { SMTPClient } from "smtp-client";

export const sendMail = (info, clinicdata, selectedMeds, mimsdb, qtyList) => {
    Email.send({
        SecureToken: "6e2cb0ca-b3c6-476a-bbb5-0607bbb86fda",
        To : info.email,
        From : "mikoforbusinesspurposes@gmail.com",
        Subject : "Automated Prescription for "+info.nam,
        Body : EmailFormat(info,clinicdata,selectedMeds, mimsdb, qtyList)
      }).then(
        message => alert(message)
      );
}

const EmailFormat = (info, clinicdata, selectedMeds, mimsdb, qtyList) => {
  const tablegeneratorqty = (id) => {
    let xd = String(id);
    return `
      <tr style="border: 1px solid black">
        <td style="border: 1px solid black">${mimsdb[xd]['brd']}</td>
        <td style="border: 1px solid black">${mimsdb[xd]['ill']}</td>
        <td style="border: 1px solid black">${mimsdb[xd]['gen']}</td>
        <td style="border: 1px solid black">${mimsdb[xd]['dos']}</td>
        <td style="border: 1px solid black">${String(mimsdb[xd]['SRP'])}</td>
        <td style="border: 1px solid black">${String(qtyList[xd])}</td>
      </tr>
    `
  }
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
    let alts = []
    console.log(genlist)
    genlist[0].map((x) => {
        let filterA = Object.entries(mimsdb).filter(([key,obj]) => obj.gen === x && genlist[1][genlist[0].indexOf(x)].includes(obj.dos));
        let fin=alts.concat(filterA);
        alts=fin;
    })
    console.log(alts)
    return alts.map(([key, obj]) => key);
  }
  const dctable = (medlist) => {
    let td = medlist.map(tablegeneratorqty);
    let finalstring = ``;
    td.map((x) => finalstring=finalstring+x);
    return finalstring;
  }
  const datable = (medlist) => {
    let genlist = [[],[]];
    let finalstring = ``;
    medlist.map((x) => {
        let n = mimsdb[String(x)]['gen'];
        let m = mimsdb[String(x)]['dos'];
        if(genlist[0].indexOf(n) == -1){
            genlist[0].push(n);
            genlist[1].push([m]);
        } else {
              if(genlist[1][genlist[0].indexOf(n)].indexOf(m) == -1){
                genlist[1][genlist[0].indexOf(n)].push(m);
            }
        }
        
    })
    altgetter(genlist).map((x) => finalstring=finalstring+tablegenerator(x))
    return finalstring;
  }
  let thebodieshitthefloor = `
  <font color=black>
    <center><h1><b>${clinicdata.clnNam}</b></h1></center>
    <center><h3><b>${clinicdata.adrnum + " "+ clinicdata.adrstreet + " " + clinicdata.adrcity + " " + clinicdata.adrcountry}</b></h3></center>
    <center><h3><b>${clinicdata.clnCon}</b></h3></center>
    <div class="float-container">
        <div style="float:left">
          <h4>Patient Name: ${info.nam}</h4>
          <h4>Date of Birth: ${info.dob}</h4>
          <br>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Rx_symbol.png" alt="RX" width="50" height="50">
        </div>
        <div style="float:right">
          <h4>Patient Age: ${info.age}</h4>
          <h4>Date: ${info.dat}</h4>
          <br><br>
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
                    <th style="border: 1px solid black">Quantity</th>
                </tr>
                ${dctable(selectedMeds)}
            </table>
            <h4>${info.ins}</h4>
            <div style="text-align: right">
              <h4>Doctor's Name: ${clinicdata.docNam}</h4>
              <h4>License: ${clinicdata.docLic}</h4>
              <h4>PTR: ${clinicdata.docPTR}</h4>
            </div>
            <br><br><div style="width: 100%; height: 10px; background-color: grey"></div><br><br>
            <h2>ALTERNATIVES LIST</h2>
            <h4>The following information presents alternative brand names along with their corresponding suggested retail prices and its dosages in accordance with the prescribed medication</h4>
            <table style="border: 1px solid black; border-collapse:collapse">
                <tr style="border: 1px solid black">
                    <th style="border: 1px solid black">Brand</th>
                    <th style="border: 1px solid black">Illness</th>
                    <th style="border: 1px solid black">Generic Name</th>
                    <th style="border: 1px solid black">Dosage</th>
                    <th style="border: 1px solid black">SRP</th>
                </tr>
                ${datable(selectedMeds)}
            </table>
            
        </div>
    </center>
  </font>
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
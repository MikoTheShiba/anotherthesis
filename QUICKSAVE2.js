

function binarySearch(value, list) {
    let low = 0;    //left endpoint 
    let high = list.length - 1;   //right endpoint 
    let position = -1;
    let found = false;
    let mid;
 
    while (found === false && low <= high) {
        mid = Math.floor((low + high)/2);
        if (list[mid] == value) {
            found = true;
            position = mid;
        } else if (list[mid] > value) {  //if in lower half 
            high = mid - 1;
        } else {  //in in upper half 
            low = mid + 1;
        }
    }
    return position;
}

testdata={
    "010101": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Astorvastatin FC",
        "dos":"20mg",
        "SRP":9
    },
    "010102": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Ator-10",
        "dos":"10mg",
        "SRP":12.75
    },
    "010103": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Lipitor",
        "dos":"10mg",
        "SRP":34.25
    },
    "010104": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"RiteMed Atorvastatin",
        "dos":"10mg",
        "SRP":12
    },
    "010105": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Atonamis",
        "dos":"20mg",
        "SRP":4.5
    },
    "010106": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Brelvastin", 
        "dos":"20mg",
        "SRP":5.5
    },
    "010107": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Astorvastatin FC",
        "dos":"40mg",
        "SRP":9.5
    },
    "010108": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Atorwin",
        "dos":"40mg",
        "SRP":47.75
    },
    "010109": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Ator-40",
        "dos":"40mg",
        "SRP":26
    },
    "010110": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Atorvast-Natrapharm",
        "dos":"40mg",
        "SRP":22
    },
    "010111": {
        "ill":"Cholesterol",
        "gen":"Astorvastatin FC",
        "brd":"Brelvastin",
        "dos":"40mg",
        "SRP":9.5
    },
    "010201": {
        "ill":"Cholesterol",
        "gen":"Rosuvastatin FC",
        "brd":"Rosuvastatin FC",
        "dos":"10mg",
        "SRP":9
    },
    "010202": {
        "ill":"Cholesterol",
        "gen":"Rosuvastatin FC",
        "brd":"Rovista",
        "dos":"5mg",
        "SRP":23.25
    },
    "010203": {
        "ill":"Cholesterol",
        "gen":"Rosuvastatin FC",
        "brd":"Rovista",
        "dos":"10mg",
        "SRP":28.75
    },
    "010204": {
        "ill":"Cholesterol",
        "gen":"Rosuvastatin FC",
        "brd":"Rosutin",
        "dos":"10mg",
        "SRP":12.75
    },
    "010205": {
        "ill":"Cholesterol",
        "gen":"Rosuvastatin FC",
        "brd":"Rosuvastatin FC",
        "dos":"20mg",
        "SRP":15.5
    },
    "010206": {
        "ill":"Cholesterol",
        "gen":"Rosuvastatin FC",
        "brd":"Rovista",
        "dos":"20mg",
        "SRP":33
    },
    "010207": {
        "ill":"Cholesterol",
        "gen":"Rosuvastatin FC",
        "brd":"Vestflo-20",
        "dos":"20mg",
        "SRP":17.75
    },
    "020101": {
        "ill":"Anti-Hypertension",
        "gen":"Losartan",
        "brd":"Losartan",
        "dos":"50mg",
        "SRP":2.75
    },
    "020102": {
        "ill":"Anti-Hypertension",
        "gen":"Losartan",
        "brd":"Amlife",
        "dos":"50mg",
        "SRP":23.5
    },
    "020103": {
        "ill":"Anti-Hypertension",
        "gen":"Losartan",
        "brd":"Neosartan",
        "dos":"50mg",
        "SRP":13.5
    },
    "020104": {
        "ill":"Anti-Hypertension",
        "gen":"Losartan",
        "brd":"Lifezar",
        "dos":"50mg",
        "SRP":26.5
    },
    "020105": {
        "ill":"Anti-Hypertension",
        "gen":"Losartan",
        "brd":"Losaar-50",
        "dos":"50mg",
        "SRP":4
    },
    "020106": {
        "ill":"Anti-Hypertension",
        "gen":"Losartan",
        "brd":"Angisartan",
        "dos":"50mg",
        "SRP":4
    },
    "020201": {
        "ill":"Anti-Hypertension",
        "gen":"Amlodipine Bestilate",
        "brd":"Amlodipine Bestilate",
        "dos":"5mg",
        "SRP":1
    },
    "020202": {
        "ill":"Anti-Hypertension",
        "gen":"Amlodipine Bestilate",
        "brd":"Eodipine",
        "dos":"5mg",
        "SRP":2.5
    },
    "020203": {
        "ill":"Anti-Hypertension",
        "gen":"Amlodipine Bestilate",
        "brd":"Lodi",
        "dos":"5mg",
        "SRP":8.25
    },
    "020204": {
        "ill":"Anti-Hypertension",
        "gen":"Amlodipine Bestilate",
        "brd":"RiteMed Amlodipine",
        "dos":"5mg",
        "SRP":6.75
    },
    "020205": {
        "ill":"Anti-Hypertension",
        "gen":"Amlodipine Bestilate",
        "brd":"Amyasc BE",
        "dos":"5mg",
        "SRP":19.75
    },
    "020206": {
        "ill":"Anti-Hypertension",
        "gen":"Amlodipine Bestilate",
        "brd":"Vasalat",
        "dos":"5mg",
        "SRP":13.5
    },
    "020207": {
        "ill":"Anti-Hypertension",
        "gen":"Amlodipine Bestilate",
        "brd":"Amlodipine",
        "dos":"5mg",
        "SRP":2.5
    },
    "020301": {
        "ill":"Anti-Hypertension",
        "gen":"Carvedilol FC (Betadol)",
        "brd":"Carvedilol FC (Betadol)",
        "dos":"6.5mg",
        "SRP":4.5
    },
    "020302": {
        "ill":"Anti-Hypertension",
        "gen":"Carvedilol FC (Betadol)",
        "brd":"Karyil",
        "dos":"6.5mg",
        "SRP":9.75
    },
    "020303": {
        "ill":"Anti-Hypertension",
        "gen":"Carvedilol FC (Betadol)",
        "brd":"Caryid",
        "dos":"6.5mg",
        "SRP":12
    },
    "020304": {
        "ill":"Anti-Hypertension",
        "gen":"Carvedilol FC (Betadol)",
        "brd":"Karyidol",
        "dos":"25mg",
        "SRP":8.25
    },
    "020305": {
        "ill":"Anti-Hypertension",
        "gen":"Carvedilol FC (Betadol)",
        "brd":"Carvedilol",
        "dos":"6.25mg",
        "SRP":6
    },
    "020306": {
        "ill":"Anti-Hypertension",
        "gen":"Carvedilol FC (Betadol)",
        "brd":"Velon",
        "dos":"6.25mg",
        "SRP":5
    },
    "020401": {
        "ill":"Anti-Hypertension",
        "gen":"Clopidoger",
        "brd":"Clopidoger",
        "dos":"75mg",
        "SRP":8
    }
}
//searchlight.hasOwnProperty(data[x]["ill"])
const searchTag = (data) => {
    var searchlight = {};
    var keylist = Object.keys(data);
    function light(x){
        if (data[x]["ill"] in searchlight) {
            searchlight[data[x]["ill"]].push(x)
        }
        else{
            searchlight[data[x]["ill"]]=[x]
        }
        if (data[x]["gen"] in searchlight) {
            searchlight[data[x]["gen"]].push(x)
        }
        else{
            searchlight[data[x]["gen"]]=[x]
        }
        if (data[x]["brd"] in searchlight) {
            searchlight[data[x]["brd"]].push(x)
        }
        else{
            searchlight[data[x]["brd"]]=[x]
        }
        if (data[x]["dos"] in searchlight) {
            searchlight[data[x]["dos"]].push(x)
        }
        else{
            searchlight[data[x]["dos"]]=[x]
        }
    }
    keylist.map(light)
    return searchlight
}
const listToResult = (data) => {
    var fin = {}
    function finfill(x){
        fin[x]=testdata[x]
    }
    data.map(finfill);
    return fin
}
const listToResult_Binary = (data, list) => {
    var fin = {};
    var sortedList = Object.keys(list).sort();
    var stuff = binarySearch(data, sortedList)
    function finfill(x){
        fin[x]=testdata[x]
    }
    if (stuff!=0){
        list[sortedList[stuff]].map(finfill)
    }
    else{
        fin = {'000000':{
            ill: 'no results found',
            gen: 'no results found',
            brd: 'no results found',
            dos: 'no results found',
            srp: 0,
        }}
    }
    return fin
}
async function main(x){
    var a = await searchTag(testdata)
    console.log(listToResult_Binary(x, a))
}
main('Cholesterol')

var listoffriends = ["Mikko", "Lalik", "Mico", "Bon", "Miko", "Lalic", "Vhonne"]
listoffriends.sort();
console.log(binarySearch("Miko", listoffriends))
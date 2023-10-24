const jsontoarraywithidnoparseint = (data) => {
    var arrr= [];
    var listing = Object.keys(data)
    listing.map((x) => arrr.push(data[x]))
    for (let i = 0; i < arrr.length; i++){
        arrr[i]["id"]=listing[i]
    }
    return arrr
  }
function binarySearch(keys, target) {
let left = 0;
let right = keys.length - 1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (keys[mid] === target) {
    return mid; // Key found, return the index
    } else if (keys[mid] < target) {
    left = mid + 1; // Search the right half
    } else {
    right = mid - 1; // Search the left half
    }
}

return -1; // Key not found
}
const keyer = (data, tgt) => {
var dict= {};
var listing = Object.keys(data)
//listing.map((x) => dict[data[x][tgt]]=data[x]);
listing.map((x) => {
    if (dict.hasOwnProperty(data[x][tgt].toLowerCase())) dict[data[x][tgt].toLowerCase()].push(x);
    else {dict[data[x][tgt].toLowerCase()]=[]; dict[data[x][tgt].toLowerCase()].push(x);}
})
//listing.map((x)=> console.log(data[x]))
return dict;
}
const keytaker = (data, tgt, tgk) => {
var fin = {}
var namdata = keyer(data, tgk)
var namres = binarySearch(Object.keys(namdata).sort(), tgt.toLowerCase())
if (namres!=-1) return namdata[Object.keys(namdata).sort()[namres]]
else return [];
}
export const binarykey = (data, tgt, tgk) => {
    if (tgt==""){
        return jsontoarraywithidnoparseint(data);
    }
    var fin = {}
    var fullcheck = tgk.map((x)=>{return keytaker(data, tgt, x)})
    const combinedList = fullcheck.reduce((result, sublist) => {
        sublist.forEach(item => {
        if (!result.includes(item)) {
            result.push(item);
        }
        });
        return result;
    }, []);
    combinedList.map((x)=>fin[x]=data[x])
    return jsontoarraywithidnoparseint(fin)
}
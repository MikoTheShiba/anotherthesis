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
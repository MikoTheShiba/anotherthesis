/*
pages/mims-scratch.js

import { useCallback, useMemo } from 'react';
import { Button,  SvgIcon } from '@mui/material';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { applyPagination } from 'src/utils/apply-pagination';
import { useSelection } from 'src/hooks/use-selection';

const jsontoarray = (data) => {
  var arrr= [];
  var listing = Object.keys(data)
  listing.map((x) => arrr.push(data[x]))
  return arrr
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

pages/patients-scratch.js

import { useCallback, useMemo } from 'react';
import { Button,  SvgIcon } from '@mui/material';
import testdata from '../jsons/mimsdb.json';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { applyPagination } from 'src/utils/apply-pagination';
import { useSelection } from 'src/hooks/use-selection';

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
const tagbinder = searchTag(testdata);

const jsontoarray = (data) => {
  var arrr= [];
  var listing = Object.keys(data)
  listing.map((x) => arrr.push(data[x]))
  return arrr
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

sections/emailjs.js
//This was version 1.0. We made an update that filters it with the dosage as well

  const altgetter = (genlist) => {
    let alts = [];
    genlist.map((x) => {let fdb = Object.entries(mimsdb).filter(([key,obj]) => obj.gen === x); let fin=alts.concat(fdb); alts=fin;})
    return alts.map(([key, obj]) => key);
  }
    const datable = (medlist) => {
    let genlist = []
    let finalstring = ``;
    medlist.map((x) => {let n = mimsdb[String(x)]['gen']; if(genlist.indexOf(n) == -1){genlist.push(n)}});
    altgetter(genlist).map((x) => finalstring=finalstring+tablegenerator(x))
    return finalstring;
  }

*/
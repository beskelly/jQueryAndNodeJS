//jshint esversion: 7

bitBatBotOrNot = (n) => {
  let ans = "";

  if(n % 3 == 0){
    ans += "Bit";
  }

  if(n % 5 == 0){
    ans += "Bat";
  }

  if(n % 7 == 0){
    ans += "Bot";
  }

  if(n % 3 != 0 && n % 5 != 0 && n % 7 != 0){
    ans += "Not";
  }

  return ans;
};



findAllbitBatBotOrNots1 = (arr) => {

  return arr.map(each => `${each}: `+bitBatBotOrNot(each));
};


findAllbitBatBotOrNots2 = (arr) => {

  let ans = [];

  for (each in arr){

    ans.push(arr[each]+": "+bitBatBotOrNot(arr[each]));
  }

  return ans;
};


findAllbitBatBotOrNots3 = (arr) => {

  let ans = [];

  for(each of arr){

    ans.push(each+": "+bitBatBotOrNot(each));

  }

  return ans;

};

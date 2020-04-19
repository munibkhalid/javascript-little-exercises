function repeatStringNumTimes(str, num) {
    var answer = str ;
    if (num >= 1){
     for (let i =1; i < num ; i++)   {   
      answer = answer +  str;
      }return answer;
    }else return '';
  }
  
  repeatStringNumTimes("abc", 3);
function truncateString(str, num) {
    var ans = ""
    for (let i=0 ; i < num ; i++){
    ans = ans +str[i];
   }if(str.length > num)
             {return(ans + "...")}
     else if (str.length <= num)
              {return(ans)}
 }
   
 
 truncateString("A-tisket a-tasket A green and yellow basket", 8);
   
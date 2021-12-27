const addZero = param => {
   if (param < 10) {
      return '0' + param
   } else {
      return param
   }
}
export const getDay = date => {
   let responseDate = new Date(date);
   let day = addZero(responseDate.getDate());
   return day;
}
export const getMounth = date => {
   let responseDate = new Date(date);
   let mounth = addZero(responseDate.getMonth());
   return mounth;
}


var medControl = (function(){

    return{
        getDateAndTime: function(){
            var today = new Date();  
            var date = today.getDate();    
            if(date <= 9 ){document.querySelector('.date-zero').classList.remove('show-zero')}
            else{document.querySelector('.date-zero').classList.add('show-zero')}
            if(date <= 9 ){document.querySelector('.patient-date-zero').classList.remove('show-zero')}
            else{document.querySelector('.patient-date-zero').classList.add('show-zero')}
            var month = today.getMonth();
            var monthText = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
            var hour = today.getHours();      
            if(hour >= 22 || hour === 10 || hour === 11 || hour === 12) {document.querySelector('.hour-zero').style.display = 'none'} 
            var minute = today.getMinutes();
            if(minute > 9 ){document.querySelector('.minute-zero').classList.add('show-zero')}
            else{document.querySelector('.minute-zero').classList.remove('show-zero')} 
            var hourCh;
  
            if(hour > 12){
                switch(hour){
                    case 13 : hourCh = 1;
                    break;  
                    case 14 : hourCh = 2;
                    break;
                    case 15 : hourCh = 3;
                    break;
                    case 16 : hourCh = 4;
                    break;
                    case 17 : hourCh = 5;
                    break;
                    case 18 : hourCh = 6;
                    break;
                    case 19 : hourCh = 7;
                    break;
                    case 20 : hourCh = 8;
                    break;
                    case 21 : hourCh = 9;
                    break;
                    case 22 : hourCh = 10;
                    break;
                    case 23 : hourCh = 11;
                    break;
                    case 24 : hourCh = 12;
                }
                
                return {
                    date: `${date} ${monthText[month]}`,
                    hour: `${hourCh}`,
                    minute: `${minute} PM`  
                } 
            }
             else{
                return {
                    date: `${date} ${monthText[month]}`,
                    hour: `${hour}`,
                    minute: `${minute} AM`
                } 
             }
             
        }
    }

})();


// ui control
var uiControl = (function(){
    return{
 
      //choose active item on staff page function
     choseStafffActiveItem: function(num){
       document.querySelector('.staff-item-1').classList.remove('active-staff-item');
       document.querySelector('.staff-item-2').classList.remove('active-staff-item');
       document.querySelector('.staff-item-3').classList.remove('active-staff-item');
       document.querySelector('.staff-item-4').classList.remove('active-staff-item');
       document.querySelector('.staff-item-5').classList.remove('active-staff-item');
       document.querySelector('.staff-item-' + '' + num).classList.add('active-staff-item');
     },
    //  show time and date function
    displayDateAndTime: function(date, hour, minute){
        document.querySelector('.staff-date').textContent = date;
        document.querySelector('.date-patient-show-content').textContent = date; 
        document.querySelector('.staff-hour').textContent = hour;
        document.querySelector('.staff-minute').textContent = minute;
    },
    // end of time and date function
 // add list from service page
 addListToStaffPage: function(){
    document.querySelector('.staff-box-1').classList.add('translate-staff-X');    
    document.querySelector('.arrow-staff-box-left').style.display = 'block';
    document.querySelector('.arrow-staff-box-right').style.display = 'none'; 
   },

    // remove list from service page
    removeListFromStaffPage : function(){
        document.querySelector('.staff-box-1').classList.remove('translate-staff-X');
      document.querySelector('.arrow-staff-box-left').style.display = 'none';
      document.querySelector('.arrow-staff-box-right').style.display = 'block';
      } ,
       // end remove list from service page
      

    

    }
 
 })();
 
 
//  global control
 var globalControl = (function(medCtrl, uiCtrl){
//   set active item 
   document.querySelector('.staff-item-1').addEventListener('click', function(){
       uiCtrl.choseStafffActiveItem(1);
   });
   document.querySelector('.staff-item-2').addEventListener('click', function(){
    uiCtrl.choseStafffActiveItem(2);
});
document.querySelector('.staff-item-3').addEventListener('click', function(){
    uiCtrl.choseStafffActiveItem(3);
});
document.querySelector('.staff-item-4').addEventListener('click', function(){
    uiCtrl.choseStafffActiveItem(4);
});
document.querySelector('.staff-item-5').addEventListener('click', function(){
    uiCtrl.choseStafffActiveItem(5);
});

//    get , set time and date in med control function
setInterval(() => {
    // get time and date in med control function
    var dateTime = medCtrl.getDateAndTime(); 
    // set time and date in med control function
    uiCtrl.displayDateAndTime(dateTime.date, dateTime.hour, dateTime.minute);
}, 10);
 



// add and remove list from service page
document.addEventListener('DOMContentLoaded', function(){
    uiCtrl.addListToStaffPage();

    setTimeout(function(){uiCtrl.removeListFromStaffPage();}, 3000)
  });
   
    //  removelist from service page
    document.querySelector('.arrow-staff-box-left').addEventListener('click', function(){
        uiCtrl.removeListFromStaffPage();
     });
      //  add list to service page
      document.querySelector('.arrow-staff-box-right').addEventListener('click', function(){
        uiCtrl.addListToStaffPage();        
     });

 })(medControl, uiControl);
 
   
 
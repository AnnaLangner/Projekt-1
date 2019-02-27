var cal = new CalendarPopup();
cal.setReturnFunction("setMultipleValues");
function setMultipleValues(y,m,d) {
     document.forms[0].date_year.value=y;
     document.forms[0].date_month.value=m;
     document.forms[0].date_date.value=d;
     }
const dateNow = new Date();

console.log(`Today's date is ${dateNow.toDateString()}`);

const tenantStartdate = new Date("2023-07-1");

console.log(`Lease start on ${tenantStartdate.toDateString()}`);

//Calculate the alert dates
const alertLeaseEnd = new Date(tenantStartdate);
alertLeaseEnd.setMonth(tenantStartdate.getMonth() + 8);

console.log(
  `Landlord can send lease end notice from ${alertLeaseEnd.toDateString()}`
);

const lastAlert = new Date(alertLeaseEnd);
lastAlert.setDate(alertLeaseEnd.getDate() + 30);

console.log(`Alert should be sent by ${lastAlert.toDateString()}`);

//Calculate elaspsed time between alerts
console.log(
  `This event would run from ${alertLeaseEnd.toDateString()} to  ${lastAlert.toDateString()}`
);

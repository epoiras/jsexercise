// The scope of `random` is too loose 

 
const getRandEvent = () => {
const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
 
// The scope of `days` is too tight 
const getTrainingDays = events => {
 let days="";
  if (events === 'Marathon') {
     days = 50;
  } else if (events === 'Triathlon') {
     days = 100;
  } else if (events === 'Pentathlon') {
     days = 150;
  }
 
  return days;
};
 
// The scope of `name` is too tight 
const logEvent = (name1, events) => {
  console.log(`${name1}'s event is: ${events}`);
};
 
const logTime = (name1, days) => {
  console.log(`${name1}'s time to train is: ${days} days`);
};
const name1 = 'Nala';
const events = getRandEvent();
const days = getTrainingDays(events);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
logEvent(name1, events);
logTime(name1, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Elena";
logEvent(name2, event2);
logTime(name2, days2);

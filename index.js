
const Lodash = require('lodash');

//import { chunk } from 'lodash';

//From moment range document
const Moment = require('moment');


const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);


console.log(moment().format('MM DD YYYY'));

//console.log(moment.months());

//console.log("Womp");
const weekArray = Moment.weekdays();
const monthArray = Moment.months();

//Define a range
//const range = moment.range('2019-01-01', '2019-12-31');

// var count = 0;
// for (let month of range.by('month')) {

//     month.format('YYYY-MM-DD');

//     console.log(`*** ${month.format('YYYY-MM-DD')} ***`);
//     //console.log(month.months(count));
    
//     console.log('************************');

//     count++;
//   }

//   for (let month of range.by('days')) {

//     month.format('DD');

//     console.log(`${month.format('DD')} `);
//     //console.log(month.months(count));
//     console.log('************************');

//   }

// var days = range.by('days');

// console.log("Output" + days);

const start = moment("'2019-01-01'");
const end = moment("2019-12-31");
const r1 = moment.range(start, end);
const r2 = r1.snapTo('day');
//https://github.com/rotaready/moment-range/blob/master/README.md#by

var dateArray = Array.from(r1.by('days')).map(m => m.format('DD')); // ['01', '02', '03', '04']
Array.from(r2.by('days')).map(m => m.format('DD')); // ['01', '02', '03', '04', '05']

// console.log("Week Days"+ weekArray.toString());
// console.log("Months "+ monthArray.toString());

//console.log(dateArray);

//chunk (dateArray,7);

var dateChunks = Lodash.chunk(dateArray,7)
var count = 0;

monthArray.forEach(function(month){

    console.log();
    console.log();

    console.log(`                              ${month}`);
    console.log();
    console.log();
    printWeekDays();
    printDates(count);

    count++

});

function printWeekDays(){

    var tempString= " ";
    

    for (var i=0; i<weekArray.length; i++){

       

        //Set to one tab inbetween
        tempString += weekArray[i] + "  ";

    

    }

    console.log(tempString);
    //console.log(dateChunks[1]);
    //Format date chunks
    

    
}

function printDates(monthCount){

    //You will want to do the date configurations here

}



//console.log(dateChunks[1]);








  

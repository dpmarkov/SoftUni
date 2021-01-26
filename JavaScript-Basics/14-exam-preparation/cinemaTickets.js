function cinemaTickets(input){
    let index = 0;
    let movie;
    let seats = 0;
    let tickets = 0;
    let kid = 0;
    let standard = 0;
    let student = 0;
    let totalTickets = 0;

    while(input[index] != "Finish"){
        movie = input[index];
        index++;
        seats = Number(input[index]);
        index++;
        tickets = 0;

        while((input[index] != "End") && (tickets < seats)){
            if (input[index] == "standard"){
                standard++;
                tickets++;
                index++;
            } else if (input[index] == "kid"){
                kid++;
                tickets++;
                index++;
            } else if (input[index] == "student"){
                student++;
                tickets++;
                index++;
            } else { //it's the next movie
                break;
            }  
        }
         
        if (input[index] == "End"){
            index++;
        }
        totalTickets += tickets;
        console.log(`${movie} - ${(tickets / seats * 100).toFixed(2)}% full.`);
        
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
// cinemaTickets([
//     'The Matrix', '20',
//     'student',    'standard',
//     'kid',        'kid',
//     'student',    'student',
//     'standard',   'student',
//     'End',        'The Green Mile',
//     '17',         'student',
//     'standard',   'standard',
//     'student',    'standard',
//     'student',    'End',
//     'Amadeus',    '3',
//     'standard',   'standard',
//     'standard',   'Finish'
//   ]);

// cinemaTickets([
// 'Taxi',     '10',
// 'standard', 'kid',
// 'student',  'student',
// 'standard', 'standard',
// 'End',      'Scary Movie',
// '6',        'student',
// 'student',  'student',
// 'student',  'student',
// 'student',  'Finish'
// ]);
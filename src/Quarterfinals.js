// import React from 'react';
// import './App.css';
// import { listOfTeams } from './list';
// import { formingTeams } from './FormTeams'
// export default class Quarterfinals extends React.Component {
//     formingTeams = () => {

//         let namesRaw = []
//         listOfTeams.map(function (obj) {
//             namesRaw.push(obj.people)
//         });

//         let names = namesRaw.join().split(',')

//         let formedTeamsArray = listOfTeams.slice()

//         formedTeamsArray.forEach((obj, index) => {
//             if (obj.people.length === 1) {
//                 obj.people.push(names[index])
//             }
//         })
//         return formedTeamsArray
//     }

//     splitAt(i, xs) {
//         let a = xs.slice(0, i);
//         let b = xs.slice(i, xs.length);
//         return [a, b];
//     };

//     shuffle(xs) {
//         return xs.slice(0).sort(function () {
//             return 0.5 - Math.random();
//         });
//     };


//     zip(xs) {
//         return xs[0].map(function (_, i) {
//             return xs.map(function (x) {
//                 return x[i];
//             });
//         });
//     }

//     finalArray() {
//         let result = zip(splitAt(list.length / 2, shuffle(list)));
//         return result;
//     }

//     render() {
//         return (

//             <div className="Test">
                
//             </div>


//         )
//     }
// }
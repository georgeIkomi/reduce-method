  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
const sumTtotal = nums.reduce((acc, num) => acc += num);
console.log(sumTtotal);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
const totalYrsExp = teamMembers.reduce((acc, teamMember) => 
  acc += teamMember.yrsExperience, 0);

console.log(totalYrsExp);


// Grouping by a property, and totaling it too
let expByProfession = teamMembers.reduce((acc, teamMember) => {
  let key = teamMember.profession;
  if (!acc[key]) {
    acc[key] = teamMember.yrsExperience
  } else {
    acc[key] += teamMember.yrsExperience;
  }
  return acc;
}, {});

console.log(expByProfession);

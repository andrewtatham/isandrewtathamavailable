'use strict';
var lookingFor = ['Microsoft C#.NET', 'ASP.NET MVC', 'HTML/CSS/Javascript', 'Python', 'Microsoft SQL Server'];
var locations = ["Leeds", "Remote"]
var notLookingFor = ['Java', 'PHP', 'Ruby', 'C', 'C++', 'Fortran', 'Swift', 'Basic', 'Kotlin', 'R', 'COBOL', 'Erlang', 'Lisp', 'Objective-C'];
var notLocations = ['Manchester', 'York', 'Sheffield', 'Halifax', 'Huddersfield', 'London', 'Europe', "The rest of the world"];

var questions = [{
  q: 'Which type of role is this?',
  f: 'I am only considering contract roles.',
  y: ['Contract'],
  n: ['Permanent']
}, {
  q: 'Where is this role based?',
  f: 'I am only considering roles in the immediate Leeds area, or working remotley.',
  y: locations,
  n: notLocations
}, {
  q: 'What technology is used?',
  f: "I'm not looking for roles in that technology.",
  y: lookingFor,
  n: notLookingFor
}];

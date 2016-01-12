//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intruiging Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];


function lookUp(firstName, prop){
// Only change code below this line
  var name = firstName;
  for (var i in contacts){
    if((contacts[i].firstName === name) && (contacts[i].hasOwnProperty(prop))){
      return (contacts[i][prop]);
    }else if (contacts[i].hasOwnProperty(prop) === false){
      return "No such property";
    }
  }
// Only change code above this line
  return "No such contact";
}

// Change these values to test your function
lookUp("Akira", "likes");

// name
// age
// trip_destination
// number_of_travelers
// type_of_trip (relaxing, adventure, etc)

var name = prompt ("What is your name?");
var age = prompt ("How old are you?");
var destination = prompt ("Where are you going on this trip?");
var num_of_travelers = prompt ("How many people are going on this trip (not including you)?");
var type_of_trip = prompt ("What type of trip is this (ex: business, adventure, relaxing)?");

alert("" + name + " is " + age + " , and going to " + destination + " with " + num_of_travelers + " other people for a(n) " + type_of_trip + " trip. ");

if (type_of_trip == "business"){
  alert("Business trip tip: ");
}
else if (type_of_trip == "adventure"){
  alert ("b");
}
else if (type_of_trip == "relaxing"){
  alert ("c");
}
else {
  alert ("d");
}

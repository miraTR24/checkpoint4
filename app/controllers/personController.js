const User = require("../models/person");

let amira = new Person({
  name: "amira",
  age: 20,
  favoriteFoods: ["pizza"]
});

let arrayOfPeople = [
  {
    name: "ahmed",
    age: 35,
    favoriteFoods: ["chicken", "sushi", "burger"]
  },
  { name: "noor", age: 24, favoriteFoods: ["bannana", "mango"] },
  { name: "kader", age: 52, favoriteFoods: ["soup"] }
];
  //Create and Save a Record of a Model
  exports.createAndSavePerson = function(done) {
   
  
    amira.save((error, data) => {
      if (error) {
        console.log(error);
      } else {
        done(null, data);
      }
    });
  };

  //Create Many Records with model.create()

 
  
  exports.createManyPeople = function(arrayOfPeople, done) {
    
    Person.create(arrayOfPeople, (error, createdPeople) => {
      if(error){
        console.log(error)
      }else{
        done(null, createdPeople)
      }
    });
  };

  //Use model.find() to Search Your Database

  exports.findPeopleByName = function(personName, done) {
  
    Person.find({name: personName}, (error, arrayOfResults) => {
      if(error){
        console.log(error)
      }else{
        done(null, arrayOfResults)
      }
    })
  };

  //Use model.findOne() to Return a Single Matching Document from Your Database

  exports.findOneByFood = function(food, done) {
    Person.findOne({favoriteFoods : {$all : [food]}}, (error, result) => {
      if(error){
        console.log(error)
      }else{
        done(null, result)
      }
    })
  }

  //Use model.findById() to Search Your Database By _id

  exports.findPersonById = function(personId, done) {
    Person.findById(personId, (error, result) => {
      if(error){
        console.log(error)
      }else{
        done(null, result)
      }
    })
  };

  //Perform Classic Updates by Running Find, Edit, then Save

  exports.findEditThenSave = function(personId, done) {
    var foodToAdd = "hamburger";
    
    Person.findById(personId, (error, result) => {
      if(error){
        console.log(error)
      }else{
        result.favoriteFoods.push(foodToAdd)
        result.save((error, updatedResult) => {
          if(error){
            console.log(error)
          }else{
            done(null, updatedResult)
          }
        })
      }
    })
  };

  //Perform New Updates on a Document Using model.findOneAndUpdate()
  exports.findAndUpdate = function(personName, done) {
    var ageToSet = 20;
    
    Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (error, updatedRecord) => {
      if(error){
        console.log(error)
      }else{
        done(null, updatedRecord)
      }
    })  
  };

  //Delete One Document Using model.findByIdAndRemove

  exports.removeById = function(personId, done) {
  
    Person.findByIdAndRemove(personId, (error, deletedRecord) => {
      if(error){
        console.log(error)
      }else{
        done(null, deletedRecord)
      }
    })
  };

  //Delete Many Documents with model.remove()

  exports.removeManyPeople = function(done) {
    var nameToRemove = "Mary";
  
    Person.remove({name: nameToRemove}, (error, JSONStatus)=> {
      if(error){
        console.log(error)
      }else{
        done(null, JSONStatus)
      }
    })
  };

  //Chain Search Query Helpers to Narrow Search Results

  exports.queryChain = function(done) {
    var foodToSearch = "burrito";
    
    Person.find({favoriteFoods : {$all: [foodToSearch]}})
      .sort({name: 'asc'})
      .limit(2)
      .select('-age')
      .exec((error, filteredResults) => {
      if(error){
        console.log(error)
      }else{
        done(null, filteredResults)
      }
    })
    
  };
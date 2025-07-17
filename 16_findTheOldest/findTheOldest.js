const findTheOldest = function(arr) {

    function getAge(person){
        
        if (person.yearOfDeath == undefined){
            return new Date().getFullYear()- person.yearOfBirth;

        }
       return person.yearOfDeath - person.yearOfBirth
    }

    arr.sort((a,b) => getAge(b)-getAge(a))
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;

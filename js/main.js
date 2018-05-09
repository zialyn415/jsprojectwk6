var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var getAge = prompt("Enter your age:");

alert("Hello, " + firstName + " " + lastName + "!" + " " + "This is your age in months: " + ageInMonths(getAge)+ "." + " " + "This is your age in days: " + ageInDays(getAge));

function ageInDays(age) {
	return age * 365;
}

function ageInMonths(age) {
	return age * 12;
}

// es6 -- what is let?

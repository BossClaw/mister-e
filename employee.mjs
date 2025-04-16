// BASE EMPLOYEE CLASE
class Employee {
	constructor(name, number, hourlyPayRate) {
		// common
		this.name = name;
		this.number = number;

		// SUPER MAKE VARS OVERRIDDEN BY THE EXTENDING CLASS
		this.employeeType = 'UNSET';
		this.bonusEligible = false;

		// VALIDATE PAY RATE
		this.hourlyPayRate = hourlyPayRate;
	}

	validatePayRate() {
		// EARLY SEPARATE RETURNS
		if (isNaN(this.hourlyPayRate)) {
			return false;
		}

		if (this.hourlyPayRate < 0) {
			// console.warn(`Employee ${this.name} has Invalid Hourly Pay Rate submitted "${this.hourlyPayRate}"`);
			return false;
		}

		if (this.hourlyPayRate > 30) {
			return;
			false;
		}

		// FAILED ALL THE FAILS, IT'S VALID!
		return true;
	}
}

export default Employee;

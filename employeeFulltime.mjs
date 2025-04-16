import Employee from './employee.mjs';

// THE BASE EMPLOYEE
class FullTimeEmployee extends Employee {
	constructor(name, id, hourlyRate) {
		// CALL THE BASE CLASS CONSTRUCTOR FOR COMMON VALS
		super(name, id, hourlyRate);

		// SET THE UNIQUE FullTimeEmployee VALS
		this.employeeType = 'FT';
		this.bonusEligible = true;
		this.numOfHours = 38;
	}

	validateHours() {
		// EARLY FAILS
		if (!isNaN(this.numOfHours)) {
			console.warn(` !!! EMPLOYEE[${this.name}] DOES NOT HAVE VALID HOURS SET(${this.numOfHours})`);
			return false;
		}

		if (this.numOfHours < 0) {
			console.warn(` !!! EMPLOYEE[${this.name}] INVALID HOURS, LESS THAN ZERO(${this.numOfHours})`);
			return false;
		}

		if (this.numOfHours > 38) {
			console.warn(` !!! EMPLOYEE[${this.name}] INVALID HOURS, MORE THAN 38 (${this.numOfHours})`);
			return false;
		}

		// FAILED THE FAIL TESTS, MUST BE TRUE!
		return true;
	}

	calculateWeeklyPay() {
		// NOTE - FULLTIME IS HARDCODED TO 38hrs
		let weeklyPay = this.hourlyPayRate * 38;
		return weeklyPay;
	}
}

export default FullTimeEmployee;

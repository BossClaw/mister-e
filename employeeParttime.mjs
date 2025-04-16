import Employee from './employee.mjs';

class PartTimeEmployee extends Employee {
	constructor(name, id, hourlyRate, numOfHours) {
		// CALL SUPER FOR SHARED VALS
		super(name, id, hourlyRate);

		// SET THE UNIQUE PartTimeEmployee VALS
		this.employeeType = 'PT';
		this.bonusEligible = false;
		this.numOfHours = numOfHours;
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

		if (this.numOfHours >= 38) {
			console.warn(` !!! EMPLOYEE[${this.name}] INVALID HOURS, MORE OR EQUAL TO 38 (${this.numOfHours})`);
			return false;
		}

		// FAILED THE FAIL TESTS, MUST BE TRUE!
		return true;
	}

	calculateWeeklyPay() {
		// NOTE - PARTTIME REQUIRES THE DYNAMIC numOfHours
		// NOTE - THE VALIDATE HOURS IS CALLED BEFORE CALC IN PAYROLL
		let weeklyPay = this.hourlyPayRate * this.numOfHours;
		return weeklyPay;
	}
}

export default PartTimeEmployee;

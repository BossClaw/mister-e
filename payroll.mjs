class Payroll {
	constructor(employee, departmentName) {
		// STORE VALUES
		this.employee = employee;
		this.departmentName = departmentName;
        console.log(` + ADD NEW PAYROLL EMPLOYEE[${employee.name}]`);
	}

	printPaySlip() {
		// MAKE ARR TO HOLD PAYSLIP STRING
		let ps_arr = [];

		// ADD LINES TO THE PAYSLIP
		ps_arr.push(`---------------------------------------------------------------------------------`);
		ps_arr.push(`EMPLOYEE Weekly Pay Slip [${this.employee.number}_${Date.now()}] DEPT[${this.departmentName}]`);
		ps_arr.push(`EMPLOYEE #${this.employee.number} NAME[${this.employee.name}] HOURLY[${this.employee.hourlyPayRate}] TYPE[${this.employee.employeeType}]`);

		// RUN VALIDATTIONS
		if (!this.employee.validatePayRate()) {
			ps_arr.push(` !!! EMPLOYEE HOURLY RATE INVALID. RATE[${this.employee.hourlyPayRate}]`);
			ps_arr.push(` !!! PLEASE CONTACT HR AT YOUR EARLIEST CONVENIENCE`);
		} else if (!this.employee.validatePayRate()) {
			ps_arr.push(` !!! EMPLOYEE WEEKLY HOURS INVALID. HOURS[${this.employee.numOfHours}]`);
			ps_arr.push(` !!! PLEASE CONTACT HR AT YOUR EARLIEST CONVENIENCE`);
		} else {
			// FT OR PASSES THE PT HOUR CHECK & VALID HOURLY
			ps_arr.push(``);
			ps_arr.push(`Hours worked this week ${this.employee.numOfHours.toFixed(2)}`);
			ps_arr.push(`Hourly rate ${this.employee.hourlyPayRate.toFixed(2)}`);

			// DO THE CALC
			let weeklyPay = this.employee.calculateWeeklyPay();

			ps_arr.push(`$${this.employee.hourlyPayRate.toFixed(2)} X ${this.employee.numOfHours.toFixed(2)} HRS = $${weeklyPay.toFixed(2)}`);
		}

		ps_arr.push(``);
		ps_arr.push(`Thank you for your service at Humble Widget LLC`);
		ps_arr.push(``);
		ps_arr.push(``);

		// LOG IT AS A JOINED STRING
		console.log(ps_arr.join('\n'));
	}
}

export default Payroll;

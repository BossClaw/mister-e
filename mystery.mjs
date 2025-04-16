import FullTimeEmployee from './employeeFulltime.mjs';
import PartTimeEmployee from './employeeParttime.mjs';
import Payroll from './payroll.mjs';

function doPayrollSystemDemo() {
	// MAKE PAYROLL ARR
	let payroll_arr = [];

	// FullTimeEmployee DEMOS w VALID & INVALID
	payroll_arr.push(new Payroll(new FullTimeEmployee('Norbert J.', 101, 30), 'Engineering'));
	payroll_arr.push(new Payroll(new FullTimeEmployee('Velma D.', 102, 28.15), 'Engineering'));
	payroll_arr.push(new Payroll(new FullTimeEmployee('Paul P.', 111, 'three hundred'), 'Janitorial'));
	payroll_arr.push(new Payroll(new FullTimeEmployee('Creel M.', 141, 300), 'Cafeteria'));

	// PartTimeEmploye DEMOS w VALID & INVALID
	payroll_arr.push(new Payroll(new PartTimeEmployee('Daphne B.', 302, 20, 17), 'Support'));
	payroll_arr.push(new Payroll(new PartTimeEmployee('Fred J.', 312, 22.5, 12), 'Support'));
	payroll_arr.push(new Payroll(new PartTimeEmployee('Scrappy D.', 387, -22.5, 25), 'Greeter'));
	payroll_arr.push(new Payroll(new PartTimeEmployee('Gomer P.', 347, 11.15, 42), 'Greeter'));

	console.log('');
	console.log('');
	console.log('');
	
	// LOOP TO PRINT THE SLIPS
	payroll_arr.forEach((employee) => {
		employee.printPaySlip();
	});
}

// =================================================
// RUN PAYROLL SYSTEM EXAMPLE

doPayrollSystemDemo();

'use strict';

class CountdownTimer {
	constructor({ selector, targetDate }) {
		this.selector = selector;
		this.targetDate = targetDate;

		const refs = {
			daysValue: document.querySelector(`${this.selector} span[data-value="days"]`),
			hoursValue: document.querySelector(`${this.selector} span[data-value="hours"]`),
			minsValue: document.querySelector(`${this.selector} span[data-value="mins"]`),
			secsValue: document.querySelector(`${this.selector} span[data-value="secs"]`),
		};

		setInterval(() => {
            let time = this.targetDate - Date.now();
            
			const days = Math.floor(time / (1000 * 60 * 60 * 24));
            refs.daysValue.textContent = String(days).padStart(2, '0');
            
			const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            refs.hoursValue.textContent = String(hours).padStart(2, '0');
            
			const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            refs.minsValue.textContent = String(mins).padStart(2, '0');
            
			const secs = Math.floor((time % (1000 * 60)) / 1000);
			refs.secsValue.textContent = String(secs).padStart(2, '0');
		}, 1000);
	}
}

const timer = new CountdownTimer({
	selector: '#timer-1',
	targetDate: new Date('Jun 30, 2020'),
});

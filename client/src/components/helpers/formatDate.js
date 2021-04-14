const formatAMPM = function (date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
};

const formatMonthAndDay = function (date) {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Au',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	return `${months[date.getDay()]} ${date.getDate()}`;
};

export const formatDate = function (date) {
	const manageableDate = new Date(date);
	const currentDate = new Date();

	if (manageableDate.getDay() === currentDate.getDay()) {
		return formatAMPM(manageableDate);
	}
	if (manageableDate.getDay() === currentDate.getDay() - 1) {
		return 'Yesterday';
	}

	return formatMonthAndDay(manageableDate);
};

var ejecutar = () => {
	var date = new Date();
	var getDate = date.getDate();
	if(getDate == '22-11-2018') {
		revapi1.revremoveslide(slideindex);	
	}
	if(getDate = '23-11-2018') {
		revapi1.revremoveslide(slideindex);
	}
};
setInterval(ejecutar, 1000);
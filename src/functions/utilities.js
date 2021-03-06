export const setCookie = (name, value) => {
	localStorage.setItem(`${name}`, JSON.stringify(value));
};

export const getCookie = (name) => {
	return JSON.parse(localStorage.getItem(name));
};

export const getDateCode = () => {
	const today = new Date();
	const date = today.getDate();
	const month = today.getMonth();
	const year = today.getFullYear().toString().slice(2, 4);
	return ((date + month + 1) * year * month).toString();
};

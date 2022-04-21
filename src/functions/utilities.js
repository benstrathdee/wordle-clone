export const setCookie = (name, value) => {
	localStorage.setItem(`${name}`, JSON.stringify(value));
};

export const getCookie = (name) => {
	return JSON.parse(localStorage.getItem(name));
};

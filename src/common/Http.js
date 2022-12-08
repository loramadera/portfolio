function Go(method, route, data, url = '') {
	try {
		if (url === '') {
			url = `${process.env.REACT_APP_URL_WEB}web/${route}`;
		}
		let init = {
			method,
		};
		if (method !== 'GET') {
			init.body = JSON.stringify(data);
		}
		return fetch(url, init);
	} catch (err) {
		console.log(err)
	}
}

const Http = {
	Go,
};
export default Http;
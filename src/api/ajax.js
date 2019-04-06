import axios from 'axios'
export default function ajax (url='', params={}, type='GET') {
	//1.定义promise
	let promise;
	return new Promise((resolve,reject) =>{
		//2.判断请求方式
		if (type === 'GET') {
			//2.1拼接请求字符串
			let paramStr = '';
			Object.keys(params).forEach(key=>{
				paramStr += key + "=" + params[key] + "&";
			});
			//2.2处理尾部
			if(paramStr !== ''){
				paramStr = paramStr.substr(0, paramStr.lastIndexOf('&'));
				//axios发送请求
				url += "?" + paramStr;
			}
			promise = axios.get(url);
		} else if(type === 'POST'){
			promise = axios.post(url, params);
		}
		//3.返回promise
		promise.then((response) => {
			resolve(response.data);
		}).catch((error) => {
			reject(error);
		})
	});
	
}
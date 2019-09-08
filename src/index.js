import _ from 'lodash';
//import './style.css';
import printMe from './print.js';

if(process.env.NODE_ENV !== 'production'){
	console.log('Looks like we are in development mode!');
}

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	// Lodash��Ŀǰͨ��һ�� script �ű����룩����ִ����һ���Ǳ����
	element.innerHTML = _.join(['Hello', 'world!'], ' ');
	//element.classList.add('hello');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);
	
	return element;
}

//document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if(module.hot){
	module.hot.accept('./print.js',function(){
		console.log('Accepting the updated printMe module!');
		printMe();
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
	})
}
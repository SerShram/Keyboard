

function myFunc() {
	let elem = document.querySelectorAll('.item');

	for (let i = 0; i < elem.length; i++) {

		if (event.code == elem[i].getAttribute('data-code') && event.code == 'CapsLock' && event.type == 'keyup') {
			elem[i].classList.toggle('is-active');
		}

		if (event.code == elem[i].getAttribute('data-code') && event.type == 'keydown' && event.code != 'CapsLock') {
			elem[i].classList.add('is-active');
			break;
		}
		if (event.code == elem[i].getAttribute('data-code') && event.type == 'keyup' && event.code != 'CapsLock') {
			elem[i].classList.remove('is-active');
			break;
		}
	}
}
//  событие !!!
document.querySelector('.inp').addEventListener('keydown', myFunc);
document.querySelector('.inp').addEventListener('keyup', myFunc);
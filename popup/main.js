function getElement(attrType = 'id', IdClassOrTag) {
	let element;

	switch (attrType) {
		case 'id':
			element = document.getElementById(IdClassOrTag);
			break;
		case 'class':
			element = document.getElementsByClassName(IdClassOrTag);
			break;
		case 'tag':
			element = document.getElementsByTagName(IdClassOrTag);
			break;
		default:
			console.log('Please, check \"getElement\" function.');
	}

	return element;
}

var openModal, modalContainer;

openModal = getElement('id', 'open-modal');
modalContainer = getElement('id', 'popup-container');
tempModalClass = modalContainer.className;

modalForm = getElement('id', 'popup-form');




/* Modal interaction */

function OpenModal(modal) {
	modal.className += ' triggered-modal';
}

function CloseModal(modal) {
	modal.className = tempModalClass;
}


var modalSubmitClicked = false;
function showModalMessage(messageType, message, modal) {
	if (modalSubmitClicked) {
		return false;
	}

	let element, finalMessage;
	
	switch (messageType) {
		case 'error':
			messageType = 'error';
			break;
		case 'success':
			messageType = 'success';
			break;
	}

	element = document.createElement('div');
	finalMessage = document.createTextNode(message);
	element.innerHTML = `
		<span class="${messageType}">${message}</span>
	`;

	modal.appendChild(element);

	modalSubmitClicked = true;

	setTimeout( () => {
		modal.removeChild(element);
		CloseModal(modalContainer);
	}, 3000 );
}






openModal.addEventListener('click', () => {
	OpenModal(modalContainer);
});

modalContainer.addEventListener('click', (event) => {
	if ( event.target.className === modalContainer.className ) {
		CloseModal(modalContainer);
	}
});

modalForm.addEventListener('submit', (event) => {
	showModalMessage('success', 'Thanks for subscribing', modalForm);

	modalForm.reset();
	event.preventDefault();
});
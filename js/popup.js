const button = document.querySelector('#explicacao');
const button2 = document.querySelector('#explicacao2');
const modal = document.querySelector('#pop');
const modal2 = document.querySelector('#pop2');
const closeButton = modal.querySelector('#fechar');
const closeButton2 = modal2.querySelector('#fechar2');

closeButton.onclick = function() {
    modal.close();
};
closeButton2.onclick = function() {
    modal2.close();
};

button.onclick = function() {
    modal.show();
};
button2.onclick = function() {
    modal2.show();
};

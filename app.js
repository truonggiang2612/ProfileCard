var btnOpen = document.querySelector('.btn-open');
var iconClose = document.querySelector('.modal i');
var modal = document.querySelector('.modal')
var boxText = document.querySelector('.box')

//Chữ nhấp nháy màu đỏ trong 1s
setInterval( () => {
    boxText.classList.toggle('box')
}, 1000)

//Hiển thị alert khi click vào dòng thẻ h1 có class box
function showText () {
    alert('Hello! my name Giang')
}

boxText.addEventListener('click', showText)

//Hàm thực hiện
function showModal(){
    modal.classList.toggle('hidden')
};

//Lắng nghe sự kiện click

btnOpen.addEventListener('click', showModal);
iconClose.addEventListener('click', showModal);

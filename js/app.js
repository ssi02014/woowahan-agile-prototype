const bannerBox1 = document.querySelector('.banner-function-box1');
const bannerBox2 = document.querySelector('.banner-function-box2');
const bannerBox3 = document.querySelector('.banner-function-box3');

const noticeBox = document.querySelector('.notice-box');
const noticeTitle = document.querySelector('.notice-title');
const noticeList = document.querySelector('.notice-list');

const navigation = document.querySelector('.header-nav');

window.addEventListener('DOMContentLoaded', () => {
    bannerClassAdd();
})

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);

    let pageYOffset = window.scrollY + screen.height;
    if (pageYOffset > noticeBox.offsetTop) {
            noticeTitle.classList.add('show');
            noticeList.classList.add('show');
    } else {
        noticeTitle.classList.remove("show");
        noticeList.classList.remove("show");
    }

});

//헤더 토글 메뉴
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

    if(!navigation.classList.contains('active')){
        removeShow();
    }
}

//헤더 메뉴 드랍 다운
const menuDrops = document.querySelectorAll('.header-menu-drop');
const headerMenus = document.querySelectorAll('.header-menu');

function selectMenu(e) {
    removeShow();
    if(navigation.classList.contains('active')) {
        this.classList.add('show');
    }
    
}
function removeShow(){
    headerMenus.forEach(item => item.classList.remove('show'));
}
headerMenus.forEach(item => item.addEventListener('click', selectMenu));


//banner class 추가
function bannerClassAdd() {
    setTimeout(() => {
        bannerBox1.classList.add('show');
    }, 600);
    setTimeout(() => {
        bannerBox2.classList.add('show');
    }, 1200);
    setTimeout(() => {
        bannerBox3.classList.add('show');
    }, 1800);
}


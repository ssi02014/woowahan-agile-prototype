const bannerBox1 = document.querySelector('.banner-function-box1');
const bannerBox2 = document.querySelector('.banner-function-box2');
const bannerBox3 = document.querySelector('.banner-function-box3');

const noticeBox = document.querySelector('.notice-box');
const noticeTitle = document.querySelector('.notice-title');
const noticeList = document.querySelector('.notice-list');


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


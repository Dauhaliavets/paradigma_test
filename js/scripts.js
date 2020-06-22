const signUp = document.querySelector('.sign_up'),
    receiveCard = document.querySelector('#receiveCard'),
    popUp = document.querySelector('.pop_up_block-wrapper'),
    popUpOk = document.querySelector('.pop_up_ok-wrapper'),
    popUpCancel = document.querySelector('#pop_upCancel'),
    popUpOkCancel = document.querySelector('#pop_up_ok-Cancel'),
    receiveBtn = document.querySelector('#receiveBtn'),
    userCriterias = document.querySelector('#userCriterias'),
    userName = document.querySelector('#userName'),
    userTel = document.querySelector('#userTel');

signUp.addEventListener('click', function(){
    popUp.classList.add('show');
    popUp.classList.remove('hide');
    document.body.style.overflow = 'hidden';
});
receiveCard.addEventListener('click', function(){
    popUp.classList.add('show');
    popUp.classList.remove('hide');
    document.body.style.overflow = 'hidden';
});
popUpCancel.addEventListener('click', function(){
    popUp.classList.add('hide');
    popUp.classList.remove('show');
    document.body.style.overflow = '';
});
popUpOkCancel.addEventListener('click', function(){
    popUpOk.classList.add('hide');
    popUpOk.classList.remove('show');
    document.body.style.overflow = '';
});
popUp.addEventListener('click', function(e){
    if (e.target === popUp) {
        popUp.classList.add('hide');
        popUp.classList.remove('show');
        document.body.style.overflow = '';
    }
});
receiveBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(userName.value);
    console.log(typeof(userName.value));
    console.log(Boolean(userName.value));
    console.log(typeof(userTel.value));
    console.log(userTel.value.length);
    if (userName.value && userName.value.length !== 0 && userTel.value && userTel.value.length !== 0) {
        popUp.classList.add('hide');
        popUp.classList.remove('show');
        popUpOk.classList.add('show');
        popUpOk.classList.remove('hide');
    }
});
popUpOk.addEventListener('click', function(e){
    if (e.target === popUpOk) {
        popUpOk.classList.add('hide');
        popUpOk.classList.remove('show');
        document.body.style.overflow = '';
    }
});

// ====================================
const menuIcon = document.querySelector('.menu_icon'),
    nav = document.querySelector('.navigation');

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('menu_icon-active');
    nav.classList.toggle('navigation_show');
});
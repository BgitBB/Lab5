// document.querySelector('.signup').addEventListener('click', function(e) {
// console.log('Sign up button click');
// // e.target.style.backgroundColor = "grey";
// // e.target.style.visibility = "hidden";
// e.target.classList.toggle('g');
// });
// document.querySelector('#account_links').addEventListener('click', function() {
// console.log('Account links click');
// });
// document.querySelector('#header').addEventListener('click',function () {
// console.log('Header click');
// });




document.querySelector('#header').addEventListener('click',function (e) {

    if (e.target.className.includes("signup ", 0) || e.target.className.includes(' signup ')){
        console.log('Sign up button click');
        return;
    }
    if (e.target.id === "account_links"){
        console.log('Account links click');
        return;
    }
    
    console.log('Header click');
    
});





document.getElementById('buttons').addEventListener('click', function(e) {
    e.target.style.backgroundColor = "grey";
    // e.target.style.visibility = "hidden";
    if (e.target.className === 'buttonClass') {
        console.log('Click!');
        return;
    }
    console.log('Dlink!');
});
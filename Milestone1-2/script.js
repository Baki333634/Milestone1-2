var toogleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toogleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
// let ref_section = document.getElementById('ref')
// let ref_btn = document.getElementById('ref_btn')
// ref_btn?.addEventListener('click', ()=>{
// ref_section!.classList.toggle('hide')
// })
// let exp_section = document.getElementById('experience')
// let exp_btn = document.getElementById('exp_btn')
// ref_btn?.addEventListener('click', ()=>{
//     exp_section!.classList.toggle('hide')
// })  

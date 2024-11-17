const toogleButton = document.getElementById('toggle-skills') as HTMLBRElement
const skills = document.getElementById('skills') as HTMLElement

toogleButton.addEventListener('click', ()=> {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
})













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

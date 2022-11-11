document.addEventListener('click', e =>{
    const isDropdownBtn = e.target.matches("[data-drop-down-btn]")
    console.log(isDropdownBtn)
    if(!isDropdownBtn && e.target.closest('[data-drop-down]') != null)return 
    let current 
    if(isDropdownBtn){
        current = e.target.nextElementSibling
        current.classList.toggle('active')
    }
    document.querySelectorAll('.drop-down-menu').forEach((e)=>{
        if(e !== current){
              e.classList.remove('active')  
            }
    })
})
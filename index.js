
       let nav_list = document.getElementById('nav_list') 
       let openMenu=document.querySelector('.menuopen')
       openMenu.addEventListner('click',()=>{
        nav_list.style.opacity = '100%'
        openMenu.style.display='none' 
         })
         cross.addEventListner('click',()=>{
            nav_list.style.opacity='0%';
            openMenu.style.display='block' 
         })

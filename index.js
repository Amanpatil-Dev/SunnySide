const Ham=document.querySelector('.responsive')


Ham.addEventListener('click',(e)=>{
    const Link=e.target.closest('.responsive')
    console.log(Link.firstElementChild.classList.contains('hidden'))
    if(!Link.firstElementChild.classList.contains('hidden')){
        Link.firstElementChild.classList.add('hidden')
        Link.firstElementChild.nextElementSibling.classList.remove('hidden')
        document.querySelector('.nav-custom-items').classList.add('nav-custom-items-active')

        document.querySelector('.nav-custom-items-links').classList.add('nav-custom-items-link-active')

        document.querySelector('.nav-link-custom').classList.add('nav-link-custom-active')

    }else{
        Link.firstElementChild.classList.remove('hidden')
        Link.firstElementChild.nextElementSibling.classList.add('hidden')

        document.querySelector('.nav-custom-items').classList.remove('nav-custom-items-active')

        document.querySelector('.nav-custom-items').classList.remove('nav-custom-items-active')

        document.querySelector('.nav-custom-items-links').classList.remove('nav-custom-items-link-active')

        document.querySelector('.nav-link-custom').classList.remove('nav-link-custom-active')


    }
})
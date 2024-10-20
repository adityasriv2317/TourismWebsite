let imgs = document.querySelectorAll('.tripimages img')
let links = document.querySelectorAll('.tripimages a')

imgs.forEach((ig, i) => {
    let target = links[i]

    ig.addEventListener('mouseover', ()=>{
        ig.style.cursor = 'pointer'
    })

    ig.addEventListener('click', () =>{
        target.click()
    })
});
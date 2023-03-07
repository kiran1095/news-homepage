const nav = document.querySelector('.nav_items');
const button = document.querySelector('.mobile_nav');
var main = document.getElementById('main1');

button.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    console.log(visibility);
    if(visibility === "true")
    {
        nav.setAttribute('data-visible', "false");
        button.setAttribute('aria-expanded', "false");
        main.classList.remove("blur_background");
    }
    else 
    {
        nav.setAttribute('data-visible', "true");
        button.setAttribute('aria-expanded', "true");
        main.classList.add("blur_background");
    }
})
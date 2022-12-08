function bodyScrollingToggle(){
    document.body.classList.toggle("stop-scrolling");
}

/*********Navigation menu************ */

(()=>{
    let hamburgerBtn=document.querySelector(".hamburger-btn"),
    navMenu=document.querySelector(".nav-menu"),
    closeNavBtn=navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click",showNavMenu)
    closeNavBtn.addEventListener("click",hideNavMenu)

    function showNavMenu(){
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }

    function hideNavMenu(){
        navMenu.classList.remove("open");
        bodyScrollingToggle();
        fadeOut();
    }

    function fadeOut(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(()=>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    document.addEventListener("click",(event)=>{
        if(event.target.classList.contains('link-item')){
            
            if(event.target.hash !==""){
                event.preventDefault();
                let hash=event.target.hash;
                /*************Prevent existing active section************/
                //active new  section
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");

                event.target.classList.add("active","inner-shadow");
                event.target.classList.remove("outer-shadow","hover-in-shadow");

                hideNavMenu();
            }
            
        }
    })


})();


function ScroolAbout(){
    window.scroll({
        top:680,
        left:0,
    });
}

function ScroolProject(){
    window.scroll({
        top:1830,
        left:0,
    });
}

function ScroolHome(){
    window.scroll({
        top:0,
        left:0,
    });
}

function ScroolContact(){
    window.scroll({
        top:2640,
        left:0,
    });
}

/*********************Hide all section Spect active***************** */











//--------------------------------about section tab-----------------
(()=>{
    let aboutSection=document.querySelector(".about-section"),
    tabsContainer=document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click",(event)=>{
      //  let target=event.target.getAttribute("data-target");
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            let target=event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            aboutSection.querySelector(target).classList.add("active")
            console.log(target)
        }
    })
})();






(()=>{
    let aboutSection=document.querySelector(".portfolio-section"),
    tabsContainer=document.querySelector(".portfolio-filter");
    

    tabsContainer.addEventListener("click",(event)=>{
        let target=event.target.getAttribute("data-target");
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
            let target=event.target.getAttribute("data-target");
            console.log("yes")
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");

            aboutSection.querySelector(".row.portfolio-items.active").classList.remove("active");
            console.log(target)
            aboutSection.querySelector(target).classList.add("active")
        }
    })
})();
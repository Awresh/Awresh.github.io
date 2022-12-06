//--------------------------------about section tab-----------------
console.log("inner_yes");
(()=>{
    let aboutSection=document.querySelector(".about-section"),
    tabsContainer=document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click",(event)=>{
        let target=event.target.getAttribute("data-target");
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            let target=event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            aboutSection.querySelector(target).classList.add("active")
        }
    })
})();
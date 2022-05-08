
// + =

// Dark Mode ---------

const mode = document.querySelector(".switch-mode")
const iconMode = document.querySelector(".fa-moon")
const body = document.querySelector("body")

// console.log(body);

mode.addEventListener("click",(eo) => {
    if(eo.target.classList=="fa-solid fa-moon moon"||"switch-mode"){
        mode.classList.toggle("darkness")
        body.classList.toggle("dark")
    }

})

//  End Dark Mode ---------































// ---------action progress bar

const skills = document.querySelector(".content-skills")
const all = document.querySelectorAll(".all")

const about = document.querySelector(".about")
const aboutRight = document.querySelector(".about-right")


const toUp = document.querySelector(".to-up")


// console.log(about);


window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop -300 ) {
        all.forEach(span => {
            span.style.width = span.dataset.width
        });

        
    }

    // if (window.scrollY >= 100 ) {
    //     aboutRight.classList.add("remove")
    //     aboutRight.classList.remove("about-right")
    //     console.log("object");
        
    // }

    if (window.scrollY >= 300 ) {
        toUp.classList.add("toUpShow")
        
    }

    else  {
        all.forEach(span => {
            span.style.width = "0%"
        });

        toUp.classList.remove("toUpShow")

        

    }
}

// ---------

toUp.addEventListener("click",() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})








// switch-----color

const switchColor = document.querySelector(".switch-color")
const switchMenu = document.querySelector(".switch-color-menu")

// item nav color change 
const aboutImg = document.querySelector(".about-img")
const navSpan = document.querySelectorAll(".nav-span")

// item span color change 
const moving = document.querySelector(".movingchild")

// title Change
const allChange = document.querySelectorAll(".allChange")

// progress bar 
const allSkills = document.querySelectorAll(".all")

// switch-color
// const switchColor = document.querySelector(".switch-color")









switchColor.addEventListener("click",(eo) => {
    switchMenu.classList.toggle("switchMenu")
    
})



switchMenu.addEventListener("click",(eo) => {
    if (eo.target.classList == "red color") {
        aboutImg.classList.add("toRedBack")
        aboutImg.classList.remove("toGreenBack")
        aboutImg.classList.remove("toBlackBack")
        aboutImg.classList.remove("toDefaultBack")

        // ----
        navSpan.forEach(item => {
        item.classList.add("toRedColor")
        item.classList.remove("toGreenColor")
        item.classList.remove("toBlackColor")
        item.classList.remove("toDefaultColor")

        });
        // ----
        moving.classList.add("toRedBack")
        moving.classList.remove("toGreenBack")
        moving.classList.remove("toBlackBack")
        moving.classList.remove("toDefaultBack")

        // ----
        allChange.forEach(item => {
        item.classList.add("toRedBack")
        item.classList.remove("toGreenBack")
        item.classList.remove("toBlackBack")
        item.classList.remove("toDefaultBack")

        });
        // ----
        allSkills.forEach(item => {
            item.classList.add("toRedBack")
            item.classList.remove("toGreenBack")
            item.classList.remove("toBlackBack")
            item.classList.remove("toDefaultBack")
            });
        // ----
        switchColor.classList.add("toRedBack")
        switchColor.classList.remove("toGreenBack")
        switchColor.classList.remove("toBlackBack")
        switchColor.classList.remove("toDefaultBack")

        

        
    }

    if (eo.target.classList == "green color") {
        aboutImg.classList.add("toGreenBack")
        aboutImg.classList.remove("toRedBack")
        aboutImg.classList.remove("toBlackBack")
        aboutImg.classList.remove("toDefaultBack")

        // ----
        navSpan.forEach(item => {
            item.classList.add("toGreenColor")
            item.classList.remove("toRedColor")
            item.classList.remove("toBlackColor")
            item.classList.remove("toDefaultColor")

            });
        // ----
        moving.classList.add("toGreenBack")
        moving.classList.remove("toRedBack")
        moving.classList.remove("toBlackBack")
        moving.classList.remove("toDefaultBack")

        // ----
        allChange.forEach(item => {
            item.classList.add("toGreenBack")
            item.classList.remove("toRedBack")
            item.classList.remove("toBlackBack")
            item.classList.remove("toDefaultBack")

            });
            // ----
            allSkills.forEach(item => {
                item.classList.add("toGreenBack")
                item.classList.remove("toRedBack")
                item.classList.remove("toBlackBack")
            });
            // ----
        switchColor.classList.add("toGreenBack")
        switchColor.classList.remove("toRedBack")
        switchColor.classList.remove("toBlackBack")
        switchColor.classList.remove("toDefaultBack")


    }

    if (eo.target.classList == "black color") {
        aboutImg.classList.add("toBlackBack")
        aboutImg.classList.remove("toRedBack")
        aboutImg.classList.remove("toGreenBack")
        aboutImg.classList.remove("toDefaultBack")

        // ----
        navSpan.forEach(item => {
            item.classList.add("toBlackColor")
            item.classList.remove("toRedColor")
            item.classList.remove("toGreenColor")
            item.classList.remove("toDefaultColor")

            });
        // ----
        moving.classList.add("toBlackBack")
        moving.classList.remove("toRedBack")
        moving.classList.remove("toGreenBack")
        moving.classList.remove("toDefaultBack")

        // ----
        allChange.forEach(item => {
            item.classList.add("toBlackBack")
            item.classList.remove("toRedBack")
            item.classList.remove("toGreenBack")
            item.classList.remove("toDefaultBack")

            });
            // ----
            allSkills.forEach(item => {
                item.classList.add("toBlackBack")
                item.classList.remove("toRedBack")
                item.classList.remove("toGreenBack")
                item.classList.remove("toDefaultBack")
                
                });
                // ----
                switchColor.classList.add("toBlackBack")
        switchColor.classList.remove("toRedBack")
        switchColor.classList.remove("toGreenBack")
        switchColor.classList.remove("toDefaultBack")



    }


    

    if (eo.target.classList == "default color") {
        aboutImg.classList.add("toDefaultBack")
        aboutImg.classList.remove("toBlackBack")
        aboutImg.classList.remove("toRedBack")
        aboutImg.classList.remove("toGreenBack")
        // ----toDefaultColor
        navSpan.forEach(item => {
            item.classList.add("toDefaultColor")
            item.classList.remove("toBlackColor")
            item.classList.remove("toRedColor")
            item.classList.remove("toGreenColor")
            });
        // ----
        moving.classList.add("toDefaultBack")
        moving.classList.remove("toBlackBack")
        moving.classList.remove("toRedBack")
        moving.classList.remove("toGreenBack")
        // ----
        allChange.forEach(item => {
            item.classList.add("toDefaultBack")
            item.classList.remove("toBlackBack")
            item.classList.remove("toRedBack")
            item.classList.remove("toGreenBack")
            });
            // ----
            allSkills.forEach(item => {
                item.classList.add("toDefaultBack")
                item.classList.remove("toBlackBack")
                item.classList.remove("toRedBack")
                item.classList.remove("toGreenBack")
                });
                // ----
                switchColor.classList.add("toDefaultBack")
        switchColor.classList.remove("toRedBack")
        switchColor.classList.remove("toGreenBack")
        switchColor.classList.remove("toBlackBack")



    }
    
})




const miniMenu = document.querySelector(".mini-menu")
const navlink = document.querySelector(".nav-link")
const exitIconChild = document.querySelector(".exitIconChild")
const navlinks = document.querySelector(".nav-links")

console.log(navlinks);

miniMenu.addEventListener("click",(eo) => {
    navlink.classList.add("nav-linkShow")

})

exitIconChild.addEventListener("click",(eo) => {
    navlink.classList.remove("nav-linkShow")

})



    // navlinks.forEach(item => {
        
    // });




    const onloading = document.querySelector(".onloading")
// const bodyy = document.querySelector("body")



window.onload = function  () {
  
}



setTimeout(on, 2000);

function on(params) {
    onloading.style.display ="none"
}


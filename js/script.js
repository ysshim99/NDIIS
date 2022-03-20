const dropDown = function(){
    const anchor = document.querySelectorAll('.down-header > ul > li > ul > li > a, .down-header > ul > li > a');
    
    console.log(anchor)

    anchor.forEach(function(elem){
        console.log(elem)
        const li = elem.parentElement;
        li.addEventListener('mouseover', function(){
            const subMenu = li.getElementsByTagName('ul')[0];
            if(subMenu != undefined){
                if(subMenu.style.display == "" || subMenu.style.display == "none") subMenu.style.display = "block";
            }
        })

        li.addEventListener('mouseleave', function(){
            const subMenu = li.getElementsByTagName('ul')[0];
            if(subMenu != undefined){
                if(subMenu.style.display == "block") subMenu.style.display = "none";
            }
        })

    })


}

dropDown();


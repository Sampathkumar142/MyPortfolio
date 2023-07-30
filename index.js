function navbarmenu(){
    console.log("sam");
    var classLst = document.getElementById("end-nav").classList;
    const imgurl = document.getElementById("menu-burger");
    // console.log(classLst);
    console.log(imgurl)
    if (classLst.contains("inactive")){
        classLst.replace("inactive","active");
        imgurl.src = "asserts/svgs/cross.svg";
    }
    else if(classLst.contains("active")){
        classLst.replace("active","inactive");
        imgurl.src = "asserts/svgs/menu-burger.svg";
    }
}
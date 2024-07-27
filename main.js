// khai báo biến
var bg = document.getElementById("background");

var tex = document.getElementById("text");

// khai báo mảng
var nam = ["Hello" , "I'm May" , "I'm a student" , "I'm a developer" , "I'm really like coding ❤️"];

var color = ["#fa9e34" , "#34faed" ,"#47f54d", "#f334fa" , "#f7fa34"];

var i=0;


//tạo vòng lặp
setInterval(
    function() 
        {
            tex.textContent = nam[i];
            bg.style.backgroundColor = color[i];
            i = (i + 1) % color.length; 
        }
    , 1000); 
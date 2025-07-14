let arr_of_li = document.querySelectorAll("nav ul li");
let sections = document.querySelectorAll(".container section");
let top_arrow = document.querySelector(".to_top");
let to_right_arrow = document.querySelector(".fa-arrow-right");
let nav = document.querySelector("nav ul");
let colors = document.querySelectorAll(".change_color_box .colors .color");
let main_color = document.querySelector(':root');
let change_btn = document.querySelector(".change_color_box .change_btn");
let change_btn_icon = document.querySelector(".change_color_box .change_btn .fa-gear");
let change_box = document.querySelector(".change_color_box");

function getHeight(event) {
    return event.offsetX;
}

function get_section() 
{
    arr_of_li.forEach((li)=>
        {
            li.addEventListener("click",() =>
                {
                    sections.forEach((sec)=>
                        {
                            if (sec.className == li.className)
                            {
                                sec.scrollIntoView({behavior : "smooth"});
                            }
                        }
                )
                }
        )
        }
)
}

function to_top()
{
    top_arrow.addEventListener("click",() =>
        {
            window.scrollTo(0,0);
        }
)
}

function open_nav()
{
    to_right_arrow.addEventListener("click",() => 
        {
            nav.classList.toggle("open_nav");
            to_right_arrow.classList.toggle("rotate");
        }
)
}

function set_color()
{
    colors.forEach((color) =>
        {
            color.addEventListener("click",() =>
                {
                    main_color.style.setProperty('--mainColor' , `${color.getAttribute("name")}`);
                }
        )
        }
)
}

function apper_change_box()
{
    change_btn.addEventListener("click", ()=>
        {
            change_box.classList.toggle("active");
            change_btn_icon.classList.toggle("rotateX");
        }
)
}
get_section();
to_top();
open_nav();
set_color();
apper_change_box();
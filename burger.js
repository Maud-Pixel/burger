
//fa-icon zoom //

var ele_fa = document.querySelectorAll(".fa-search");
new_ele = Array.from(ele_fa);

new_ele.forEach(item => 
item.addEventListener("mouseover", ()=>
{
    item.style.fontSize = "20px";
}))

new_ele.forEach(item => 
item.addEventListener("mouseleave", ()=>
{
    item.style.fontSize = "15px";
})
)
//img rotation //

var ele_img = document.getElementById("burger_big");

    ele_img.addEventListener("mouseover", () => 
    {
        ele_img.style.transform = "rotate(45deg)";
    })

    ele_img.addEventListener("mouseleave", () => 
    {
        ele_img.style.transform = "rotate(0deg)";
        
    })

// dot green undex menu//

var ele_input = document.querySelectorAll(".b-header-menu-input-group");
var new_ele_input = Array.from(ele_input);

new_ele_input.forEach(item =>
    item.addEventListener("mouseenter", ()=>
    {
        
        item.children[1].children[0].style.fontSize = "10px";
        item.children[1].children[0].style.display = "block";
    }))
new_ele_input.forEach(item =>
        item.addEventListener("mouseleave", ()=>
        {
            
            item.children[1].children[0].style.display = "none";
        }))

//btn change color button//

var ele_btn = document.querySelectorAll(".btn");
var new_ele_btn = Array.from(ele_btn);
new_ele_btn.forEach(item => 

    item.addEventListener("mouseover", ()=>
    {
        item.style.color = "#e3581a";
        item.style.backgroundColor = "#f0a889";
    } )
)
new_ele_btn.forEach(item => 

    item.addEventListener("mouseleave", ()=>
    {
        item.style.color = "#f0a889";
        item.style.backgroundColor = "#e3581a";
    })
)

// add ou substract product //
const boni = [...document.querySelectorAll(".button-plus")];
const mini= [...document.querySelectorAll(".button-minus")];
const numbers = [...document.querySelectorAll(".number")];
const costs = [...document.querySelectorAll(".cost")];

var count = 0;

boni.forEach((item, i) =>
   {
       item.addEventListener("click", ()=>
       {
            
            var base = parseInt(costs[i].getAttribute("base"));
            var new_number = parseInt(numbers[i].textContent);
            new_number += 1;
            numbers[i].innerHTML = new_number;
            
            var new_price= parseInt(costs[i].textContent);
            new_price = new_number * base
            costs[i].innerText = new_price;
                
       })
   } 
)

mini.forEach((item, i)=>
{
    
        item.addEventListener("click", ()=>
        {
            var new_number = parseInt(numbers[i].textContent);
            var base = parseInt(costs[i].getAttribute("base"));
            
            if(new_number >=1)
            {
                new_number -= 1;
                numbers[i].innerHTML = new_number;
            
                var new_price= parseInt(costs[i].textContent);
                new_price = new_number * base
                costs[i].innerText = new_price;
            }
            
               
        })
})




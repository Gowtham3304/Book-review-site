var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var closepopupbutton=document.getElementById("cancel-button")
closepopupbutton.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    })
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var booktdescriptioninput=document.getElementById("book-description-input")
addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h1>${booktitleinput.value}</h1>
        <h5>${bookauthorinput.value}</h5>
        <p>${booktdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}
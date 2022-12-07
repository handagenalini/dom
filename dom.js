// console.dir(document)
// console.log(document.URL)
// console.log(document.domain)
// console.log(document.title)
// document.title=123
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.images)
// console.log(document.all[10])
// console.log(document.links)
// var headerTitle=document.getElementById("header-title")
// headerTitle.textcontent="hello";
// headerTitle.innerText="good"
// console.log(headerTitle.innerText)
// headerTitle.innerHTML='<h3>hello</h3>'




var items=document.getElementsByClassName("list-group-item")
console.log(items)
console.log(items[1])
items[1].textContent="hello2"
items[1].style.fontWeight="bold"
items[1].style.backgroundColor="yellow"
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor="red"
}
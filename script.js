// let ul=document.createElement("ul")
// ul.classList.add("task");
// // ul.id="my_id";
// ul.setAttribute("data","335");
// ul.setAttribute("id","test_id");
//  document.querySelector("body").prepend(ul);
// let li1=document.createElement("li")
// li1.textContent="Task1";
// li1.classList.add("task-list")
// let li2=document.createElement("li")
// li2.textContent="Task2";
// li2.classList.add("task-list")
// let li3=document.createElement("li")
// li3.textContent="Task3";
// li3.classList.add("task-list")
// let li4=document.createElement("li")
// li4.textContent="Task4";
// li4.classList.add("task-list")
// document.querySelector("ul").append(li1,li2,li3,li4);

// document.querySelector("ul").remove()
//  FOR SAMPLE.html *********************************************************************************************************

function add_todo(){
  let addTodo=window.prompt("what u gonna do?");
  //firstDiv
  let todo=document.createElement("div") ;
  todo.classList.add("do");
  //circle
  let circle=document.createElement("span");
  circle.classList.add("circle");
  //userList
  let text=document.createElement("span");
  text.classList.add("dotext");
  text.textContent=addTodo;
  //tash
  let i=document.createElement("i");
  i.classList.add("fa-regular", "fa-trash-can");
  //Relative
    todo.append(circle,text,i);
    if(addTodo){
      document.querySelector('.todos').append(todo);
    }
    else{}

  //console.log(todo)
}
document.addEventListener('click',function(e){
  if(e.target && e.target.getAttribute('class')== "circle"){
    let parent=e.target.parentElement;
    parent.classList.toggle("done")
  }
});
document.addEventListener("click",function(e){
   if(e.target && e.target.getAttribute('class') == "fa-regular fa-trash-can"){
    let cofirm=window.confirm(" You sure you want delete it?")
    if (cofirm){
      let parent=e.target.parentElement;
    parent.remove()
    }
    else{}
   }
});
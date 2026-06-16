//styling main through the js
const main=document.querySelector("main");
main.style.display="flex";
main.style.alignItems="center";
main.style.justifyContent="start";
main.style.flexDirection="column";
main.style.gap="10px"
main.style.height="80%";
main.style.width="75%";
main.style.backgroundColor="lavender";
main.style.borderRadius="32px";
main.style.padding="10px 20px";


/* interactivity of the task */
const inp=document.querySelector("input")
const btn =document.querySelector("#add");
const todoList=document.querySelector(".todo-list")

btn.addEventListener("click",()=>{
    const value = inp.value;

    if(value.trim() ==="")return;

    todoList.innerHTML += `
            <div class="li">
                <h3>${value.trim()}</h3>
                <button class="btn edit" >Edit</button>
                <button class="btn del">Delete</button>
            </div>
            `;

    inp.value =""// clears the written tasks
});


//  delete/edit code
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
    }

    if(e.target.classList.contains("edit")){
        const taskbox = e.target.parentElement;
        const taskText=taskbox.querySelector("h3");

        const newTask=prompt("edit your task",taskText.innerText);

        if(newTask ===null)return;
        if(newTask.trim()==="")return;
        taskText.innerText=newTask.trim();
    }

});
























//value.trim() : it removes the white spaces and
// blankspaces and returns a new string without mutating the old one

//inp.value; //prints the value inner html because it
//  updates in real time and replaces everything inside a div


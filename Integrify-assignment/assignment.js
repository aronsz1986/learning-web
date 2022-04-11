let taskArray = [];

function addTaskToArray(){
	let taskTitle=document.getElementById("task-title").value;

    taskArray.push(taskTitle);
    showTasksFromArray();
}


function showTasksFromArray(){
    let wrap = document.getElementById("tasks-wrap");
    wrap.innerHTML= "";
    for(let i=0; i<taskArray.length; i++){
       let taskRow = document.createElement("div");

       taskRow.innerHTML = taskArray[i];
       taskRow.classList.add("task-row");
       wrap.append(taskRow); 



       taskRow.onclick = function(){
        if(taskRow.classList.contains("complete") == false ){
            taskRow.classList.add("complete");
        }
    };

  }
}




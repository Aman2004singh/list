let input = document.getElementById("taskinput")
let list = document.getElementById("list")

function addtask() {


    if (input.value === ' ') {
        alert("write something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input.value
        list.appendChild(li)
        li.addEventListener("click", function () {
            li.remove()
        });
        input.value = " "

    }



}



let input = document.querySelector('input');
let btn = document.querySelector('.addTask > button');

btn.addEventListener('click',addList);
input.addEventListener('keyup',(e)=>{
    (e.keyCode ===13 ? addList(e) : null);
})

function addList(e){
    const notComplated = document.querySelector('ol');

    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');

    delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        notComplated.appendChild(newLi);
        newLi.appendChild(delBtn);
    }
    delBtn.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
    });
}

const button = document.querySelector('#newContainer');
const containers = document.querySelector('#containers');


function addItem(){
    
    
    containers.innerHTML += `
    <div class="container col">
    <h3>Not Complated</h3>
      <div class="input-group mb-3 addTask">
          <input type="text" class="form-control" placeholder="Add a Task" >
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">ADD</button>
      </div>
      <div class="list row">
          <ol class="notComplate col">  
          </ol>
      </div>
 </div>
    `
    
}
console.log (button);
button.addEventListener('click', addItem);





// home work eger ici bashdursa reqemler gelmesin
// li-lerin buttonlari olsun onunla silinsin

//font-family: 'Quintessential', cursive;
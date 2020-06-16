//This is to add Event
let addBtn = document.querySelector('#addbtn');
addBtn.addEventListener('click', function() {

     let title = document.querySelector('input[name=eventtitle]');
     let date = document.querySelector('input[name=eventdate]');

     let eventList = document.querySelector('.eventlist');
     let id = new Date().getTime();

     if(title.value === "" || date.value === ""){
          alert('The Fields required are empty');
     }else{

          let data = `<div class="addedtitle">
                    ${title.value}
               </div>
               <div class="addeddate">
                    ${date.value}
               </div>
               <div class="options">
                    <button type="button" class="remove" name="remove" data-target="${id}">REMOVE</button>
                    <button type="button" class="done" name="done"  data-target="${id}">DONE</button>
               </div>
               <br class="clear"/>`;

          //Create Element with Javascript
          let addedEvent = document.createElement('div');
          addedEvent.classList.add('addedevent');
          addedEvent.innerHTML = data;
          addedEvent.id = `parent_${id}`;
          eventList.appendChild(addedEvent);

          //Clear the fields
          title.value = "";
          date.value = "";

     }
})

//To Remove Event
document.addEventListener('click', e => {
     let target = e.target;

     if(target.classList.contains("done")){
          let parentid = 'parent_'+target.dataset.target;

          let parent = document.querySelector(`#${parentid}`);
          parent.querySelector('.options').style.display = 'none';

     }else if(target.classList.contains("remove")){
          let parentid = 'parent_'+target.dataset.target;

          let parent = document.querySelector(`#${parentid}`);
          parent.style.display = 'none';
     }
})

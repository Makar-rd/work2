const tasks = [
    {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
    },
    {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
    },
    {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
    },
]

const container = document.querySelector('.tasks-list')

function taskListConteiner(id, text) {
    
const div1 = document.createElement('div');
div1.className = 'task-item';
div1.dataset.taskId = id;

container.append(div1)// создает вниз

const taskConteiner = document.createElement('div');
taskConteiner.className = 'task-item__main-container';
div1.append(taskConteiner)

const taskContent = document.createElement('div');
taskContent.className = 'task-item__main-content';
taskConteiner.append(taskContent)


const formCheck = document.createElement('form');
formCheck.className = 'checkbox-form';
taskContent.append(formCheck)

const inputCheck = document.createElement('input');
inputCheck.className = 'checkbox-form__checkbox';
inputCheck.type = 'checkbox';
inputCheck.taskId = 'task-1';
formCheck.append(inputCheck)

const label = document.createElement('label');
label.htmlFor = 'task-1';
formCheck.append(label)

const span = document.createElement('span');
span.className = 'task-item__text';
span.innerText = text;
taskContent.append(span);

const button = document.createElement('button');
button.className = 'task-item__delete-button default-button delete-button';
button.dataDeleteTaskId = '5';
button.innerText = 'удалить';
taskConteiner.append(button);
return div1
}

tasks.forEach(element => {
    taskListConteiner(element.id, element.text ) 
 });

 function error(text) {
    const spanError = document.createElement( 'span' );
    spanError.className = 'error-message-block';
    spanError.innerText = text;
    return spanError
 }



 const createTaskBlock = document.querySelector('.create-task-block');
 let errorEl;

 createTaskBlock.addEventListener('submit', (event) => {
    
    event.preventDefault();
    const newTaskText = event.target.taskName.value.trim() || '';

const povtor = tasks.some(tasks => tasks.text === newTaskText);

if (errorEl) {
    errorEl.remove();
    errorEl = null;
}

if (!newTaskText) {
    errorEl = error('Название задачи не должно быть пустым')
    createTaskBlock.append(errorEl)
} else if (povtor) {
    errorEl = error('Задача с таким названием уже существует')
    createTaskBlock.append(errorEl)
} else if (newTaskText || povtor) {
    const obj = {
        id: Date.now().toString(),
        text: newTaskText,
    }
    tasks.push(obj);
 console.log(tasks)
    const newObject = taskListConteiner(obj.id, obj.text)
    container.append(newObject)
}
 })


 function modal(cancel, delet) {
 const modalWindow = document.createElement('div');
 modalWindow.className = 'modal-overlay modal-overlay_hidden';

 const deleteModal = document.createElement('div');
 deleteModal.className = 'delete-modal';
 modalWindow.append(deleteModal);

 const deleteModalQuestion = document.createElement('h3');
 deleteModalQuestion.className = 'delete-modal__question';
 deleteModalQuestion.innerText = 'Вы действительно хотите удалить эту задачу?';
 deleteModal.append(deleteModalQuestion)

 const deleteModalButtons = document.createElement('div');
 deleteModalButtons.className = 'delete-modal__buttons';
 deleteModal.append(deleteModalButtons);

 const cancelButton = document.createElement('button');
 cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
 cancelButton.innerText = 'Отмена';
 deleteModalButtons.append(cancelButton);

 const deleteButton = document.createElement('button');
 deleteButton.className = 'delete-modal__button delete-modal__confirm-button';
 deleteButton.innerText = 'Удалить';
 deleteModalButtons.append(deleteButton);

   
 return {
    cancelButton,
    deleteButton,
    modalWindow
 }
 }


const {
    cancelButton,
    deleteButton,
    modalWindow
} = modal()
document.body.prepend(modalWindow)  


 cancelButton.addEventListener('click', () => {
    modalWindow.classList.add('modal-overlay_hidden')
 })

//  let taskIdDelete = null;
//  deleteButton.addEventListener('click', () => {
//     let deleteIndex = tasks.findIndex((task) => task.id === taskIdDelete)
//     if (deleteIndex >= 0) {
//         tasks.splice(deleteIndex, 1)
//         const taskHtml = document.querySelector(`[data-task-id="${taskIdDelete}"]`)
//         taskHtml.remove()
        

//         modalWindow.classList.add('modal-overlay_hidden')
    
//     }
    
// })


let targetTaskIdToDelete = null;
deleteButton.addEventListener('click', () => {
    const deleteIndex = tasks.findIndex((task) => task.id === targetTaskIdToDelete);
    if (deleteIndex >= 0) {
        tasks.splice(deleteIndex, 1);
        const taskItemHTML = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`);
        taskItemHTML.remove();
        modalWindow.classList.add('modal-overlay_hidden');
    }
});
 
 

  container.addEventListener('click', (event) => {
    
    const {
        target
    } = event
    const closestTarget = target.closest('.task-item__delete-button');
    if (closestTarget) {
        const closestTask = closestTarget.closest('.task-item');
        if (closestTask) {
            const taskId = closestTask.dataset.taskId;
            targetTaskIdToDelete = taskId;
            modalWindow.classList.remove('modal-overlay_hidden');
        }
    }
})


document.addEventListener('keydown', (event) => {
   const {key} = event;
    const bodyEl =  document.querySelector('body');
    const taskAll = document.querySelectorAll('.task-item');
    const buttonAll = document.querySelectorAll('button');
    bodyEl.style.backgroundColor = 'initial';
        for (let i = 0; i < taskAll.length; i++) {
            taskAll[i].style.color = 'initial'
        }
       for (let i = 0; i < buttonAll.length; i++) {
        buttonAll[i].style.border = 'none'
       }
   if (key === 'Tab') {
        bodyEl.style.backgroundColor = '#24292E';
        for (let i = 0; i < taskAll.length; i++) {
            taskAll[i].style.color = '#ffffff'
        }
       for (let i = 0; i < buttonAll.length; i++) {
        buttonAll[i].style.border = '1px solid #ffffff'
       }
        
   }
})
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector ('form')  
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    buildTodo(e.target.description.value)
    form.reset()
  
   })

   function buildTodo(todo) {
    let list = document.createElement('li')
    let btn = document.createElement ('button')
    btn.addEventListener('click', handleDelete)
    btn.addEventListener = 'x'
    list.textContent = `${todo} `
    list.appendChild(btn)
    document.querySelector ('#tasks').appendChild (list) 
   }

   function handleDelete(e) {
    e.target.parentNode.remove()
   }
});

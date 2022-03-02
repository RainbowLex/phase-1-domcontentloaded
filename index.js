// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  document.querySelector('p').textContent = "This is really cool!";
});

//document.getElementById('text').textContent = 'This is really cool!';


  //   document.querySelector("text").addEventListener('submit', (e) => {
  //     e.preventDefault()
  //     buildToDo(e.target.new_todo.value)
  //   })
  // });
  // function buildToDo(todo){
  //   let p = document.querySelector('p')
  //   p.textContent = 'This is really cool!'
  // }
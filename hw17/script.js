// Задание
// https://jsonplaceholder.typicode.com/todos
// с помощью fetch взять список дел по ссылке выше, обрезать (slice) до 10-15, потом с помощью map привести элементы к нужному нам виду, и использовать этот массив для вывода в нашем проекте ту ду листа.
function fetchTodos() {
    
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json()) // Преобразуем ответ в JSON
      .then(data => {
       
        const slicedTodos = data.slice(0, 10);
        
     
        const mappedTodos = slicedTodos.map(todo => {
          return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed
          };
        });
        
        console.log(mappedTodos);
      })
      .catch(error => console.error('Ошибка:', error)); 
  }
  
 fetchTodos();
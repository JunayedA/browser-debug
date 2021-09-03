console.log('fetch');
console.log(222222);
// setTimeout(()=>console.log('aaaaaa'),5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(333333333);
console.log(444444444);
for (let i = 0; i < 100; i++) {
    console.log(i);
}
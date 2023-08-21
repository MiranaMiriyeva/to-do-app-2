document.querySelector('#add').onclick = function (){
    let input = document.querySelector('#inputId');
if (input.value.length > 0) 
{ document.querySelector('#container').innerHTML += `
<div >
  <div class="main" >
  <span class="text">${document.querySelector('#inputId').value}</span>
  <div class="buttons">
  <button class="deleteBtn">Delete</button>
  <button class="editBtn">Edit</button></div></div>
  <hr class="hr">
</div>
`;
document.querySelector('.deleteBtn').onclick = function (){
let a=document.querySelector('.deleteBtn').innerHTML
    for(let i=0;i<a.length;i++){
        a[i]==0;
        this.parentNode.removeChild();
    }
}
}  else { alert("Please enter text")}}
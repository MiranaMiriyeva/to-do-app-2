document.querySelector('#add').onclick = function () {
    let input = document.querySelector('#inputId');
    if (input.value.length > 0) {
        let container = document.querySelector('#container');
        let newItem = document.createElement('div');
        newItem.innerHTML += `
            <div class="main">
                
                <span class="text">${input.value}</span>
                <div class="buttons">
                    <button class="deleteBtn"><i class="fa-solid fa-trash" style="color: #e61919;"></i></button>
                    <button class="editBtn"><i class="fa-solid fa-pen-to-square" style="color: #3c61d3;"></i></button>
                </div>
            </div>
            <hr class="hr">
        `;
        let deleteBtn = newItem.querySelector('.deleteBtn');
        deleteBtn.onclick = function () {
            container.removeChild(newItem);
        };
        container.appendChild(newItem);
        input.value = '';

        let editBtn = newItem.querySelector('.editBtn');
        editBtn.onclick = function () {
           input.value = newItem.querySelector('.text').innerHTML;
           container.removeChild(newItem);

        };
        


    } else {
        alert("Please enter text");
    }
};
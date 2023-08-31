document.querySelector('#add').onclick = function () {
    let input = document.querySelector('#inputId');
    if (input.value.length > 0) {
        let container = document.querySelector('#container');
        let newItem = document.createElement('div');
        newItem.innerHTML += `
            <div class="main">
                <span class="text">${input.value}</span>
                <div class="buttons">
                    <button class="deleteBtn">Delete</button>
                    <button class="editBtn">Edit</button>
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
    } else {
        alert("Please enter text");
    }
};

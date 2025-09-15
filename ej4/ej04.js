document.addEventListener('DOMContentLoaded', () => {
    const usersList = document.getElementById('users');
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const roleSelect = document.querySelector('select[name="role"]');
    const btnAdd = document.getElementById('add');

    function renderUsers(users) {
        usersList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} / ${user.role} / ${user.email} `;
            const btnPromover = document.createElement('button');
            btnPromover.textContent = 'Promover/Demover';
            btnPromover.onclick = () => {
                const roles = ['Admin', 'Editor', 'Viewer'];
                let id = roles.indexOf(user.role);
                const newRole = roles[(id + 1) % roles.length];
                fetch(`http://localhost:3000/users/${user.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ role: newRole })
                }).then(() => loadUsers());
            };
            li.appendChild(btnPromover);

            const btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            btnDelete.onclick = () => {
                fetch(`http://localhost:3000/users/${user.id}`, { method: 'DELETE' })
                    .then(() => loadUsers());
            };
            li.appendChild(btnDelete);

            usersList.appendChild(li);
        });
    }

    function loadUsers() {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(renderUsers);
    }

    btnAdd.onclick = () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const role = roleSelect.value;
        if (!name || !email) return;
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, role })
        }).then(() => {
            loadUsers();
            nameInput.value = '';
            emailInput.value = '';
            roleSelect.selectedIndex = 0;
        });
    };

    loadUsers();
});
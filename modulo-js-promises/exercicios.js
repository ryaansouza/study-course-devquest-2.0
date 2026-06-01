const url = "https://jsonplaceholder.typicode.com/users";

const loadUsers = async () => {
    try {
        const response = await fetch(url);
        const users = await response.json();

        users.forEach(user => {
            console.log(`${user.name}`);
            console.log(`${user.email}`);
        })
        
    } catch (error) {
        console.log("Ocorreu um erro:" + error);
    }
};
loadUsers();

const loadUsers = async (id) => {

    if (id >= 1 && id <= 10) {
        try {
            const response = await fetch(`${url}/${id}`);

            if (response.ok){
                const user = await response.json();
                console.log(user.name);
                console.log(user.email);
                console.log(user.address.street);
                console.log(user.address.city);
                
            } else {
                throw new Error(`Erro ao carregar usuario com o ID ${id}`);
            }
        } catch (error) {
            console.log("Ocorreu um erro:" + error);
        }
    } else {
        console.log("ID invalido");
    }
}
loadUsers(1);

const urlPosts = "https://jsonplaceholder.typicode.com/posts";

const loadPosts = async () => {
    try {
        const response = await fetch(urlPosts);
        if (response.ok) {
            const posts = await response.json();
            for (i = 0; i < 5; i++) {
                console.log("Titulo: ",posts[i].title);
                console.log("Corpo: ",posts[i].body);
            }
        } else {
            throw new Error("Erro ao carregar posts");
        }

    } catch (error) {
        console.log("Ocorreu um ERRO:", error);
    }
}
loadPosts();
const API_GH = 'https://api.github.com/users/'
// fetch('https://api.github.com/users/')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//     const data = { username: 'example' };

// fetch('https://api.github.com/users/', {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

//   async function loadNames() {
//     const response = await fetch('/API_GH/names');
//     const names = await response.json();
//     console.log(names); 
//     // logs [{ name: 'Joker'}, { name: 'Batman' }]
//   }
//   loadNames();

const searchInput = document.querySelector("[data-search]")

let html = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    html.forEach(post => {
      const isVisible =
        posts.userId.toLowerCase().includes(value)
      posts.element.classList.toggle("hide", !isVisible)
    })
  })

Promise.all([1, 22, 33, 44, 55, 66, 77, 88, 95, 99].map(id =>
    fetch('https://api.github.com/users/${id}`, {
        method:'PATCH',
        body: JSON.stringify({
            name: "John Doe",
    }),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
})
        .then((response) => response.json())))
            .then(data => {
        console.log(data);
        const html = data.map(posts => {
            return `
            <div class="post">    
                <p id="title">${posts.title}</p>
                <p id="author">${posts.name}</p>
                <p id="body">${posts.body}</p>
            </div>`
        }).join(' ');
        console.log(html);
        document.querySelector('#content').insertAdjacentHTML('beforeend', html);
    })
;
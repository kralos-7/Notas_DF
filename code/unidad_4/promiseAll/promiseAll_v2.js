// 1. Definimos nuestros "endpoints" locales (objetos de datos)
const localUsers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const localProducts = [
  { id: 101, title: 'Laptop' },
  { id: 102, title: 'Mouse' }
];

// 2. Función auxiliar para simular un fetch (devuelve una Promesa)
const fakeFetch = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        json: () => Promise.resolve(data)
      });
    }, 500); // Simulamos 500ms de latencia
  });
};

// 3. Implementación con Promise.all
async function getLocalData() {
  try {
    const [resUsers, resProducts] = await Promise.all([
      fakeFetch(localUsers),
      fakeFetch(localProducts)
    ]);

    const users = await resUsers.json();
    const products = await resProducts.json();

    console.log('Usuarios locales:', users);
    console.log('Productos locales:', products);
  } catch (err) {
    console.error("Error cargando locales:", err);
  }
}

getLocalData();

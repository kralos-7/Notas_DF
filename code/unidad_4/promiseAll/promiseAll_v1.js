async function fetchData() {
  try {
    // Iniciamos ambas peticiones en paralelo
    const [responseUsers, responseProducts] = await Promise.all([
      fetch('https://dummyjson.com/users?limit=5'),
      fetch('https://dummyjson.com/products?limit=5')
    ]);

    // Verificamos si ambas respuestas son exitosas
    if (!responseUsers.ok || !responseProducts.ok) {
      throw new Error('Error en una de las peticiones');
    }

    // Convertimos las respuestas a JSON (también en paralelo)
    const [usersData, productsData] = await Promise.all([
      responseUsers.json(),
      responseProducts.json()
    ]);

    // DummyJSON devuelve objetos con propiedades 'users' y 'products'
    console.log('Usuarios:', usersData.users);
    console.log('Productos:', productsData.products);

  } catch (error) {
    console.error('Hubo un fallo al obtener los datos:', error);
  }
}

fetchData()

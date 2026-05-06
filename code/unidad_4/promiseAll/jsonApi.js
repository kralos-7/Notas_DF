const API_URL = 'https://fakestoreapi.com/products';

async function fetchData() {
  try {
    const responseProducts = await fetch(API_URL);

    if (!responseProducts.ok) {
      throw new Error('Error en una de las peticiones');
    }

    const productsData = await responseProducts.json(); // 👈 aquí está el fix

    console.log('Productos:', productsData);

  } catch (error) {
    console.error('Hubo un fallo al obtener los datos:', error);
  }
}

fetchData()


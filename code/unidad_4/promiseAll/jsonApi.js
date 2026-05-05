const API_URL = 'https://fakestoreapi.com/products ';

async function fetchData() {
  try {
    // Iniciamos ambas peticiones en paralelo
    const responseProducts = await fetch(API_URL);

    // Verificamos si ambas respuestas son exitosas
    if (!responseProducts.ok) {
      throw new Error('Error en una de las peticiones');
    }

    // Convertimos las respuestas a JSON (también en paralelo)
    const productsData = responseProducts.json();

    // DummyJSON devuelve objetos con propiedades 'users' y 'products'
    console.log('Productos:', productsData);

  } catch (error) {
    console.error('Hubo un fallo al obtener los datos:', error);
  }
}

fetchData()


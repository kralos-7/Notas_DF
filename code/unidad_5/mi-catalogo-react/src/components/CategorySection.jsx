import ProductCard from './ProductCard'

function CategorySection({ title, products,  onAdd }) {

  return (
    <section className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>{title}</h2>
        <span className="badge bg-dark">
          {products.length} productos
        </span>
      </div>
      <div className="d-flex gap-4 overflow-auto pb-3">

        {products.map(product => (
          <div
            key={product.id}
            style={{
              minWidth: '300px'
            }}
          >
            <ProductCard product={product} onAdd={onAdd} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
import styles from "./ProductList.module.css";
import ProductItem from '../products/ProductItem'
const ProductList = (props) => {
  return (
    <ul className={styles.list}>
     {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}

    </ul>
  )
}

export default ProductList

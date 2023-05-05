import Card from "../ui/Card";
import { useRef } from "react";
import styles from "./NewProductForm.module.css";
const NewProductForm = (props) => {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const productData = {
      name: enteredName,
      image: enteredImage,
      price: enteredPrice,
      desc: enteredDescription,
    };

    props.onAddProduct(productData);
  }
  return (
    <Card>
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Product Name</label>
        <input type="text" required id="name"  ref={nameInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="image">Product Image</label>
        <input type="url" required id="image" ref={imageInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="price">Price</label>
        <input type="text" required id="price"  ref={priceInputRef}  />
      </div>
      <div className={styles.actions}>
        <button>Add Product</button>
      </div>
    </form>
  </Card>
  )
}

export default NewProductForm
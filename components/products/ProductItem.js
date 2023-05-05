import Image from "next/image";
import Card from "../ui/Card";
import styles from "./ProductItem.module.css";
import { useRouter } from "next/router";
const ProductItem = (props) => {
  const router = useRouter();
  const showdetails = () =>{
      router.push(`/${props.id}`)

  }

  return (
        <li className={styles.item}>
          <Card>
            <div className={styles.image}>
            <Image src={props.image} alt={props.name} fill={true}/>
            {/* <img src={props.image}/> */}

            </div>
            <div className={styles.content}>
            <h3>{props.name}</h3>
            <span>${props.price}</span>
            </div>
            <div className={styles.actions}>
            <button onClick={showdetails} >Show details</button>

            </div>
          </Card>
            
        </li>
    )
}

export default ProductItem
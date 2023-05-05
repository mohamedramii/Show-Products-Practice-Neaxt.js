import NewProductForm from '@/components/products/NewProductForm'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Head from "next/head";

const NewProductPage = () => {
  const router = useRouter()
  async function addProductHandler(entereddata){
   const res = await axios.post("/api/products",entereddata , {
     headers: {"Content-Type":"application/json"}
    })
    router.push('/')
  }
  return <Fragment>
  <Head>
      <title>New Product</title>
      <meta name="description" content='add new product'/>
    </Head>
  <NewProductForm onAddProduct={addProductHandler}/>
  </Fragment>
  

}

export default NewProductPage

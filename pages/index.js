import ProductList from "@/components/products/ProductList";
import Product from "@/models/Product";
import { dbConnect } from "@/util/mongo";
import axios from "axios";
import Head from "next/head";
import { Fragment, useEffect } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Product</title>
        <meta name="description" content="Browse a list of new product" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <ProductList products={props.products} />
    </Fragment>
  );
};

export default HomePage;

export async function getServerSideProps() {
  //fetch data from an api
  dbConnect();

  const productsdata = await Product.find();

  return {
    props: {
      products:  productsdata.map((product) => ({
        image: product.image,
        name: product.name,
        price: product.price,
        id: product._id.toString(),
      })),
    },
  };
}

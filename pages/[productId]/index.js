import ProductDetails from "@/components/products/ProductDetails";
import Product from "@/models/Product";
import { dbConnect } from "@/util/mongo";
import mongoose from "mongoose";
import Head from "next/head";
import { Fragment } from "react";

const ProductDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Product detail</title>
        <meta name="description" content="Product detail" />
      </Head>
      <ProductDetails
        image={props.productData.image}
        name={props.productData.name}
        price={props.productData.price}
        desc={props.productData.desc}
      />
    </Fragment>
  );
};

export default ProductDetailPage;

export async function getStaticPaths(props) {
  // connect to data base to get products id
  dbConnect();
  const products = await Product.find({}, { _id: 1 });
  return {
    fallback: false,
    paths: products.map((product) => ({
      params: { productId: product._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const selectProduct = await Product.findById({
    _id: new mongoose.Types.ObjectId(productId),
  });

  return {
    props: {
      productData: {
        image: selectProduct.image,
        name: selectProduct.name,
        price: selectProduct.price,
        desc: selectProduct.desc,
        id: selectProduct._id.toString(),
      },
    },
  };
}

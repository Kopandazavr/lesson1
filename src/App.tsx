// import React, {createElement as e, useEffect, useState} from 'react';

// import { products } from "./data/products"

import { Product } from "./components/Product"
import { Loader } from "./components/Loader"
import { ErrorMessage } from "./components/ErrorMessage"
import { Modal } from "./components/Modal"
import { CreateProduct } from "./components/CreateProduct"
// import { IProduct } from "./models"
// import axios, { AxiosError } from "axios"

import { useProducts } from "./hooks/products"

function App() {
  const { loading, products, error } = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader /> }
      { error && <ErrorMessage error={ error } /> }
      { products.map(product => <Product product={product} key={ product.id } /> ) }

      {/* <Product product={ products[0] } /> */}
      {/* <Product product={ products[1] } /> */}

      <Modal title="Create new product">
        <CreateProduct />
      </Modal>
    </div>
  )
  // return (
  //   <h1>Hello React</h1>
  // )
  // return React.createElement("h1", {}, "Hello from JS")

  // const [count, setCount] = useState(0)

  // return e("div", { className: "container" }, [
  //   e("h1", {key: 1, className: "font-bold"}, `Test JSX ${count}`),
  //   e("button", {
  //     key: 2,
  //     className: "py-2 px-4 border",
  //     onClick: () => {
  //       setCount(count + 1)
  //       // console.log(count)
  //     }
  //   }, "Click me!")
  // ])
}

export default App;

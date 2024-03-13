import { FormImagesProduct } from "../products/components/FormImagesProduct"
import { FormProduct } from "../products/components/FormProduct"
import { StickyHeadTable } from "../products/components/StickyHeadTable"



export const ProductDetailsPage = () => {
  return (
    <>
      <h1>Productos</h1>
      <hr />
      <FormProduct />
      <hr />
      <FormImagesProduct />
      <hr />
      <StickyHeadTable />
    </>
  )
}

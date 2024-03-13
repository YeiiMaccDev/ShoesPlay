import { FormCategory } from "../categories/components/FormCategory"
import { TableCategory } from "../categories/components/TableCategory"

export const CategoriesPage = () => {
  return (
    <>
      <h1>Categorías</h1>
      <hr />
      <FormCategory />
      <hr />
      <TableCategory />
    </>
  )
}

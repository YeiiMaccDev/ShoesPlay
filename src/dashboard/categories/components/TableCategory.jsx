import { useEffect } from 'react';

import { useCategoryStore } from '../../../hooks/useCategoryStore';
import { StickyTable } from '../../components/Table';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'edit', label: 'Editar', minWidth: 150 },
  { id: 'delete', label: 'Eliminar', minWidth: 150 },
];

export const TableCategory = () => {
  const { isLoadingCategories, categories = [], startLoadingCategories } = useCategoryStore();

  useEffect(() => {
    startLoadingCategories();
  }, [])

  const rows = categories.map(({ name, _id }) => ({ name, id: _id }));

  return (
    <StickyTable rows={rows} columns={columns} isLoading={isLoadingCategories} />
  );
}

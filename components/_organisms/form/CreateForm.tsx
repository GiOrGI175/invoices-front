'use client';

import BillFrom from '../../_molecules/form/BillFrom';
import BillTo from '../../_molecules/form/BillTo';
import CreateItemList from '../../_molecules/form/CreateItemList';

export default function CreateForm() {
  return (
    <form>
      <BillFrom />
      <BillTo />
      <CreateItemList />
    </form>
  );
}

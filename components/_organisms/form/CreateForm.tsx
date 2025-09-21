'use client';

import BillFrom from '../../_molecules/form/BillFrom';
import BillTo from '../../_molecules/form/BillTo';
import CreateItemList from '../../_molecules/form/CreateItemList';

export default function CreateForm() {
  return (
    <form className='max-sm:flex max-sm:flex-col max-sm:w-full'>
      <BillFrom />
      <BillTo />
      <CreateItemList />
    </form>
  );
}

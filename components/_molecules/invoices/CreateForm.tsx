'use client';

import BillFrom from './BillFrom';
import BillTo from './BillTo';
import CreateItemList from './CreateItemList';

export default function CreateForm() {
  return (
    <form>
      <BillFrom />
      <BillTo />
      <CreateItemList />
    </form>
  );
}

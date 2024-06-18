"use client";

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="flex flex-col items-center p-6">
      <a
        href="/"
        className="text-amber-700 text-lg font-semibold mb-4">&lt; Back
      </a>
      <h1 className="text-4xl font-bold mb-4 text-center text-yellow-300">
        Shopping List
      </h1>
      <div className="w-full max-w-md">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="w-full max-w-md mt-4">
        <ItemList items={items} />
      </div>
    </main>
  );
}

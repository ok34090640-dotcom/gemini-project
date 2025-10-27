import 'fake-indexeddb/auto';
import { openDB, addItem, getAllItems, deleteItem } from './db';

describe('IndexedDB utility functions', () => {
  beforeEach(async () => {
    // Clear all items before each test
    const db = await openDB();
    const transaction = db.transaction(['expenses'], 'readwrite');
    const store = transaction.objectStore('expenses');
    store.clear();
  });

  test('should add an item to the database', async () => {
    const item = { amount: 100, category: 'Food', emotion: 'Happy' };
    const id = await addItem(item);
    expect(id).toBe(1);

    const items = await getAllItems();
    expect(items).toHaveLength(1);
    expect(items[0]).toEqual({ ...item, id: 1 });
  });

  test('should get all items from the database', async () => {
    const item1 = { amount: 100, category: 'Food', emotion: 'Happy' };
    const item2 = { amount: 50, category: 'Transport', emotion: 'Anxious' };
    await addItem(item1);
    await addItem(item2);

    const items = await getAllItems();
    expect(items).toHaveLength(2);
  });

  test('should delete an item from the database', async () => {
    const item = { amount: 100, category: 'Food', emotion: 'Happy' };
    const id = await addItem(item);

    await deleteItem(id);

    const items = await getAllItems();
    expect(items).toHaveLength(0);
  });
});

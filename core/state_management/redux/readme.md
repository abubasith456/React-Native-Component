## RealTime Example

### goals.tsx

### Scenario: Managing a Department Store
Imagine you're managing a department store, and you need to:

<ul>
<li>Track the inventory of items (like "Apples", "Shampoo").</li>
<li>Add new items when stock arrives.</li>
<li>Remove items when they're sold out.</li>
</ul>

We'll use Redux to manage the inventory state of the store.

### Redux Concepts and Real-Life Mapping

#### 1. State:

When the store opens for the first time, the inventory might be empty:

```
const initialState = [];
```

### 2. Actions:

Actions are like instructions you give to the staff to update the inventory.
For example:
<ul>
<li>Add Item: A new shipment arrives.</li>
<li>Remove Item: An item is sold out.</li>
</ul>

```
addItem: { type: 'inventory/addItem', payload: { itemName: 'Apples' } }
removeItem: { type: 'inventory/removeItem', payload: { id: 'unique-item-id' } }
```

### 3. Reducers:

Reducers are like the rules the staff follow to update the inventory.
For example:
<ul>
<li>If the instruction is "Add Apples", they add it to the inventory.</li>
<li>If the instruction is "Remove Apples", they remove it.</li>
</ul>


```
const inventoryReducer = (state, action) => {
  switch (action.type) {
    case 'inventory/addItem':
      return [...state, action.payload];
    case 'inventory/removeItem':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};
```



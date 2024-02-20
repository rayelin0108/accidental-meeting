function Item({ name, isPacked }) {
  if (isPacked) {
    return (
      <div>
        <li className="item">{name} ✔</li>
        <li className="item">{name} ✔</li>
      </div>
    );
  }
  return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}

export default PackingList;

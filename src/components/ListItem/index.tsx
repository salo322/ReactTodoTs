const ListItem = () => {
  return (
    <div key={Math.floor(Math.random() * 990) + 10}>
      <li></li>
      <input type="button" value="Delete" />
    </div>
  );
};

export default ListItem;

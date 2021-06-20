import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import GridArea from "./components/GridArea";
import Navbar from "./components/Navbar";
import ShoppingCard from "./components/Cards";
import CategoryCard from "./components/CategoryCard";
import CategoryContainer from "./components/Paper";
import { addToCart } from "./services/CartService";
import List from "./Chekout";
import OrderCompleted from "./components/OrderComplete";
import OrdersList from "./Orders ";
import AddItem from "./components/AddItem";


function App() {
  const [category, setCategory] = useState(-1);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState();
  const [isRendered, setIsRendered] = useState(0);
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState();
  const [render, setRender] = useState();

  const handleAdd = (item) => {
    addToCart(item);
    setIsRendered(isRendered + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://ic5t082w58.execute-api.eu-west-1.amazonaws.com/production/api/v1/29052017"
    )
      .then((response) => response.json())
      .then((data) =>
        Promise.all(
          data.map((i) =>
            fetch(
              `https://ic5t082w58.execute-api.eu-west-1.amazonaws.com/production/api/v1/29052017/${i.id}`
            )
          )
        )
          .then((responses) => Promise.all(responses.map((i) => i.json())))
          .then((data) => setData(data))
      );
  }, [render]);

  const filteredProducts = useMemo(() => {
    let products = [];
    if (data) {
      data.forEach((i) => i.items.forEach((p) => products.push(p)));
    }
    if (category >= 0) {
      console.log(data[category].items);
      products = data[category].items;
    }
    if (!filter) {
      return products;
    }
    return products.filter((x) =>
      x.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter, category]);


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <Navbar value={filter} setFilter={setFilter} />
            {data && (
              <CategoryContainer>
                <CategoryCard
                  title="All Items"
                  image={process.env.PUBLIC_URL + `/images/category/all.jpeg`}
                  onSetCategory={() => setCategory(-1)}
                />
                {data.map((categoryItem, i) => (
                  <CategoryCard
                    key={categoryItem.list.id}
                    title={categoryItem.list.name}
                    image={
                      process.env.PUBLIC_URL +
                      `/images/category/${categoryItem.list.name}.jpeg`
                    }
                    onSetCategory={() => setCategory(i)}
                  />
                ))}
              </CategoryContainer>
            )}

            <GridArea isRender={isRendered}>
              {!isLoading && <p>Loading</p>}
              {filteredProducts.map((item) => (
                <ShoppingCard
                  key={item.id}
                  title={item.name}
                  image={
                    process.env.PUBLIC_URL +
                    `/images/products/${item.name}.jpeg`
                  }
                  price={item.qty}
                  onAdd={() => handleAdd(item)}
                />
              ))}
            </GridArea>
          </>
        </Route>
        <Route path="/checkout">
          <Navbar />
          <List />
        </Route>
        <Route path="/orderComplete">
          <Navbar />
          <OrderCompleted/>
        </Route>
        <Route path="/orders">
          <Navbar />
          <OrdersList/>
        </Route>
        <Route path="/addItem">
          <Navbar />
          <CategoryContainer>
          {data && data.map((categoryItem) => (
                  <CategoryCard
                    key={categoryItem.list.id}
                    title={categoryItem.list.name}
                    image={
                      process.env.PUBLIC_URL +
                      `/images/category/${categoryItem.list.name}.jpeg`
                    }
                    onSetCategory={() => 
                    {setCategoryId(categoryItem.list.id)
                      setCategoryName(categoryItem.list.name) }}
                  />
                ))}
                {console.log(render)}
          </CategoryContainer>
          <AddItem CategoryId = {categoryId}
            CategoryName = {categoryName}
            setRender = {setRender}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

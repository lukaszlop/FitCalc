import React from "react";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "./Calculator.scss";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      carbohydrates: 0,
      fat: 0,
      protein: 0,
      name: "",
      currentMeal: "meal1",
      quantity: null,
      caloricDemand: "",
      currentProductName: "",
      meals: {
        meal1: null,
        meal2: null,
        meal3: null,
        meal4: null,
      },
    };
  }

  componentDidMount = () => {
    const products = firebase.firestore().collection("products");
    const productData = [];
    products.get().then((data) => {
      data.forEach((doc) => {
        productData.push(doc.data());
      });
      const sortedProductData = productData.sort((a, b) =>
        a.name < b.name ? -1 : 1
      );
      console.log(productData);
      this.setState({
        productList: productData,
        currentProductName: productData.length > 0 ? productData[0].name : "",
      });
    });
  };

  createPersents = () => {
    const options = [];
    let i = 0;
    while (true) {
      options.push(
        <option key={i} value={i}>
          {i}%
        </option>
      );
      i = i + 5;
      if (i > 100) {
        break;
      }
    }
    return options;
  };

  handleNameInput = (event) => {
    this.setState({ productList: event.target.value });
  };

  handleMealChange = (event) => {
    this.setState({ currentMeal: event.target.value });
  };

  handleProductChange = (event) => {
    this.setState({ currentProductName: event.target.value });
  };

  handleCaloricDemandInput = (event) => {
    const { value } = event.target;
    const number = Number(value);
    if (number || value === "") {
      this.setState({ caloricDemand: number || "" });
    }
  };

  handleQuantityInput = (event) => {
    const { value } = event.target;
    this.setState({ quantity: value });
  };

  handleCarbohydratesChange = (event) => {
    const { value } = event.target;
    this.setState({ carbohydrates: parseInt(value, 10) });
  };

  handleFatChange = (event) => {
    const { value } = event.target;
    this.setState({ fat: parseInt(value, 10) });
  };

  handleProteinChange = (event) => {
    const { value } = event.target;
    this.setState({ protein: parseInt(value, 10) });
  };

  addMeal = () => {
    const {
      productList,
      name,
      quantity,
      currentMeal,
      caloricDemand,
      currentProductName,
      meals,
    } = this.state;

    const foundProduct = productList.find(
      (product) => product.name === currentProductName
    );

    if (foundProduct) {
      const proportion = quantity / foundProduct.quantity;
      const calories = (foundProduct.calories * proportion).toFixed(2);
      const carbohydrates = (foundProduct.carbohydrates * proportion).toFixed(
        2
      );
      const fat = (foundProduct.fat * proportion).toFixed(2);
      const protein = (foundProduct.protein * proportion).toFixed(2);

      const newMeal = {
        ...meals,
        [currentMeal]: [
          ...(meals[currentMeal] || []),
          {
            name: currentProductName,
            proportion,
            calories,
            carbohydrates,
            fat,
            protein,
          },
        ],
      };

      this.setState({
        meals: newMeal,
      });
    }
  };

  render() {
    const {
      quantity,
      name,
      currentProductName,
      carbohydrates,
      meals,
      caloricDemand,
      fat,
      protein,
    } = this.state;

    const carbohydratesValue =
      carbohydrates !== 0
        ? ((caloricDemand * (carbohydrates / 100)) / 4).toFixed(2)
        : 0;
    const fatValue =
      fat !== 0 ? ((caloricDemand * (fat / 100)) / 9).toFixed(2) : 0;
    const proteinValue =
      carbohydrates !== 0
        ? ((caloricDemand * (protein / 100)) / 4).toFixed(2)
        : 0;

    const eaten = ["calories", "carbohydrates", "fat", "protein"].map(
      (name) => {
        return Object.entries(meals).reduce(
          (acumulator, [nextMealName, nextMealsArray]) => {
            return (
              acumulator +
              (nextMealsArray !== null
                ? nextMealsArray.reduce(
                    (acum, sec) => acum + parseFloat(sec[name]),
                    0
                  )
                : 0)
            );
          },
          0
        );
      }
    );

    return (
      <>
        <section className="calculator-wrapper">
          <div className="container">
            <h2 className="calculator__headline">Kalkulator</h2>
            <div className="calculator">
              <div className="calculator__left__side">
                {/* <div className="calculator__left__name">
                  <label htmlFor="name">Nazwa użytkownika:</label>
                  <input
                  id="name"
                    type="text"
                    name="name"
                  />
                </div> */}
                <div className="calculator__left__demand">
                  <label htmlFor="demand">Zapotrzebowanie kaloryczne:</label>
                  <input
                    id="demand"
                    type="text"
                    name="demand"
                    value={caloricDemand}
                    onInput={this.handleCaloricDemandInput}
                    placeholder="kcal"
                  />
                </div>
                <h3 className="calculator__left__headline">
                  Proporcje makroskładników:
                </h3>
                <div className="calculator__left__carbohydrates">
                  <label for="carbohydrates">
                    Węglowodany: {carbohydratesValue || "0.00"} g
                  </label>
                  <select
                    value={carbohydrates}
                    onChange={this.handleCarbohydratesChange}
                  >
                    {this.createPersents()}
                  </select>
                </div>
                <div className="calculator__left__fat">
                  <label for="fat">Tłuszcz: {fatValue || "0.00"} g</label>
                  <select value={fat} onChange={this.handleFatChange}>
                    {this.createPersents()}
                  </select>
                </div>
                <div className="calculator__left__protein">
                  <label for="protein">
                    Białko: {proteinValue || "0.00"} g
                  </label>
                  <select value={protein} onChange={this.handleProteinChange}>
                    {this.createPersents()}
                  </select>
                </div>
                <h3
                  className="calculator__left__sum"
                  style={
                    carbohydrates + fat + protein === 100
                      ? { color: "#338D3A" }
                      : { color: "red" }
                  }
                >
                  Razem {carbohydrates + fat + protein}%
                </h3>
              </div>
              <div className="calculator__right__side">
                <h3 className="calculator__right__headline">Lista posiłków</h3>
                <div className="calculator__right__searching__bar">
                  <select
                    className="calculator__right__searching__bar__select"
                    type="text"
                    name="search"
                    placeholder="Szukaj produktu"
                    onChange={this.handleProductChange}
                    value={currentProductName}
                  >
                    {this.state.productList.map((product) => (
                      <option key={product.name} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                  <input
                  
                    type="text"
                    name="quantity"
                    value={quantity}
                    onInput={this.handleQuantityInput}
                    placeholder="Ilość w g"
                  />
                  <select
                    value={this.state.currentMeal}
                    onChange={this.handleMealChange}
                  >
                    <option value={"meal1"}>Posiłek nr 1</option>
                    <option value={"meal2"}>Posiłek nr 2</option>
                    <option value={"meal3"}>Posiłek nr 3</option>
                    <option value={"meal4"}>Posiłek nr 4</option>
                  </select>
                  <button
                    type="submit"
                    onClick={this.addMeal}
                    disabled={
                      !quantity ||
                      !Number(quantity) ||
                      parseFloat(quantity) <= 0
                    }
                  >
                    Dodaj
                  </button>
                </div>
                <table className="calculator__right__table">
                  <thead>
                    <tr className="table__head">
                      <th colSpan="4"></th>
                      <th width="130">Kalorie</th>
                      <th width="90">W</th>
                      <th width="90">T</th>
                      <th width="90">B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(meals).map((key, index) => (
                      <>
                        <tr className="table__first__meal">
                          <td colSpan="4" style={{fontWeight: 600}}>Posiłek nr {index + 1}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        {meals[key] &&
                          meals[key].map((meal) => (
                            <tr className="table__first__meal">
                              <td colSpan="4">{meal.name}</td>
                              <td>{meal.calories || "0.00"} kcal</td>
                              <td>{meal.carbohydrates || "0.00"} g</td>
                              <td>{meal.fat || "0.00"} g</td>
                              <td>{meal.protein || "0.00"} g</td>
                            </tr>
                          ))}
                      </>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="table__sum">
                      <td colSpan="4">Łącznie:</td>
                      <td>{eaten[0].toFixed(2) || ""} kcal</td>
                      <td>{eaten[1].toFixed(2) || ""} g</td>
                      <td>{eaten[2].toFixed(2) || ""} g</td>
                      <td>{eaten[3].toFixed(2) || ""} g</td>
                    </tr>
                    <tr className="table__goal">
                      <td colSpan="4">Cel:</td>
                      <td>{caloricDemand || "0.00"} kcal</td>
                      <td>{carbohydratesValue || "0.00"} g</td>
                      <td>{fatValue || "0.00"} g</td>
                      <td>{proteinValue || "0.00"} g</td>
                    </tr>
                    <tr className="table__left">
                      <td colSpan="4">Pozostało:</td>
                      <td>{(caloricDemand - eaten[0]).toFixed(2)} kcal</td>
                      <td>{(carbohydratesValue - eaten[1]).toFixed(2)} g</td>
                      <td>{(fatValue - eaten[2]).toFixed(2)} g</td>
                      <td>{(proteinValue - eaten[3]).toFixed(2)} g</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Calculator;

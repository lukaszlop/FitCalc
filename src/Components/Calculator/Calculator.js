import React from "react";
import "./Calculator.scss";

const Calculator = () => {
  return (
    <>
      <section className="calculator-wrapper">
        <div className="container">
          <h2 className="calculator__headline">Kalkulator</h2>
          <div className="calculator">
            <div className="calculator__left__side">
              <div className="calculator__left__demand">
                <label for="demand">Zapotrzebowanie kaloryczne:</label>
                <input type="text" name="demand" placeholder="kcal"></input>
              </div>
              <h3 className="calculator__left__headline">
                Proporcje makroskładników:
              </h3>
              <div className="calculator__left__carbohydrates">
                <label for="carbohydrates">Węglowodany {}g</label>
                <select>
                  <option>0%</option>
                  <option>5%</option>
                  <option>10%</option>
                  <option>15%</option>
                  <option>20%</option>
                  <option>25%</option>
                  <option>30%</option>
                  <option>35%</option>
                  <option>40%</option>
                  <option>45%</option>
                  <option>50%</option>
                  <option>55%</option>
                  <option>60%</option>
                  <option>65%</option>
                  <option>70%</option>
                  <option>75%</option>
                  <option>80%</option>
                  <option>85%</option>
                  <option>90%</option>
                  <option>95%</option>
                  <option>100%</option>
                </select>
              </div>
              <div className="calculator__left__fat">
                <label for="fat">Tłuszcz {}g</label>
                <select>
                  <option>0%</option>
                  <option>5%</option>
                  <option>10%</option>
                  <option>15%</option>
                  <option>20%</option>
                  <option>25%</option>
                  <option>30%</option>
                  <option>35%</option>
                  <option>40%</option>
                  <option>45%</option>
                  <option>50%</option>
                  <option>55%</option>
                  <option>60%</option>
                  <option>65%</option>
                  <option>70%</option>
                  <option>75%</option>
                  <option>80%</option>
                  <option>85%</option>
                  <option>90%</option>
                  <option>95%</option>
                  <option>100%</option>
                </select>
              </div>
              <div className="calculator__left__protein">
                <label for="protein">Białko {}g</label>
                <select>
                  <option>0%</option>
                  <option>5%</option>
                  <option>10%</option>
                  <option>15%</option>
                  <option>20%</option>
                  <option>25%</option>
                  <option>30%</option>
                  <option>35%</option>
                  <option>40%</option>
                  <option>45%</option>
                  <option>50%</option>
                  <option>55%</option>
                  <option>60%</option>
                  <option>65%</option>
                  <option>70%</option>
                  <option>75%</option>
                  <option>80%</option>
                  <option>85%</option>
                  <option>90%</option>
                  <option>95%</option>
                  <option>100%</option>
                </select>
              </div>
              <h3 className="calculator__left__sum">Razem {}%</h3>
            </div>
            <div className="calculator__right__side">
              <h3 className="calculator__right__headline">Lista posiłków</h3>
              <div className="calculator__right__searching__bar">
                <input type="text" name="search" placeholder="Szukaj produktu"></input>
                <input type="text" name="quantity" placeholder="Ilość w g"></input>
                <select>
                  <option>Posiłek nr 1</option>
                  <option>Posiłek nr 2</option>
                  <option>Posiłek nr 3</option>
                  <option>Posiłek nr 4</option>
                </select>
                <button type="submit">Dodaj</button>
              </div>
              <table className="calculator__right__table">
                <thead>
                  <tr className="table__head">
                    <th colspan="4"></th>
                    <th width="160">Calories</th>
                    <th width="100">Carbs</th>
                    <th width="100">Fat</th>
                    <th width="100">Protein</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table__first__meal">
                    <td colspan="4">Posiłek nr 1</td>
                    <td>{} kcal</td>
                    <td>{}g</td>
                    <td>{}g</td>
                    <td>{}g</td>
                  </tr>
                  <tr className="table__second__meal">
                    <td colspan="4">Posiłek nr 2</td>
                    <td>{} kcal</td>
                    <td>{}g</td>
                    <td>{}g</td>
                    <td>{}g</td>
                  </tr>
                  <tr className="table__third__meal">
                    <td colspan="4">Posiłek nr 3</td>
                    <td>{} kcal</td>
                    <td>{}g</td>
                    <td>{}g</td>
                    <td>{}g</td>
                  </tr>
                  <tr className="table__fourth__meal">
                    <td colspan="4">Posiłek nr 4</td>
                    <td>{} kcal</td>
                    <td>{}g</td>
                    <td>{}g</td>
                    <td>{}g</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="table__sum">
                    <td colspan="4">Łącznie:</td>
                    <td>{} kcal</td>
                    <td>{}g</td>
                    <td>{}g</td>
                    <td>{}g</td>
                  </tr>
                  <tr className="table__goal">
                    <td colspan="4">Cel:</td>
                    <td>{} kcal</td>
                    <td>{}g</td>
                    <td>{}g</td>
                    <td>{}g</td>
                  </tr>
                  <tr className="table__left">
                    <td colspan="4">Pozostało:</td>
                    <td>{} kcal</td>
                    <td>{}g</td>
                    <td>{}g</td>
                    <td>{}g</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;

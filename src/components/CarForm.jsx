import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  //Change Name Handler
  const changeNameHandler = (event) => {
    let name = event.target.value;
    dispatch(changeName(name));
  };

  //Change Cost handler
  const changeCostHandler = (event) => {
    let cost = event.target.valueAsNumber || 0;
    dispatch(changeCost(cost));
  };

  //Submit Form to create a car
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={submitHandler}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="" className="label">
              Name
            </label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={changeNameHandler}
            />
          </div>

          <div className="field">
            <label htmlFor="" className="label">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={changeCostHandler}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;

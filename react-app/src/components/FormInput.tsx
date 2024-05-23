import "bootstrap/dist/css/bootstrap.css"

const FormInput = () => {
  return (
    <div>
      <form action="">
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1 mb-2">Item</label>
          <input
            type="name"
            className="form-control"
            id="item"
            placeholder="Enter Item"
          ></input>
        </div>

        <div className="form-group mb-2">
          <label htmlFor="price mb-2">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="price"
          ></input>
        </div>

        <div className="form-group mb-2">
          <label htmlFor="catagories mb-2">Catagories</label>
          <select className="form-control" id="catagories">
            <option>Grosery</option>
            <option>Bill</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Confirm
        </button>
      </form>
    </div>
  )
}

export default FormInput

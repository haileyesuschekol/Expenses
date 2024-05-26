import { useForm, SubmitHandler } from "react-hook-form"
interface FormData {
  item: string
  price: number
  catagory: string
}

const FormInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const submitter: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitter)}>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1 mb-2">Item</label>
          <input
            {...register("item", { required: true, setValueAs: String })}
            type="name"
            className="form-control"
            id="item"
            placeholder="Enter Item"
          ></input>
          {errors.item?.type === "required" && (
            <p className="text-danger">Item Must required</p>
          )}
        </div>

        <div className="form-group mb-2">
          <label htmlFor="price mb-2">Price</label>
          <input
            {...register("price", { required: true, setValueAs: Number })}
            type="number"
            className="form-control"
            id="price"
            placeholder="price"
          ></input>
          {errors.item?.type === "required" && (
            <p className="text-danger">Price Must required</p>
          )}
        </div>

        <div className="form-group mb-2">
          <label htmlFor="catagories mb-2">Catagories</label>
          <select
            className="form-control"
            id="catagories"
            {...register("catagory", { required: true, setValueAs: String })}
          >
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

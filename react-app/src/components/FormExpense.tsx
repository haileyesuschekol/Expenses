import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import catagory from "../catagories"

interface FormDataProps {
  onsubmit: (data: ExpenseFormData) => void
}

const schema = z.object({
  description: z
    .string()
    .min(2, { message: "Should be atleast 2 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01)
    .max(100_000),
  catagory: z.enum(catagory, {
    errorMap: () => ({ message: "Catagory is required." }),
  }),
})

type ExpenseFormData = z.infer<typeof schema>

const FormExpense = ({ onsubmit }: FormDataProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onsubmit(data)
        reset()
      })}
    >
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      <div className="mb-3">
        <label htmlFor="catagory" className="form-label">
          Catagory
        </label>
        <select {...register("catagory")} id="catagory" className="form-select">
          <option value="">All</option>
          {catagory.map((catagory) => (
            <option key={catagory} value={catagory}>
              {catagory}
            </option>
          ))}
        </select>
        {errors.catagory && (
          <p className="text-danger">{errors.catagory.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default FormExpense

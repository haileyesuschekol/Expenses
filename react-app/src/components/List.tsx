interface Expanse {
  id: number
  description: string
  amount: number
  catagory: string
}
interface ExpanseProps {
  expanses: Expanse[]
  onDelete: (id: number) => void
}
const List = ({ expanses, onDelete }: ExpanseProps) => {
  if (expanses.length === 0) return null
  return (
    <table className="table table-borderd">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Catagory</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expanses.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.catagory}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expanses
              .reduce((acc, expanses) => expanses.amount + acc, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default List

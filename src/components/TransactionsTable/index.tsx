import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">U$ 12,000.00</td>
            <td>Development</td>
            <td>02/20/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- U$ 1,000.00</td>
            <td>Home</td>
            <td>02/25/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
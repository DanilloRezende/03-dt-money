import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighligth, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

           <TransactionsContainer>
           <TransactionsTable>
                <tbody>
                    <tr>
                        <td width='50%'>Desenvolvimento de Site</td>
                        <td>
                            <PriceHighligth variant="income">
                                R$ 12.000,00
                            </PriceHighligth>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width='50%'>Aluguel</td>
                        <td>
                            <PriceHighligth variant="outcome">
                                - R$ 1.200,00
                            </PriceHighligth>
                        </td>
                        <td>Moradia</td>
                        <td>10/04/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>
           </TransactionsContainer>
        </div>
    )
}
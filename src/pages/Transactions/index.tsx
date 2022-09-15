import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Searchform } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighligth, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {

    interface Transaction {
        id: number;
        description: string;
        type: "income" | "outcome";
        price: number;
        category: string;
        createdAt: string;
    }

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransaction() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();
        
        setTransactions(data)
        }
    
    useEffect(() => {
        loadTransaction();
    }, [])

    return (
        <div>
            <Header />
            <Summary />

           <TransactionsContainer>
            <Searchform />
           <TransactionsTable>
                <tbody>
                    {transactions.map(transactions => {
                        return (
                            <tr key={transactions.id}>
                        <td width='50%'>{transactions.description}</td>
                        <td>
                            <PriceHighligth variant={transactions.type}>
                                {transactions.price}
                            </PriceHighligth>
                        </td>
                        <td>{transactions.category}</td>
                        <td>{transactions.createdAt}</td>
                    </tr>
                        )
                    })}
                </tbody>
            </TransactionsTable>
           </TransactionsContainer>
        </div>
    )
}
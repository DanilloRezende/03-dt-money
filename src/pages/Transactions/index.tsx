import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Searchform } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { PriceHighligth, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {   
    const { transactions } = useContext(TransactionContext)

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
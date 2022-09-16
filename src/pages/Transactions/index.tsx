import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Searchform } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
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
                                {transactions.type === 'outcome' && '- '}
                                {priceFormatter.format(transactions.price)}
                            </PriceHighligth>
                        </td>
                        <td>{transactions.category}</td>
                        <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
                    </tr>
                        )
                    })}
                </tbody>
            </TransactionsTable>
           </TransactionsContainer>
        </div>
    )
}
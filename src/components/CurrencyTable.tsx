import React from "react";
import { Table } from "react-bootstrap";
import { CurrencyDto } from "../common/types";

interface CurrencyTableProps {
  currencies: CurrencyDto[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = ({ currencies }) => (
  <React.Fragment>
    <Table striped bordered hover className="col-6 col-xs-8">
      <thead>
        <tr>
          <th>Asset</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map((currency) => (
          <tr key={currency.asset}>
            <td>{currency.asset}</td>
            <td>{currency.price}</td>
          </tr>
        ))}
      </tbody>
      <caption>Сryptocurrency prices (in USD)</caption>
    </Table>
  </React.Fragment>
);

export default CurrencyTable;

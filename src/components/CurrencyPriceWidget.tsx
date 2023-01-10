import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { TIME_FOR_UPDATE } from "../common/constants";
import endpoints from "../common/endpoints";
import { CurrencyDto } from "../common/types";
import { randomNumber } from "../common/utils";
import CurrencyTable from "./CurrencyTable";

const CurrencyPriceWidget: React.FC = () => {
  const [data, setData] = useState<CurrencyDto[] | null>(null);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const refresh = async () => {
    try {
      setLoading(true);
      const response = await fetch(endpoints.prices(randomNumber(1, 2)));
      const newData = await response.json();
      setData(newData.prices);
      setErrorMessage("");
    } catch (e: any) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (autoRefresh) {
      interval = setInterval(refresh, TIME_FOR_UPDATE);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoRefresh]);

  return (
    <Col xs={12} md={8}>
      <h1 className="mb-3 text-center">Price Widget</h1>
      {errorMessage ? (
        <p className="text-center text-danger">{errorMessage}</p>
      ) : data ? (
        <CurrencyTable currencies={data} />
      ) : (
        <p className="text-center text-warning">
          No data. Press the Refresh button
        </p>
      )}
      <Row className="mt-3 justify-content-center align-items-center">
        <Form.Check
          type="checkbox"
          label="Auto-Refresh"
          checked={autoRefresh}
          className="col-3 col-xs-6"
          onChange={() => setAutoRefresh(!autoRefresh)}
        />
        <Col xs={4} md={2} lg={2}>
          {loading ? (
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          ) : (
            <Button onClick={refresh}>Refresh</Button>
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default CurrencyPriceWidget;

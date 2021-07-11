import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, sispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item): <strong>{value}</strong>

            </p>
            <small className="subtotal__gift">
              <input type="chexkbox" /> This order contains a gift
            </small>
          </>
        )}
        dicimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Procees to Checkout</button>
    </div>
  );
}
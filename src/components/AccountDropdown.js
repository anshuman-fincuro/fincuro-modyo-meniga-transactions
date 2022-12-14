import React from "react";
import "./../style/Base.css";
import "./../App.css";
import { useDispatch, useSelector} from 'react-redux';
import { setSpendingData } from "../store/actions/component-action";
import { useEffect } from "react";

const AccountDropdown = ({ accountsData, activeIndex, activeIndexVal, setAccountActiveId, accountActiveId }) => {

  const [active, setActive] = React.useState(activeIndexVal);
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.authReducer);

  const changeAccount = (account, index)=>{
      setActive(index);
      activeIndex(index);
      setAccountActiveId(account.id);
  }
  useEffect(()=>{     
    if(accountActiveId !== undefined ){
      dispatch(setSpendingData(token, { accountIds : accountActiveId}))
    }
  }, [accountActiveId, active])
    return (
    <div className="account-wrapper">
      <ul>
        {accountsData.map((x, i) => (
          <li
            key={x.id}
            className={active === i ? "active" : ""}
            onClick={() => changeAccount(x,i)}
          >
            <span className="tab-nav-item-link icon-1">
              <div className="accountMenuItem ">
                <div className="amountWithLabel">
                  <span className="amountWithLabel-label">
                    {x.accountCategory}
                  </span>
                  <span className="amountWithLabel-amount green-color">
                    {x.currencyCode === "GBP" && (
                      <span className="formatCurrency-symbol">£</span>
                    )}
                    {x.currencyCode === "EUR" && (
                      <span className="formatCurrency-symbol">€</span>
                    )}
                    <span className="formatCurrency-value">{x.balance}</span>
                  </span>
                </div>
                <div className="amountWithLabel">
                  <span className="account-label">Acc.Name - {x.name}
                  </span>
                <span className="account-label">{x.metadata[1].value}
                  </span>
                  </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                  </svg>
                </span>
              </div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountDropdown;

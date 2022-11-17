import React from "react";
import "./../../../style/Base.css";
import Icon from "@mdi/react";
import {
  mdiBank,
  mdiCalendarMonthOutline,
  mdiUnfoldMoreVertical,
  mdiCogOutline,
  mdiChat,
} from "@mdi/js";

const TransactionActions = () => {

    const [activeModal, setActiveModal] = React.useState('');

  return (
      <div className="transactionActionList-list">
        <div className="transactionActionList-item">
          <button className="transactionActionList-btn" type="button" onClick={()=>setActiveModal('changeCategory')}>
            <span className="Button-label">
              <Icon
                path={mdiBank}
                size={1.25}
                horizontal
                vertical
                rotate={180}
                color="#fff"
              />
              Change category
            </span>
          </button>
        </div>
        <div className="transactionActionList-item">
          <button className="transactionActionList-btn" type="button" onClick={()=>setActiveModal('changeDate')}>
            <span className="Button-label">
              <Icon
                path={mdiCalendarMonthOutline}
                size={1.25}
                horizontal
                vertical
                rotate={180}
                color="#fff"
              />
              Change date
            </span>
          </button>
        </div>
        <div className="transactionActionList-item">
          <button className="transactionActionList-btn" type="button" onClick={()=>setActiveModal('split')}>
            <span className="Button-label">
              <Icon
                path={mdiUnfoldMoreVertical}
                size={1.25}
                horizontal
                vertical
                rotate={180}
                color="#fff"
              />
              Split
            </span>
          </button>
        </div>
        <div className="transactionActionList-item">
          <button className="transactionActionList-btn" type="button" onClick={()=>setActiveModal('rule')}>
            <span className="Button-label">
              <Icon
                path={mdiCogOutline}
                size={1.25}
                horizontal
                vertical
                rotate={180}
                color="#fff"
              />
              Rule
            </span>
          </button>
        </div>
        <div className="transactionActionList-item">
          <button className="transactionActionList-btn" type="button" onClick={()=>setActiveModal('comment')}>
            <span className="Button-label">
              <Icon
                path={mdiChat}
                size={1.25}
                horizontal
                vertical
                rotate={180}
                color="#fff"
              />
              Add comment
            </span>
          </button>
        </div>
      </div>
  );
};
export default TransactionActions;

import React from "react";
import { Badge } from "reactstrap";
import { useTranslation } from "utility/language";

import PropTypes from "prop-types";


const OrderStatus = ({ order_status }) => {
    const t = useTranslation();
    const all={
        Pending:{color:"secondary"},
        Accepted:{color:"primary"},
        Done:{color:"success"},
        Canceled:{color:"danger"}
    }
    

    
  return (
        <Badge color={all[order_status].color}>
                {t(order_status)}
        </Badge>
  );
};

OrderStatus.propTypes = {
    order_status: PropTypes.string.isRequired,
};

export default OrderStatus;

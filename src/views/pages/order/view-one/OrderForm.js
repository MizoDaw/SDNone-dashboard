import { baseURL, baseURLImage } from 'api/config';
import React from 'react'
import { Row, Col } from 'reactstrap'
import { useTranslation } from 'utility/language'
import classes from './OrderForm.module.scss';
import ImagePreview from 'components/ImagePreview';
import { useImagePreview } from 'hooks';
export default function OrderForm({ order }) {
    
    const t = useTranslation();
    return (
        <>
            <Row xs={1} sm={1} md={2} lg={3} xl={3}>
                <Col className={classes.test} >
                    <p >{t("customer_name")}{" : "}{order.name}</p>
                    <p >{t("customer_phone_number")}{" : "}{order.phone_number}</p>
                    <p >{t("order_created_at")}{" : "}{order.created_at}</p>
                    <p >{t("payment_method")}{" : "}{t('cash_on_delivary')}</p>
                </Col>
                <Col>
                <p >{t("note")}{" : "}{order.note}</p>
                
                </Col>
               
            </Row>
            <Row className={classes.Wrapper}>
              
                    <div className={classes.totalsForm}>

                        <h1 >{t("totals")}</h1>
                        <p >{t("sub_total")}{" : "}{( +(order?.order_total) )- (+(order?.tax))}</p>
                        <p >{t("tax")}{" : "}{(order)?.tax}</p>
                        <p >{t("overall_total")}{" : "}{(order?.order_total)}</p>
                    </div>
         
            </Row>
        </>
    )
}

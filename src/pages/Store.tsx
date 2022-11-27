import { Col, Row } from "react-bootstrap"
import { StoreComponent } from "../component/StoreComponent"
import storeList from "../data/list.json"

export const Store = () => {
    return <>
        <h1>Store page</h1>
        <Row md={2} xs={1} lg={ 3 }>
            {
                storeList.map( i =>   <Col key={i.id}>
                    <StoreComponent name={i.name} price={i.price} img={ i.img} />
                </Col> )
          }
        </Row>
    </>
}
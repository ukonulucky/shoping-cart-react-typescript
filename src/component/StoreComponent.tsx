import { Card } from "react-bootstrap"

 type StoreComponentProps = {
    name: string,
     price: number,
    img: string

}
export const StoreComponent = ({ name, price, img }: StoreComponentProps) => {
   
    return <Card className="mb-3">
        <Card.Img variant="top"
            height="200px"
            style={{
                objectFit: "cover"
            }}
            src={img}
            alt={ name }
        >
        </Card.Img>
        <Card.Body className="d-flex flex-column">
           
            <Card.Text className="d-flex justify-content-between
            align-items-baseline mb-4">
                <strong className="fs-3">{name}</strong>
                <span  className="fs-2  text-muted ">₦{price}</span>
            </Card.Text>
           
            </Card.Body>
    </Card>
    
}
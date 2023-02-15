import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { del } from "../../redux/action";
import EditProduct from "../editProduct/EditProduct";
import Filter from "../filter/Filter";

const ProductCard = ({ el }) => {
//activer la fonction
const dispatch=useDispatch("")
  
  return (
    <div>
      <Card
        id="card"
        style={{margin:"10px", width: "18rem", height: "30rem", backgroundColor: "gray" }}
      >
        <Card.Img id="img" variant="top" style={{ height: "19rem" }} src={el.url} />
        <Card.Body>
          <Card.Title> {el.name} </Card.Title>
          <Card.Text>{el.price}</Card.Text>
          <Card.Text> <Filter rating={el.rate} /> </Card.Text>

          <div className="btns">
            <button onClick={()=> dispatch(del(el.id))}> delete</button>
             <EditProduct el={el} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;

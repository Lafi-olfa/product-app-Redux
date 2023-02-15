import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { add } from "../../redux/action";
const AddProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //handleClose
  //for each input ush
  const [newname, setName] = useState("");
  const [rate, setRate] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  //pour activer la fonction
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.random(),
      name: newname,
      rate: rate,
      price: price,
      url: url,
    };
    dispatch(add(newProduct));
    handleClose();
  };
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handelSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              <input
                type="text"
                placeholder="name"
                value={newname}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <input
                type="text"
                placeholder="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddProduct;

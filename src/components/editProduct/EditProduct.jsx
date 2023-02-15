import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { ed } from "../../redux/action";
const EditProduct = ({ el }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  //
  const [newname, setNewname] = useState(el.name);
  const [newurl, setNewurl] = useState(el.url);
  const [newrate, setNewrate] = useState(el.rate);
  const [newprice, setNewprice] = useState(el.price);
  //
  const dispatch = useDispatch();
  const handelEdit = (e) => {
    e.preventDefault();
    const editP={id:el.id,name:newname,url:newurl,price:newprice,rate:newrate}
    dispatch(ed(editP))
    handleClose()
  
  };
  return (
    <div>
      <Button onClick={handleShow}>Edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit Product </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handelEdit}>
            <input
              type="text"
              placeholder="name edited"
              value={newname}
              onChange={(e) => setNewname(e.target.value)}
            />
            <input
              type="text"
              placeholder="url edited"
              value={newurl}
              onChange={(e) => setNewurl(e.target.value)}
            />
            <input
              type="text"
              placeholder="rate edited"
              value={newrate}
              onChange={(e) => setNewrate(e.target.value)}
            />
            <input
              type="text"
              placeholder="price edited"
              value={newprice}
              onChange={(e) => setNewprice(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Save 
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditProduct;

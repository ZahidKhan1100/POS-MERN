import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Modal,
  Form,
} from "react-bootstrap";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { addCategoryRoute, getCategoriesRoute } from "../../utils/APIRoutes";
import { getCategories } from "../../features/category/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DataTable from 'react-data-table-component';


const Category = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(getCategoriesRoute);
      dispatch(getCategories(data.categories));
    };

    fetchData();
  }, [dispatch]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const columns = [
    {
      name: "Category Name",
      selector: row => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: row => row.description,
    },
    
  ];

  const handleValidation = () => {
    if (name === "") {
      toast.error("Name is required", toastOptions);
      return false;
    } else if (description === "") {
      toast.error("Description is required", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (handleValidation()) {
      const { data } = await axios.post(addCategoryRoute, {
        name,
        description,
      });

      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }

      if (data.status === true) {
        setShow(false);
      }
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="categoryForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="categoryForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <StyledContainer className="fluid">
        <Row className="justify-content-end">
          <Col xs="auto">
            <Button className="mb-2" onClick={handleShow}>
              Add Category
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              columns={columns}
              data={categories}
              striped
              bordered
              highlightOnHover
            />
          </Col>
        </Row>
      </StyledContainer>
      <ToastContainer></ToastContainer>
    </>
  );
};

const StyledContainer = styled(Container)`
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  svg {
    font-size: 1rem;
  }
  .action {
    display: flex;
    gap: 1rem;
  }
`;
export default Category;

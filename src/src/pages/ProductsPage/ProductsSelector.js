import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

function ProductsSelector() {
  const [eventKeyValue, setEventKeyValue] = useState(1);
  const handleSelect = (eventKey) => setEventKeyValue(eventKey);
  return (
    <div className="container my-4 product-selector">
      <Nav onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link className="select">SELECT PRODUCT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="1"
            title="Item"
            className={`select category-text ${
              eventKeyValue == 1 ? "active" : ""
            }`}
          >
            Hermosa
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="2"
            className={`select category-text ${
              eventKeyValue == 2 ? "active" : ""
            }`}
          >
            Extra
          </Nav.Link>
        </Nav.Item>
        <NavDropdown
          title="Hyalaronic Acid"
          id="nav-dropdown"
          className="nav-dropdown-middle select category-text"
        >
          <NavDropdown.Item eventKey="4.1">Product 2</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Product 3</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Product 4</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
}

export default ProductsSelector;

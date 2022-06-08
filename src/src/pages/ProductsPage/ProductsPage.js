import React, { useEffect, useState } from "react";
import "./style.css";
import ProductCard from "./ProductCard";
import ProductsSelector from "./ProductsSelector";
import TablePagination from "@material-ui/core/TablePagination";
import { productsArray } from "./productsData";

function ProductsPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(productsArray.length);
  const [displayProducts, setDisplayProducts] = useState(
    productsArray.slice(0, rowsPerPage)
  );

  const handleChangePage = (event, newPage) => {
    // console.log("new page", newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    //   console.log("page value==>", event.target.value)
  };

  useEffect(() => {
    console.log(" page=>", page);
    console.log("rows per page=>", rowsPerPage);
    console.log("from=>", page * rowsPerPage);
    console.log("to=>", (page + 1) * rowsPerPage);
    setDisplayProducts(
      productsArray.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, rowsPerPage]);
  console.log(displayProducts);
  return (
    <div>
      <ProductsSelector />
      <div className="products-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-0">
              <div className="product-card description">
                <div className="image">
                  <img src="/images/model.png" alt="" />
                </div>
                <div className="text mt-4">
                  <p className="title">Hermosa</p>
                  <p className="category">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                    ipsum eu, tortor rhoncus, malesuada nulla at tortor. Neque,
                    dignissim nec in vulputate eleifend sed purus. Felis,
                    accumsan gravida quis maecenas{" "}
                  </p>
                </div>
              </div>
            </div>
            {displayProducts.map((v, i) => (
              <div key={i} className="col-md-4 p-0">
                <ProductCard product={v} id={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <TablePagination
        component="div"
        count={totalProducts}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="Products per page"
      />
    </div>
  );
}

export default ProductsPage;

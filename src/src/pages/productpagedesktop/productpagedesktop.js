import React from "react";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";

import "./style.css";
function ProductPageDesktop() {
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const useStyles = makeStyles((theme) => ({}));

  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "black",
      backgroundColor: "#29BDAD",
      border: "1px solid",
      borderColor: "black",
      fontSize: "10px",
      borderRadius: "50px",
      padding: "5px 10px",
      "&:hover": {
        backgroundColor: "white",
      },
      "&:focus": {
        borderColor: "black",
      },
    },
  }))(Button);
  return (
    <div className="container-fluid" style={{ padding: "0px 40px" }}>
      <div className="row">
        <div className="col-md-6 ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="/images/hermosa-hard.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/images/hermosa-hard.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./images/hermosa-hard.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="leftdiv">
            <p className="subname">Hyaloronic acid dermal filler</p>

            <p className="product-heading">Hermosa Soft</p>
            <p className="product-content">
              Excellent traction and lixation oy carved-cog. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Magnis malesuada
              sollicitudin eu diam ut scelerisque vitae rhoncus aliquam. Nisi,
              suspendisse rhoncus libero adipiscing diam.
            </p>

            <div className="main10">
              <button className="btn1" style={{ marginRight: "15px" }}>
                <span className="spaninner">CHEEKS</span>
              </button>

              <button className="btn1" style={{ marginRight: "15px" }}>
                <span className="spaninner">EYE BAGS</span>
              </button>

              <button className="btn1" style={{ marginRight: "15px" }}>
                <span className="spaninner">BONE PART</span>
              </button>
            </div>

            <div className="measurement">
              <div className="measurements">
                <p className="pmeasure">Measurement(Gauge/mm) </p>

                <p className="pmeasure">19/100mm/</p>
              </div>
              <div className="measurements">
                <p className="pmeasure">Packing </p>
                <p className="pmeasure">20ea/pouch </p>
              </div>
            </div>

            <div>
              <p className="bestprice"> Base price</p>
            </div>

            <br />

            <button className="btn1">
              <span className="enquire">Inquire</span>
            </button>

            <br />
            <br />

            <br />
            <div>
              <div className="roundborder" style={{ float: "right" }}>
                <div classes="buttonlast">
                  <p className="help">We are here to help</p>
                  <p className="call">Give us ring</p>

                  <img src="/images/whatsappicon.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageDesktop;

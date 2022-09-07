import React from "react";
import { url } from "../../helpers/helpers";

export default function Create() {
  const [gatewayMac, setGatewayMac] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [gatewayX, setGatewayX] = React.useState("");
  const [gatewayY, setGatewayY] = React.useState("");
  const [gatewayFree, setGatewayFree] = React.useState("");
  const [gatewayLoad, setGatewayLoad] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    async function submitData() {
      let data = {
        gatewayMac: gatewayMac,
        description: description,
        text1: text1,
        text2: text2,
        gatewayFree: gatewayFree,
        gatewayLoad: gatewayLoad,
        gatewayX: gatewayX,
        gatewayY: gatewayY,
      };
      const response = await fetch(url + "gateway/addGateway", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok === true) {
        const data = await response.json();
        if (data.success == true) {
          setGatewayMac("");
          setDescription("");
          setText1("");
          setText2("");
          alert("Gateway created successfully!");
        } else {
          alert("Oops something went wrong!");
        }
      }
    }
    submitData();
  };

  return (
    <div className="container create-page-main-section">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="p-sm-5 create-form-field">
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              GatewayMac:<span className="required-label">*</span>
            </label>
            <div className="d-flex align-items-sm-center col-sm-10">
              <input
                required
                value={gatewayMac}
                onChange={(e) => setGatewayMac(e.target.value)}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Description:<span className="required-label">*</span>
            </label>
            <div className="d-flex align-items-sm-center col-sm-10">
              <input
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Text1:<span className="required-label">*</span>
            </label>
            <div className="d-flex align-items-sm-center col-sm-10">
              <input
                required
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label"
              for="exampleFormControlTextarea1"
            >
              Text2:<span className="required-label">*</span>
            </label>
            <div className="d-flex align-items-sm-center col-sm-10">
              <input
                required
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Gateway X:<span className="required-label">*</span>
            </label>
            <div className="d-flex align-items-sm-center col-sm-10">
              <input
                required
                value={gatewayX}
                onChange={(e) => setGatewayX(e.target.value)}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Gateway Y:<span className="required-label">*</span>
            </label>
            <div className="d-flex align-items-sm-center col-sm-10">
              <input
                required
                value={gatewayY}
                onChange={(e) => setGatewayY(e.target.value)}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Gateway Free:<span className="required-label">*</span>
            </label>
            <div className="d-flex align-items-sm-center col-sm-10">
              <input
                required
                value={gatewayFree}
                onChange={(e) => setGatewayFree(e.target.value)}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Gateway Load:<span className="required-label">*</span>
            </label>
            <div className="d-flex align-items-sm-center col-sm-10">
              <input
                required
                value={gatewayLoad}
                onChange={(e) => setGatewayLoad(e.target.value)}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          
          
        </div>
        <div className="d-flex justify-content-center create-catagory-btns">
          <button
            onClick={() => window.history.back()}
            type="button"
            className="font-weight-bold m-3 py-2 px-4 btn btn-danger"
          >
            Cancel<i className="px-2 fa fa-times" aria-hidden="true"></i>
          </button>
          <button
            type="submit"
            className="font-weight-bold m-3 py-2 px-4 btn btn-success"
          >
            Save<i className="px-2 fa fa-floppy-o" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

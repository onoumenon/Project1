import React from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";
import { getHeaderInfo } from "./../../services/adminService";
import Header from "./../common/Header/Header";

function TicketPaid({ user }) {
  const cart = JSON.parse(sessionStorage.getItem("cartData"));

  const days = Object.keys(cart);
  const itemsInCart = Object.values(cart);

  const headerInfo = getHeaderInfo("tickets");

  return (
    <div className="container mx-auto text-center mt-5 mb-5">
      <Header headerInfo={headerInfo} />
      <img
        src="https://i.imgur.com/QGQgwbx.png"
        width="300px"
        alt="Paid"
        className="m-4"
      />
      <div className="container d-flex justify-content-center">
        <Card className="mb-5 border-white shadow" style={{ width: "38rem" }}>
          <CardBody>
            <CardTitle tag="h3">Thank you for your Purchase</CardTitle>
            <img
              src="https://i.imgur.com/rKVUz72.png"
              width="200px"
              alt="Tick"
              className="m-4"
            />
            <CardTitle className="mb-3" tag="h5">
              Here are your order details:
            </CardTitle>
            <p>ORDER ID: {Date.now().toString()}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <h6>Your e-ticket will be sent to your email.</h6>
            <Table borderless className="text-left">
              <thead>
                <tr>
                  <th />
                  <th>{days[0]}</th>
                  <th>{days[1]}</th>
                  <th>{days[2]}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" />
                  <td>{itemsInCart[0]} PAX</td>
                  <td>{itemsInCart[1]} PAX</td>
                  <td>{itemsInCart[2]} PAX</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default TicketPaid;

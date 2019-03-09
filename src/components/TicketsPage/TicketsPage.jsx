import React from "react";
import Header from "../common/Header/Header";
import { getHeaderInfo } from "./../../services/adminService";
import TicketCard from "./TicketCard";
import "./TicketPage.css";

export function TicketsPage() {
  const headerInfo = getHeaderInfo("tickets");

  return (
    <div className="container text-center mx-auto">
      <Header headerInfo={headerInfo} />
      <img
        src="images/icons/step1.png"
        width="300px"
        alt="Get Ticket"
        className="m-4"
      />
      <div className="container d-flex justify-content-center">
        <TicketCard />
      </div>
    </div>
  );
}

export default TicketsPage;

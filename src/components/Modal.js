import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";

const Modal = () => {
  const [show, showModal] = useState(false);
  return (
    <>
      {/* <button className="openModalBtn btn-primary rounded" onClick={() => showModal(true)}><BsPerson/></button> */}
      <div className="clearfix m-0">
        <button
          className="openModalBtn btn-primary rounded-circle"
          onClick={() => showModal(true)}
        >
          <BsPerson />
        </button>
        <div style={{ display: show ? "block" : "none" }} className="modal">
          <div className="modal-content bounceIn clearfix">
            <span onClick={() => showModal(false)} className="close">
              &times;
            </span>

            <div className=" d-flex flex-column justify-content-center align-items-center text-center">
              {/* <img src={logo} style={{ width: '50px', height: '50px' }} className="img-fluid" alt="Icon" /> */}
              <h2 className="primary mt-1">Tic-Tac-Toe</h2>
              <h4 className="lead">
                Developed by{" "}
                <a href="http://yashlalpotu.netlify.app" className="link">
                  Yash Lalpotu
                </a>
              </h4>
            </div>

            <p className="text-center text-muted text">
              {" "}
              <span className="primary-text">Hola amigos</span> , If you found
              any issues regarding this app or anything. You can mail me
              <span className="font-weight-bold"> 2019bpr050@sggs.ac.in</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

import React from "react";

const DeleteOrderModal = ({ id }) => {
  const handleDeleteOrder = () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/order/${id}`;
    console.log(url, id);

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="delete-order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-red-600">
            Are you sure you want to delete this order
          </h3>
          <p className="py-4">
            You lose all your order data, this process is irreversible.
          </p>
          <button onClick={() => handleDeleteOrder()}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default DeleteOrderModal;

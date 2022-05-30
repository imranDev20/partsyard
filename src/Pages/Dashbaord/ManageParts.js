import React, { useEffect, useState } from "react";
import axios from "axios";
import ManagePartsRow from "./ManagePartsRow";

const ManageParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const getParts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/parts`
      );

      setParts(response.data);
    };
    getParts();
  }, []);

  console.log(parts);

  return (
    <main>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Parts</th>
              <th>Price</th>
              <th>Available</th>
              <th>Minimum Order</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <ManagePartsRow
                key={part._id}
                id={part._id}
                image={part.image}
                price={part.price}
                name={part.name}
                minOrder={part.minOrder}
                available={part.available}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ManageParts;

import React from "react";
import { Link } from "react-router-dom";

const AddReviewsRow = ({ image, index, partName, id }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div>
          <div className="font-bold">{partName}</div>
          {/* <div className="text-sm opacity-50">United States</div> */}
        </div>
      </td>

      <td>
        <Link className="btn btn-xs" to={`/reviews/${id}`}>
          Add a review
        </Link>
      </td>
      <td></td>
    </tr>
  );
};

export default AddReviewsRow;

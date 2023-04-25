import {getordersByUser} from "../helpers/OrderApi";
import React, { useEffect, useState } from "react";

const orderTable = ({ order }) => {

    return (
      <table class="table">
      <thead>
        <tr class="table-dark">
          <th scope="col">#</th>
          <th scope="col">Menu</th>
          <th scope="col">Price</th>
        </tr>
        <tbody>
        {order.map((orde) => (
         <tr>
         <th scope="row">1</th>
         <td>{orde.menu}</td>
         <td>{orde.price}</td>
         </tr>
        ))}
         </tbody>
      </thead>
      </table>
      );
}

export default orderTable;
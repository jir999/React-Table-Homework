import React from "react";

const Footer = ({ count, render }) => {
  return (
    <tfoot>
      <tr>
        <th>Count</th>
        {render(count)}
      </tr>
    </tfoot>
  );
};

export default Footer;

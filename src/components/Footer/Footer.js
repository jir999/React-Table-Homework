import React, { useState } from "react";

const Footer = ({ count }) => {
  const [footerData, setFooterData] = useState(null);

  return (
    <tfoot>
      <tr>
        <th>Count</th>
        <th>{count}</th>
      </tr>
    </tfoot>
  );
};

export default Footer;

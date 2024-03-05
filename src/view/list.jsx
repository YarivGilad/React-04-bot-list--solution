import { Card } from "./card";

export function List({ listData }) {
  return (
    <div className="cards-list">
      <ul>
        {listData.map((item) => (
          <li className="card-item" key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// import React from "react";
// import Card from "./Card";

// const List = ({ list_data }) => {
//   return (
//     <div className="cards-list">
//       <ul>
//         {list_data.map((item) => (
//           <li key={item.id} className="card-item">
//             <Card {...item} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default List;

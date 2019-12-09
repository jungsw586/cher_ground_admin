import React from "react";
import FlexLayout from "./FlexLayout";
import RetailerCard from "./RetailerCard";

interface RetailerListProps {
  goRetailerDetail: any;
}

const RetailerList: React.FunctionComponent<RetailerListProps> = props => {
  return (
    <FlexLayout
      padding={"34px 30px"}
      flex_flow={"row wrap"}
      justfy={"flex-start"}
      align={"flex-start"}
    >
      {(() => {
        let _retailList = [];
        for (let i = 0; i < 8; i++) {
          _retailList.push(
            <RetailerCard
              key={i}
              id={i}
              title={"Cher_Ground"}
              author={"Admin"}
              description={"Good!"}
              goRetailerDetail={props.goRetailerDetail}
            />
          );
        }
        return _retailList;
      })()}
    </FlexLayout>
  );
};
export default RetailerList;

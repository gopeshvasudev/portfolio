import React from "react";

const PageTitle = ({ titleName, titleIcon }) => {
  return (
    <div className="page-title flex items-center py-2 px-6 border border-zinc-600 rounded-full text-sm gap-2">
      <span className="text-[16px]">{titleIcon}</span>

      <h6 className="text-[15px]">{titleName}</h6>
    </div>
  );
};

export default PageTitle;

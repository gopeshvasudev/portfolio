import React from "react";

const PageTitle = ({ titleName, titleIcon }) => {
  return (
    <div className="page-title flex items-center py-2 px-4 border border-zinc-600 rounded-full text-sm gap-2">
      {titleIcon}

      <h6>{titleName}</h6>
    </div>
  );
};

export default PageTitle;

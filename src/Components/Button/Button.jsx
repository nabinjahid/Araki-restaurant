import React from "react";

const Button = ({ btn }) => {
  return (
    <div>
      <button className="py-3 px-6 uppercase rounded-md text-xl font-semibold btn-outline border-b-2 border-black">
        {btn}
      </button>
    </div>
  );
};

export default Button;

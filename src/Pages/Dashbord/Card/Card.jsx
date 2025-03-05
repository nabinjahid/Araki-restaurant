import React from "react";
import useCart from "../../../Hooks/useCart";
import Heading from "../../../Components/SectionTitle/Heading";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Card = () => {
  const { cart, refetch } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(cart,refetch);

  const axiosSecure = useAxiosSecure();

  const handleDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deleteCount > 0) {
            
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
        refetch()
      }
    });
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl ">
      <div className="flex justify-between items-center bg-white p-6 rounded-lg  mb-6">
        <h2 className="text-lg font-semibold">
          Total Order: <span className="text-blue-600">{cart.length}</span>
        </h2>
        <h2 className="text-lg font-semibold">
          Total Price:{" "}
          <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </h2>
        <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all">
          Pay
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg  p-6">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-left">
              <th className="p-4">#</th>
              <th className="p-4">Item Image</th>
              <th className="p-4">Item Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr
                key={item._id}
                className="border-b hover:bg-gray-100 transition-all"
              >
                <td className="p-4 font-semibold text-gray-700">{index + 1}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 overflow-hidden rounded-lg ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover h-full w-full rounded-lg"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-800">{item.name}</td>
                <td className="p-4 font-medium text-green-600">
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleDelet(item._id)}
                    className="text-red-500 hover:text-red-700 transition-all text-xl p-2 rounded-full bg-gray-100 hover:bg-red-100"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;

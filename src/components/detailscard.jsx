import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/useContext";
import CreateUserModal from "./CreateUserModal";
import UserCard from "./UserCard";

const Detailscard = () => {
  const { users, setOpenModal, page, setPage, limit,loading } = useContext(Context);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, limit]);

  return (
    <div className="w-full">

      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <div className="relative w-full sm:max-w-md sm:ml-20">
          <input
            type="text"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-4 border border-white text-white w-full bg-white/20 rounded-md py-2 pr-4 outline-none"
          />
        </div>

        <button
          className="border p-2 rounded-md w-full sm:w-auto bg-gray-700 text-white
                     transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]
                     active:scale-95 mr-15"
          onClick={() => setOpenModal(true)}
        >
          Create User +
        </button>
      </div>
      <CreateUserModal />

      <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-10 lg:px-30 mt-4">
        {paginatedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>


      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 pb-10">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50 bg-white/80"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((num, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border rounded transition ${
                page === i + 1
                  ? "bg-gray-700 text-white"
                  : "bg-white/70 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          {/* <button
              onClick={() => setPage(page + 1)}
              className={`px-3 py-1 border rounded transition ${

                  "bg-gray-700 text-white"
                  
              }`}
            >
              {page}
            </button> */}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50 bg-white/80"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Detailscard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function handleDelete(id) {
    const response = await fetch(`https://mern-app-1pis.onrender.com/${id}`, {
      method: "DELETE",
    });
    const result1 = await response.json();
    if (!response.ok) {
      setError(result1.error);
    }
    if (response.ok) {
      console.log("deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  }

  async function getData() {
    const response = await fetch("https://mern-app-1pis.onrender.com");
    const result = await response.json();
    console.log("result..", result);
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
      setError("");
    }
  }

  useEffect(() => {
    console.log("in use effect testing ");
    getData();
  }, []);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-sm-12 col-md-6 col-lg-4 my-2">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.about}</p>
                <div className="mt-auto">
                  <Link to={`/${ele._id}`} className="btn btn-primary card-link">
                    Edit
                  </Link>
                  <span
                    className="btn btn-danger card-link"
                    onClick={() => handleDelete(ele._id)}
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;

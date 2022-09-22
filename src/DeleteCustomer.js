import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteCustomer = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://customer-relation-manage-app.herokuapp.com/customers/${id}`, {
      method: "DELETE",
    })
      .then(window.alert("deleted successfully"))
      .then(() => navigate("/customers"));
  }, []);

  return (
    <div>

    </div>
  )
}

export default DeleteCustomer;

import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Logout = () => {
     const { logout } = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();
     const from = location.state?.from?.pathname || "/";

     Swal.fire({
          title: "Confirm Logout",
          text: "Are you sure want to Log out?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Sure",
     }).then((result) => {
          if (result.isConfirmed) {
               Swal.fire({
                    title: "Logout Successfully!",
                    text: "You have been sucessfully logged out",
                    icon: "success",
               });
               logout().then(() => {
                    navigate(from, { replace: true });
               });
          } else {
               navigate(from, { replace: true });
          }
     });
     return <></>;
};

export default Logout;

const express = require("express");
const router= express.Router();
 const {
   createUser,
   loginUser,
   logoutUser,
   userDetails,
   getAllUsers,
   getSingleUser,
   deleteUser,
} = require("../controller/UserController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


 router.route("/registration").post(createUser);

 router.route("/login").post(loginUser);

 router.route("/logout").get(logoutUser);

 router.route("/me").get(isAuthenticatedUser, userDetails);

 router
   .route("/admin/users")
   .get( isAuthenticatedUser, authorizeRoles("admin"),getAllUsers);

 router
   .route("/admin/user/:id")
   .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
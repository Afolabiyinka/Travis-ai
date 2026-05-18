// import CustomBtn from "@/components/custom/CustomBtn";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { usePassword } from "../hooks/usePassword";
// import { cardStyle } from "@/shared/css-variables/css-variables";
// import CustomInput from "@/components/custom/custom-input";

// const ChangePassword = () => {
//   const { passwordData, setPasswordData, handleChangePassword, isPending } =
//     usePassword();
//   return (
//     <Card className={cardStyle}>
//       <CardHeader className="">
//         <CardTitle>Change Password</CardTitle>
//         <CardDescription>
//           Update your password to keep your account secure
//         </CardDescription>      </CardHeader>
//       <CardContent className="">


//         <div className="space-y-4">
//           <CustomInput
//             startIcon="Lock"
//             type="password"
//             placeholder="Old password"
//             value={passwordData.oldPassword}
//             onChange={(e) =>
//               setPasswordData({ ...passwordData, oldPassword: e })
//             }
//           />
//           <CustomInput
//             startIcon="Lock"
//             type="password"
//             placeholder="New password"
//             value={passwordData.newPassword}
//             onChange={(e) =>
//               setPasswordData({ ...passwordData, newPassword: e })
//             }
//           />
//           <CustomInput
//             startIcon="Lock"
//             type="password"
//             placeholder="Confirm new password"
//             value={passwordData.confirmPassword}
//             onChange={(e) =>
//               setPasswordData({
//                 ...passwordData,
//                 confirmPassword: e,
//               })
//             }
//           />

//           <CustomBtn
//             text={isPending ? "Updating..." : "Update password"}
//             isSolid
//             disabled={isPending}
//             onClick={handleChangePassword}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ChangePassword;

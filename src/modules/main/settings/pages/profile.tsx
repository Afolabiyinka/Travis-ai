import CustomBtn from "@/components/custom/CustomBtn";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useEffect } from "react";
import { useDialogDesc } from "../store/useDialogDesc";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomInput from "@/components/custom/custom-input";
import { cardStyle } from "@/shared/css-variables/css-variables";
import useEditUser from "../hooks/useEditAccout";

const Profile = () => {
  const { updatedData, setupdatedData, handleUpdate } = useEditUser();
  const { setTitle } = useDialogDesc();

  useEffect(() => {
    setTitle("Make changes to your account");
  }, []);

  return (
    <Card className={`${cardStyle} p-0`} >
      <CardHeader>
        <CardTitle>Edit profile</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-5" onSubmit={handleUpdate}>
          {/* Avatar Section */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src="https://i.pinimg.com/736x/ce/21/07/ce21071acfd1e9deb34850f70285a5f0.jpg"
                alt="profile"
              />
              <AvatarFallback>
                {updatedData?.username?.[0]?.toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>

            <span>
              <CustomBtn
                text="Change Picture"
                isSolid
                endIcon="Upload"
                type="button"
              />
            </span>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <CustomInput
              placeholder="Email"
              value={updatedData.email}
              onChange={(val) =>
                setupdatedData({
                  ...updatedData,
                  email: val,
                })
              }
              startIcon="Mail"
            />
          </div>

          {/* Username */}
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <CustomInput
              placeholder="Username"
              startIcon="AtSign"
              value={updatedData.username}
              onChange={(val) =>
                setupdatedData({
                  ...updatedData,
                  username: val,
                })
              }
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <span>
              <CustomBtn isSolid text="Save Changes" type="submit" startIcon="Save" />
            </span>          </div>
        </form>
      </CardContent>
    </Card >
  );
};

export default Profile;
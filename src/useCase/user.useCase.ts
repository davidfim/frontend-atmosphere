import { useState } from "react";
import playerService from "../service/player.service.ts";

const userUseCase = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState();

  const handleSubmitRegister = async (data) => {
    console.log("qweqwe", data);

    if (
      !data.email ||
      !data.password ||
      !data.confirmPassword ||
      !data.name ||
      !data.phoneNumber ||
      !data.instagramAccount
    ) {
      setError("All fields are required.");
      throw error;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.");
      throw error;
    }

    const playerData = {
      email: data.email,
      password: data.password,
      name: data.name,
      phone_num: data.phoneNumber,
      insta: data.instagramAccount,
    };
    try {
      await playerService.createPlayer(playerData);
    } catch (e) {
      setError(e);
    }
  };
  return {
    handleSubmitRegister,
    error,
  };
};

export default userUseCase;

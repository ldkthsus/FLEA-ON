<<<<<<< HEAD
import React ,{useEffect}from "react";
=======
// MyPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../features/auth/actions";
>>>>>>> b1fcdcdbf75b61dd03a812f5b7f24f8dca87768b
import Profile from "../features/mypage/components/Profile";
import Level from "../features/mypage/components/Level";
import Calendar from "../features/mypage/components/Calendar";
import FleaOn from "../features/mypage/components/FleaOn";
import { Box } from "@mui/material";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "../features/auth/actions";


const MyPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("들어왓니")
=======

const MyPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user.level);

  useEffect(() => {
    // 페이지가 로드될 때 사용자 정보 가져오기
>>>>>>> b1fcdcdbf75b61dd03a812f5b7f24f8dca87768b
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5, p: 2 }}>
      <Profile user={user} />
      <Level level={user?.level} />
      <Calendar />
      <FleaOn />
    </Box>
  );
};

export default MyPage;

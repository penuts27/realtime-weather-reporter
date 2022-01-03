// import { useState, useEffect, useMemo } from "react";
// import {findLocation} from './utils'
// import useWeatherApi from "./useWeatherApi";
import { ThemeProvider } from "@emotion/react";

import styled from "@emotion/styled";
// 匯入css func
// import { css } from "@emotion/react";

// import WeatherCard from "./WeatherCard";
// import WeatherSetting from "./WeatherSetting";
// import sunriseAndSunsetData from "./sunrise-sunset.json";

// 將一批css樣式定義成js func
// const buttonDefault = () =>css`
//   display: block;
//   width: 120px;
//   height: 30px;
//   font-size: 14px;
//   background-color: transparent;
//   color: #212121;

// `
// const RejectButton = styled.button`
//   ${buttonDefault};
//   border-color: red;
//   color: red;
// `
// const AcceptButton = styled.button`
//   ${buttonDefault};
//   border-color: green;
//   color: green;
// `
// theme

// 定義主題色
const theme = {
  light: {
    backgroundColor: "#ededed",
    foregroundColor: "#f9f9f9",
    boxShadow: "0 1px 3px 0 #999999",
    titleColor: "#212121",
    temperatureColor: "#757575",
    textColor: "#828282"
  },
  dark: {
    backgroundColor: "#1F2022",
    foregroundColor: "#121416",
    boxShadow:
      "0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)",
    titleColor: "#f9f9fa",
    temperatureColor: "#dddddd",
    textColor: "#cccccc"
  }
};

const WeatherCard = styled.div``

// 定義帶有 styled compoment
const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
          <h1>Title</h1>
          <input type="text"/>
          <WeatherCard/>
      </Container>
    </ThemeProvider>
  );
};

export default WeatherApp;

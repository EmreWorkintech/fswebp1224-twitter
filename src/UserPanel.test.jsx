/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import UserPanel from "./components/UserPanel";
import Wrapper from "./Wrapper";

const usersMock = {
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NTA2OTkyNDEsImV4cCI6MTc1MDcwMjg0MX0.ylH05_K1mt0GHmQ2Tjd8hmogCi4R4UNCselKxuCgbJs",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NTA2OTkyNDEsImV4cCI6MTc1MzI5MTI0MX0.xpWqRIGQ7rorok9U6Fys4iy__1GWBl6lycgjv6twcvY",
  id: 1,
  username: "emre",
  email: "emre@wit.com",
  firstName: "Emre",
  lastName: "Şahiner",
  gender: "female",
  image: "https://dummyjson.com/icon/emilys/128",
};

describe("App", () => {
  it("renders the UserPanel component", async () => {
    //Arrange
    localStorage.setItem("user", JSON.stringify(usersMock));
    render(
      <Wrapper>
        <UserPanel />
      </Wrapper>
    );

    screen.debug();
  });
});

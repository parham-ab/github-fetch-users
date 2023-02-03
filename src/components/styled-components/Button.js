import styled from "styled-components";

export const MyBtn = styled("div")(
  ({
    color,
    borderRadius,
    backgroundColor,
    variant,
    type,
    uppercase,
    size = 100,
    autoMargin,
  }) => ({
    color:
      type === "primary"
        ? "#fff"
        : type === "danger"
        ? "#362472"
        : variant === "outlined"
        ? "#377aa9"
        : "#fff",
    cursor: "pointer",
    borderRadius:
      variant === "rounded" ? 50 : variant === "outlined" ? "90px" : 4,
    backgroundColor:
      type === "primary"
        ? "#00415a"
        : type === "danger"
        ? "#ffb7ba"
        : variant === "outlined"
        ? "inherit"
        : "#9f9f9f",
    padding: 7,
    textTransform: uppercase && "uppercase",
    textAlign: "center",
    width: variant === "outlined" ? "fit-content" : `${size}%`,
    margin: autoMargin && "auto",
    border: variant === "outlined" && "solid 1px #377aa9",
    lineHeight: variant === "outlined" && "7px",
    transition: "all .5s",
    display: variant === "outlined" && "block",
    "&:hover": {
      color: variant === "outlined" && "#fff",
      backgroundColor: variant === "outlined" && "#00415a",
      border: variant === "outlined" && "solid 1px #fff",
      transition: variant === "outlined" && "all .5s",
      cursor: "pointer",
    },
  })
);
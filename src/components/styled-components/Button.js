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
    color: type === "primary" ? "#fff" : type === "danger" ? "#362472" : "#fff",
    cursor: "pointer",
    borderRadius: variant === "rounded" ? 50 : 4,
    backgroundColor:
      type === "primary"
        ? "#00415a"
        : type === "danger"
        ? "#ffb7ba"
        : "#9f9f9f",
    padding: 7,
    textTransform: uppercase && "uppercase",
    textAlign: "center",
    width: `${size}%`,
    margin: autoMargin && "auto",
  })
);

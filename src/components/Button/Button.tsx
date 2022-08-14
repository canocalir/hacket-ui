import React from "react";
import "./Button.css";

export interface ButtonProps {
  color: string;
  label: string;
  variant: string;
}

const Button = (props: ButtonProps) => {
  return <button className={
    props.variant === "primary" ? "primary-button" : "secondary-button" 
  } style={{backgroundColor: props.color}}>{props.label}</button>;
};

export default Button;
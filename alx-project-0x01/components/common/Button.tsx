import React from "react";
interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-md" | "rounded-full" | "square";
  styles?: string; // default empty string
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles = "", // default empty string
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`bg-blue-600 text-white font-semibold ${sizeClasses[size]} ${shape} ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;

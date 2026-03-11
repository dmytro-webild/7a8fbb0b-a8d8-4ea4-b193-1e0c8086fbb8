import React from "react";

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fill?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = "",  fontSize = 24,
  fontWeight = "bold",  fill = "currentColor"}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize * 0.6} ${fontSize * 1.2}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fill}
        fontFamily="inherit"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;

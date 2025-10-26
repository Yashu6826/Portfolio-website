import { a, useSpring } from "@react-spring/web";
import React, { useEffect } from "react";

const initialStroke = (stroke: number) => ({
  strokeDasharray: stroke,
  strokeDashoffset: stroke,
});
const endStroke = () => ({
  strokeDashoffset: 0,
});

const Logo = () => {
  const [ySpring, api1] = useSpring(() => ({
    ...initialStroke(140)
  }));

  const [vSpring, api2] = useSpring(() => ({
    ...initialStroke(120),
  }));

  const [dotSpring, api3] = useSpring(() => ({
    y: -110,
    config: {
      tension: 200,
      friction: 15
    },
  }));

  useEffect(() => {
    setTimeout(() => {api1.start(endStroke())}, 300);
    setTimeout(() => {api2.start(endStroke())}, 600);
    setTimeout(() => {api3.start({ y: 0 })}, 900);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="169"
      height="95"
      viewBox="0 0 169 95"
      fill="none"
    >
      <g id="logo-img">
        <a.g id="periodGroup" style={dotSpring}>
          <circle id="period" cx="155.982" cy="72" r="12" fill="#0070F3" />
          <circle
            id="period-shadow"
            cx="155.982"
            cy="75"
            r="8"
            fill="#0050C3"
          />
        </a.g>
        <g id="initial">
          {/* Y Letter */}
          <mask
            id="mask_y"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="5"
            y="10"
            width="55"
            height="75"
          >
            <a.path
              id="y-letter"
              style={ySpring}
              d="M15 15L32.5 45L32.5 80M32.5 45L50 15"
              stroke="black"
              strokeWidth={18}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>
          <g mask="url(#mask_y)">
            <path
              d="M15 15L32.5 45L32.5 80M32.5 45L50 15"
              stroke="#0070F3"
              strokeWidth={18}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* V Letter */}
          <mask
            id="mask_v"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="75"
            y="15"
            width="55"
            height="70"
          >
            <a.path
              id="v-letter"
              style={vSpring}
              d="M80 20L102.5 80L125 20"
              stroke="black"
              strokeWidth={18}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>
          <g mask="url(#mask_v)">
            <path
              d="M80 20L102.5 80L125 20"
              stroke="#0070F3"
              strokeWidth={18}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
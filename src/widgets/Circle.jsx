function Circle({ width, height, className }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_0_23)" />
      <defs>
        <linearGradient
          id="paint0_linear_0_23"
          x1="0"
          y1="0"
          x2="0"
          y2="128"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="0.774017" stopColor="#EAEAEA" />
          <stop offset="1" stopColor="#DFDFDF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Circle

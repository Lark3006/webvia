function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="webviaLogoGrad" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2777E8" />
          <stop offset="1" stopColor="#20C7C7" />
        </linearGradient>
      </defs>
      <path
        d="M2 6 L9 24 L15 11 L21 24 L28 6"
        stroke="url(#webviaLogoGrad)"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default Logo
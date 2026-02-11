export const size = {
  width: 64,
  height: 64
};

export const contentType = 'image/svg+xml';

export default function Icon() {
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="16" fill="#0B0D12" />
      <path
        d="M22 18H30C36.6274 18 42 23.3726 42 30C42 36.6274 36.6274 42 30 42H22V18Z"
        fill="#E7D7B0"
      />
      <path
        d="M30 24H26V36H30C33.3137 36 36 33.3137 36 30C36 26.6863 33.3137 24 30 24Z"
        fill="#0B0D12"
      />
    </svg>
  );
}

type Props = {
  width?: string | number;
  height?: string | number;
};

export function Logo({ width=200, height=100 }: Props) {
  return (
    <div
      style={{ width, height }}
      className="bg-logo bg-no-repeat bg-center bg-contain"
    />
  );
}

import QRCode from "react-qr-code";

interface Props {
  value: string;
}

export function ViewToken({ value }: Props) {
  return (
    <div className="p-4 bg-white rounded-xs w-fit">
      <QRCode value={value} />
    </div>
  );
}

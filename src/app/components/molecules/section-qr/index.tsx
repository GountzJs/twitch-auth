import { Clipboard } from "@/components/atoms/clipboard";
import { ViewToken } from "@/components/atoms/view-token/view-token";

interface Props {
  token: string;
}

export function SectionQR({ token }: Props) {
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <ViewToken value={token} />
      <Clipboard label={"Copiar token"} value={token} />
    </div>
  );
}

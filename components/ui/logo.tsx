import Link from "next/link";
import Image from "next/image";
const logoUrl = "/images/Value-Data-Logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Value Data">
      <Image src={logoUrl} alt="Value Data Logo" width={32} height={32} />
    </Link>
  );
}

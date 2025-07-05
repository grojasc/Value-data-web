import Link from "next/link";
import Image from "next/image";
const logoUrl =
  "https://raw.githubusercontent.com/grojasc/Value-data-web/master/Value%20Data%20Logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Value Data">
      <Image src={logoUrl} alt="Value Data Logo" width={32} height={32} />
    </Link>
  );
}

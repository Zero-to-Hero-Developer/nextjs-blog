import Link from "next/link";

export default () => (
  <div>
    <div>
      <Link href="/" passHref>
        <a>Ana Sayfa</a>
      </Link>
    </div>
    <div>
      <Link href="/about" passHref>
        <a>Hakkımızda</a>
      </Link>
    </div>
  </div>
);

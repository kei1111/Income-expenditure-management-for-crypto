import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="min-h-full flex flex-wrap gap-8 items-center justify-center bg-black text-white px-4 py-20">
    <Link href="/terms">利用規約</Link>
    <Link href="/privacy_policy">プライバシーポリシー</Link>
  </footer>
);

export default Footer;

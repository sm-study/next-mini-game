import Image from "next/image";

type Monster = {
  id: number;
  name: string;
};

export default function Home() {
  return (
    <main>
      <div>
        <Image src="/images/monster-1.svg" unoptimized width={80} height={80} alt="" />
        <h2>がリッドチュー</h2>
        <p>HP: 100</p>
      </div>
    </main>
  );
}

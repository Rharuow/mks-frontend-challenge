import { ProductList } from "@/components/domain/home/Product/List";

export default function Home() {
  return (
    <main className="flex grow flex-col p-16 py-4">
      <ProductList />
    </main>
  );
}

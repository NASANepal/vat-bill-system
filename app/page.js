import { Button } from "@/components/ui/Button";
import { Layout } from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">VAT Bill System</h1>
      <Button onClick={() => alert("Clicked!")}>Create Invoice</Button>
    </Layout>
  );
}

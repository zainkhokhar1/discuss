
import { TopicCreateForm } from "@/components/ui/topics/TopicCreateDialog";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-semibold">Home page</h1>
      </div>
      <TopicCreateForm />
    </div>
  );
}

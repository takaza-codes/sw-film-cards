import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center gap-8 text-stone-700">
      <Skeleton className="h-150 w-3xl self-center" />
    </main>
  );
}

import CardSkeleton from "@/components/CardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center gap-6">
      <Skeleton className="mt-4 h-[100px] w-2/5 rounded-lg self-center" />
      <div className="ml-auto mr-auto flex justify-center flex-wrap gap-8 xs:flex-col">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}

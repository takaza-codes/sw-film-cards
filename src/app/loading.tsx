import CardSkeleton from "@/components/CardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center gap-6">
      <Skeleton className="mt-4 h-[100px] w-2/5 rounded-lg self-center" />
      <div className="ml-auto mr-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}

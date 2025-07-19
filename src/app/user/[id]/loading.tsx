import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center gap-8 text-stone-700">
      <Skeleton className="h-8 w-[120px] self-center" />
      <div className="flex flex-col content-center gap-2 text-lg text-stone-700">
        <div>
          <Skeleton className="h-6 w-[100px]" />
        </div>
        <div>
          <Skeleton className="h-6 w-[200px]" />
        </div>
        <div>
          <Skeleton className="h-6 w-[250px]" />
        </div>
        <div>
          <Skeleton className="h-6 w-[200px]" />
        </div>
        <div>
          <Skeleton className="h-6 w-[200px]" />
        </div>
        <div>
          <Skeleton className="h-6 w-[200px]" />
        </div>
      </div>
      <div className="mt-8 self-center underline text-pink-600">
        <Skeleton className="h-6 w-[150px]" />
      </div>
    </main>
  );
}

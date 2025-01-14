import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="flex flex-col space-y-3 mb-10" key={index}>
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-[#dbcece]" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-[#dbcece]" />
            <Skeleton className="h-4 w-[200px] bg-[#dbcece]" />
          </div>
        </div>
      ))}
    </>
  );
}

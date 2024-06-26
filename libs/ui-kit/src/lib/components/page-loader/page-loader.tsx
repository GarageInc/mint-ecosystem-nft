import { SpinnerLoader } from '../spinner-loader/spinner-loader';

export function PageLoading({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-[300px] w-full items-center justify-center gap-x-[12px] ${className}`}
    >
      <SpinnerLoader />
      loading...
    </div>
  );
}

export function BlockLoading() {
  return (
    <div className="flex w-full flex-auto items-center justify-center">
      <div className="ml-[12px]">loading...</div>
    </div>
  );
}

import QueryInitializeProvider from "@/src/common/providers/QueryInitializeProvider/QueryInitializeProvider";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryInitializeProvider>{children}</QueryInitializeProvider>;
}

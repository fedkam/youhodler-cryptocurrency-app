import { mainRoute } from "@/src/routes/routes";
import { usePathname } from "next/navigation";

type Path = {
  label: string;
  href: string;
};

export const useBreadcrumbsPaths = (): Path[] => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  const rootPath: Path = {
    href: mainRoute(),
    label: "Home",
  };

  return [
    rootPath,
    ...paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      href: `/${paths.slice(0, index + 1).join("/")}`,
    })),
  ];
};

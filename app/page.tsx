import Breadcrumb, { BreadCrumbItem } from "@/app/components/Breadcrumb/Breadcrumb";

const breadcrumbItems: BreadCrumbItem[] = [{
  title: '主页',
  path: '/',
}];

export default function Home() {
  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
        <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}

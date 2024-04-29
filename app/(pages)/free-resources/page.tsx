import Breadcrumb,{BreadCrumbItem} from "@/app/components/Breadcrumb/Breadcrumb";

const breadcrumbItems : BreadCrumbItem[] = [{
    title: '主页',
    path: '/',
}, {
    title: '关于我们',
    path: '/about-us',
}, {
    title: '免费资源',
    path: '/free-resources',
}];

export default function FreeResources() {
  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
        <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}

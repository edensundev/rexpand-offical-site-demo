import Link from "next/link";

export default function NotFound() {
    return (
        <div className={`h-screen flex flex-col items-center justify-center`}>
            <div className="flex flex-col pt-24">
                <p className="text-2xl mb-8">404 找不到页面!</p>
                <Link href="/">&lt; 返回首页</Link>
            </div>
        </div>
    );
}
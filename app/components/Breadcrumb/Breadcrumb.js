import Link from 'next/link';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({
    items = [], // ['item1','item2']
}) {
    if (!items) {
        return null;
    }
    return <nav class="text-sm" aria-label="Breadcrumb">
        <ol class="inline-flex">
            {items?.map((item, index)=>{
                if (index < items.length - 1) {
                    // 不是最后一个
                    return <li class={`flex items-center ${styles.separator}`}>
                        <Link href={item.path} class="text-gray-500 hover:text-gray-700">{item.title}</Link>
                    </li>;
                } else {
                    // 最后一个
                    return <span class="text-gray-800">{item.title}</span>;
                }
            })}
            
           
        </ol>
    </nav>;
}
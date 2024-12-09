
import PackageCotentTitle from './PackageContentTitle';
import PackageContentItem from './PackageContentItem';

export default function PackageCotent ({title, list}) {


    return (
            <div className="package-content-border">
                    <PackageCotentTitle title={title} />
                <ul>
                    {list && list.map(item =>     /* 배열객체 체크 */
                        <li>
                            <PackageContentItem
                                src={item.src}
                                alt={item.alt}
                                text={item.text}
                                price={item.price}
                                        />
                                    </li>
                            )}
                </ul>
                </div>
        );
}
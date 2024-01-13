import SkeletonItem from './SkeletonItem';

const Skeleton = () => {
    const x =[1,1,1,1,1,1,1,1,1,1,1]
    return (
        <div>
            {x.map((i) => (
                <SkeletonItem key={i}/>
            ))}

        </div>
    )
}

export default Skeleton

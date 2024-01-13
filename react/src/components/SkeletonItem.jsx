function SkeletonItem() {
    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: '200px',
                border: '3px solid #ccc',
                margin: '10px 0'
            }}>

                <h2 style={{height: '30px', width: '80%', background: 'Gray',}}></h2>
                <h4 style={{height: '30px', width: '80%', background: 'Gray',}}></h4>
                <p style={{height: '100%', width: '80%', background: 'Gray',}}></p>
            </div>
        </div>
    )
}

export default SkeletonItem
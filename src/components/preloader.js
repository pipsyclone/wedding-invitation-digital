const Preloader = (props) => {
    return (
        <div className={"preloader" + props.classCustom}>
            <div className="preloader-content">
                <div className={"preloader-icon" + props.classCustom}>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Preloader;
const TopBar = (props) => {
    const MenuLists = (classItem, classLink) => {
        return (
            <>
                <li className={classItem}>
                    <a href="#beranda" className={classLink}>Beranda</a>
                </li>
                <li className={classItem}>
                    <a href="#mempelai" className={classLink}>Mempelai</a>
                </li>
                <li className={classItem}>
                    <a href="#alamat" className={classLink}>Alamat</a>
                </li>
                <li className={classItem}>
                    <a href="#ucapanundangan" className={classLink}>Ucapan Undangan</a>
                </li>
            </>
        )
    }

    return (
        <nav className={"topbar " + props.classCustom}>
            <div className="topbar-wrapper">
                <a href="javascript:void(0)" className="topbar-brand me-auto">
                    Adam & Hawa
                </a>

                {/* Topbar Menu Mobile */}
                <div className="width-mobile dropdown">
                    <button type="button" className="btn btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-bars fs-5"></i>
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end animate__animated animate__fadeIn">
                        { MenuLists('', 'dropdown-item') }
                    </ul>
                </div>

                {/* Topbar Menu Dekstop */}
                <ul className="topbar-menu width-dekstop">
                    { MenuLists('topbar-item', 'topbar-link') }
                </ul>
            </div>
        </nav>
    )
}

export default TopBar;
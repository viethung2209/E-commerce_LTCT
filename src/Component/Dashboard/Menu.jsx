import React, {useState} from 'react';

function Menu(props) {

    const [isShow, setIsShow] = useState(false);
    const [isShowDresses, setIsShowDresses] = useState(false);

    const onClickShowMenu = () => {
        setIsShow(!isShow);
    }

    return (
        <>
            <div className="col-lg-3 d-none d-lg-block">
                <div className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                   data-toggle="collapse"
                   href="src/Component/Dashboard/Navbar#navbar-vertical"
                   style={{height: "65px", marginTop: "-1px", padding: "0 30px"}}
                   onClick={onClickShowMenu}
                >
                    <h6 className="m-0">Categories</h6>
                    {
                        isShow? 
                        <i className="fa fa-angle-up text-dark"></i>
                        : 
                        <i className="fa fa-angle-down text-dark"></i>
                    }
                </div>
                {
                    isShow &&
                    <>
                        <nav
                            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                            id="navbar-vertical"
                        >
                            <div className="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                                <div className="nav-item dropdown">
                                    <div className="nav-link" data-toggle="dropdown" onClick={() => setIsShowDresses(!isShowDresses)}>
                                        Dresses 
                                    {
                                        isShowDresses?
                                        <i className="fa fa-angle-up float-right mt-1"></i>
                                        : 
                                        <i className="fa fa-angle-down float-right mt-1"></i>
                                    }
                                        </div>
                                    {
                                        isShowDresses && <>
                                            <div
                                                className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                                <a href="src/Component/Dashboard/Navbar" className="dropdown-item">Men's Dresses</a>
                                                <a href="src/Component/Dashboard/Navbar" className="dropdown-item">Women's Dresses</a>
                                                <a href="src/Component/Dashboard/Navbar" className="dropdown-item">Baby's Dresses</a>
                                            </div>
                                        </>
                                    }
                                </div>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Shirts</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Jeans</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Swimwear</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Sleepwear</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Sportswear</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Jumpsuits</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Blazers</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Jackets</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Shoes</a>
                            </div>
                        </nav>
                    </>
                }
            </div>
        </>
    );
}

export default Menu;
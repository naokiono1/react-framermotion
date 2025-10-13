import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidedar*/}
            <div className="wrapper">
                <span>Naoki</span>
                <div className="social">
                    <a href="#"><img src="/icons8-facebook-50.svg" alt="Facebook"/></a>
                    <a href="#"><img src="/icons8-instagram-50.svg" alt=""/></a>
                    <a href="#"><img src="/icons8-whatsapp-50.svg" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
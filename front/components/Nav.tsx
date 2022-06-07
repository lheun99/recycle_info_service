import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <img src="title.earth.png"></img>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className={navStyles.navList}>
                <li>
                    <Link href="/recycling">분리배출 하러가기</Link>
                </li>
                <li>
                    <Link href="/">우리동네 대형폐기물 신고하기</Link>
                </li>
                <li>
                    <Link href="/">중고마켓</Link>
                </li>
                <li>
                    <Link href="/myPage">마이페이지</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

import Link from "next/link";
import Image from "next/image";
import titleEarth from "../public/title.earth.png";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/" passHref>
                        <a>
                            <Image src={titleEarth} alt="title image" />
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className={navStyles.navList}>
                <li>
                    <Link href="/recycling/aiSearcher" passHref>
                        <a>분리배출 하러가기</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>우리동네 대형폐기물 신고하기</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>중고마켓</a>
                    </Link>
                </li>
                <li>
                    <Link href="/myPage" passHref>
                        <a>마이페이지</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login" passHref>
                        <a>Login</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

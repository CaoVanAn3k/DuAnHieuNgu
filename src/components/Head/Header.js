import className from 'classnames';
import style from './head.module.scss';

const cx = className.bind(style);
function Header() {
    return <div className={cx('main')}>header</div>;
}

export default Header;

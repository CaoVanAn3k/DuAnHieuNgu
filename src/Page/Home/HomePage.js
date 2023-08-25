import classNames from 'classnames';
import style from './HomePage.module.scss';
const cx = classNames.bind(style);

function HomePage() {
    return <div className={cx('home-page')}>homepage</div>;
}

export default HomePage;

import classNames from 'classnames';
import style from './ShopPage.module.scss';
const cx = classNames.bind(style);

function ShopPage() {
    return (
        <div className={cx('shop-page')}>
            <p>shop</p>
        </div>
    );
}

export default ShopPage;

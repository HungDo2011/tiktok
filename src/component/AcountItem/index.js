import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/component/Image';
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1652349600&x-signature=EPF%2BXqEfNmVcA1GUZCfd%2Bl%2F2Sfs%3D"
                alt="User"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyen.vana</span>
            </div>
        </div>
    );
}

export default AcountItem;

import Style from './Header.module.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { cyan } from '@material-ui/core/colors';

const Header = ({username = null, cart}) => {
  return (
    <div className={Style.header}>
      <div>
        <a href="/">Meu Header</a>
      </div>
      <div className={Style.info}>
        { username ? <span>Hello {username}</span> : null }
        <ShoppingBasketIcon style={{ color: cyan[300] }}/>
        <span>{cart}</span>
      </div>
    </div>
  )
}

export default Header;
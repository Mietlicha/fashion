import { MENU } from '../../utils/data';
import { SET_MOBILE_MENU_OPEN } from '../../store/actions/setMobileMenuOpen';

const initialState = {
  setMobileMenuOpen: false,
  navContent: MENU,
};

const mobileMenuOpen = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_MENU_OPEN:
      return {
        ...state,
        mobileMenuOpen: action.content,
      };
    default:
      return state;
  }
};

export default mobileMenuOpen;

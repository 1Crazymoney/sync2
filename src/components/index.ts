import StackedRouterView from './StackedRouterView.vue'
import AddressCard from './AddressCard.vue'
import Tokens from './Tokens.vue'
import ConnexObject from './ConnexObject'
import ConnexContinuous from './ConnexContinuous'
import PinCode from './PinCode.vue'
import ConfirmedPinCodeInput from './ConfirmedPinCodeInput.vue'
import SlideContainer from './SlideContainer.vue'
import Drawer from './Drawer.vue'
import WalletItem from './WalletItem.vue'
import Intersecting from './Intersecting.vue'
import ScrollDivider from './ScrollDivider.vue'
import DigitKeypad from './DigitKeypad.vue'

const components: { [name: string]: Vue.VueConstructor } = {
    StackedRouterView,
    AddressCard,
    Tokens,
    ConnexObject,
    ConnexContinuous,
    PinCode,
    ConfirmedPinCodeInput,
    SlideContainer,
    Drawer,
    WalletItem,
    Intersecting,
    ScrollDivider,
    DigitKeypad
}

export default components

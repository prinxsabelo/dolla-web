import Svg1 from '../../images/svg-1.svg';
import Svg2 from '../../images/svg-2.svg';
import Svg3 from '../../images/svg-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description: `Get access to our exclusive app that allows you to send unlimited transactions
                    without getting charged any fees.`,
    buttonLabel: 'Get started',
    imgStart: false,
    img: Svg1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}
export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Login to your account at anytime',
    description: `We have covered no matter where you're located. All you need is an internal connection
                    and a phone or computer`,
    buttonLabel: 'Learn More',
    imgStart: true,
    img: Svg2,
    alt: 'Piggy',
    dark: false,
    primary: false,
    darkText: true
}
export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headLine: 'Creating an account is extremely easy',
    description: `Get everything set up in order in minutes. All you need is to add your informatiin and you're ready to go.`,
    buttonLabel: 'Start Now',
    imgStart: false,
    img: Svg3,
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true
}
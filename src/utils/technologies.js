import {
    FaPhp,
    FaJs,
    FaHtml5,
    FaCss3,
    FaJava,
    FaPython,
    FaReact,
    FaAngular,
    FaAndroid,
    FaSwift,
    FaKot
} from 'react-icons/fa';
import {SiKotlin, SiFlutter, SiDart, SiIos, SiAndroid, SiDocker, SiAmazon} from 'react-icons/si'

const size = 50;
export const technologies = {
    php: <FaPhp size={size}/>,
    js: <FaJs size={size}/>,
    html: <FaHtml5 size={size}/>,
    css: <FaCss3 size={size}/>,
    python: <FaPython size={size}/>,
    java: <FaJava size={size}/>,
    kotlin: <SiKotlin size={size}/>,
    dart: <SiDart size={size}/>,
    swift: <FaSwift size={size}/>,
    flutter: <SiFlutter size={size}/>,
    android: <SiAndroid size={size}/>,
    ios: <SiIos size={size}/>,
    react: <FaReact size={size}/>,
    angular: <FaAngular size={size}/>,
    docker: <SiDocker size={size}/>,
    aws: <SiAmazon size={size}/>,

}
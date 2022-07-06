/** @jsx jsx */
import {jsx, Box, Text, Container} from 'theme-ui';
import {Link} from 'components/link';
import Logo from 'components/logo';
import {FaFacebook, FaTwitter, FaEnvelope, FaLinkedin} from 'react-icons/fa';
import {Constant} from "../../config/Constant";
import OpenLink from "../open-link";

export default function Footer() {
    return (
        <footer
            sx={{
                variant: 'layout.footer',
                backgroundColor: '#fff',
            }}
        >
            <Container
                sx={{
                    variant: 'layout.toolbar',
                    justifyContent: ['center', null, null, 'space-between'],
                    flexDirection: ['column', null, null, null, 'row'],
                    paddingTop: [30, 40],
                    paddingBottom: [30, 65],
                }}
            >
                <Box sx={styles.left}>
                    <Logo/>
                    <Text as="p">
                        &copy; {new Date().getFullYear()} All right reserved
                    </Text>
                </Box>
                <Box sx={styles.right}>
                    <OpenLink path={Constant.linkedin}><FaLinkedin size={25}/></OpenLink>
                    <OpenLink path={Constant.twitter}><FaTwitter size={25}/></OpenLink>
                    <OpenLink path={Constant.mail}><FaEnvelope size={25}/></OpenLink>
                    <OpenLink path={Constant.facebook}><FaFacebook size={25}/></OpenLink>
                </Box>
            </Container>
        </footer>
    );
}

const styles = {
    left: {
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        alignItems: 'center',
        p: {
            fontSize: [0, 1],
            color: 'black',
            opacity: 0.6,
            mt: ['10px', null, '0'],
            ml: '10px'
        },
    },
    right: {
        display: ['none', null, null, null, 'flex'],
        fontSize: 2,
        alignItems: 'center',
        color: 'black',
        a: {
            transition: '500ms',
            '&:hover': {
                color: 'primary',
            },
        },
        'a+a': {
            marginLeft: '30px',
        },
    },
};

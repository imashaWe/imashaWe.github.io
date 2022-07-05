/** @jsx jsx */
import {jsx, Avatar, Heading} from 'theme-ui';
import {Link} from 'components/link';
import me from 'assets/me.png';

export default function Logo() {
    return (
        <Link
            path="/"
            sx={{
                variant: 'links.logo',
            }}
        >
            <Avatar src={me}/>
        </Link>
    );
}

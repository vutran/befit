import { h } from 'preact';
import { toTime } from '../utils';

interface Props {
    date: Date;
};

const styles = {
    base: {
        color: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 150,
        height: 200,
        left: '50%',
        lineHeight: '150px',
        marginLeft: -250,
        marginTop: -100,
        position: 'fixed',
        textAlign: 'center',
        textShadow: '2px 2px 20px #000',
        top: '50%',
        width: 500,
    },
};

export default function(props: Props): JSX.Element {
    return (
        <div style={styles.base}>{toTime(props.date)}</div>
    );
}

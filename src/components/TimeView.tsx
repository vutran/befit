import { h } from 'preact';

interface Props {
    date: Date;
};

const styles = {
    base: {
        color: '#fff',
        fontSize: 80,
        fontFamily: 'Helvetica',
        height: 100,
        left: '50%',
        lineHeight: '80px',
        marginLeft: -200,
        marginTop: -50,
        position: 'fixed',
        textAlign: 'center',
        top: '50%',
        width: 400,
    },
};

export default function(props: Props): JSX.Element {
    const timeStr = props.date.getHours()
        + ':' + props.date.getMinutes();
    return (
        <div style={styles.base}>{timeStr}</div>
    );
}

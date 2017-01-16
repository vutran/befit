import { h, Component } from 'preact';
import { decrement, increment } from './utils';

interface Props {
};

interface State {
    ping: number;
};

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.update = this.update.bind(this);
        this.handleClickDecrement = this.handleClickDecrement.bind(this);
        this.state = {
            ping: 0,
        };
    }

    update() {
        this.setState((prevState: State): State =>
            ({ ping: increment(prevState.ping) })
        );
    }

    handleClickDecrement() {
        this.setState((prevState: State): State =>
            ({ ping: decrement(prevState.ping) })
        );
    }

    componentDidMount() {
        setInterval(() => this.update(), 1000);
    }

    render() {
        return (
            <div>
                <h1>Ping</h1>
                <div>{this.state.ping}</div>
                <button type="button" onClick={this.handleClickDecrement}>Decrement</button>
            </div>
        );
    }
}

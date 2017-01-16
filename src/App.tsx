import { h, Component } from 'preact';
import TimeView from './components/TimeView';

interface Props {
};

interface State {
    currentTime: Date;
};

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            currentTime: new Date(),
        };
    }

    update() {
        this.setState((prevState: State): State =>
            ({ currentTime: new Date() }),
        );
    }

    componentDidMount() {
        setInterval(() => this.update(), 1000);
    }

    render() {
        return (
            <div>
                <TimeView date={this.state.currentTime} />
            </div>
        );
    }
}

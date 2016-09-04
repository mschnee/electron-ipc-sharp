import * as React from 'react';

interface AppProps extends React.Props<App> {

}

export class App extends React.Component<AppProps, void> {
    render() {
        return (
            <div>Hi there</div>
        );
    }
}
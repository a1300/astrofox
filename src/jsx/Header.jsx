var Header = React.createClass({
    componentDidMount: function() {
        if (AstroFox.Browser) {
            this.window = AstroFox.Browser.Window.get();
        }
        this.maximized = false;
    },

    handleMinimize: function(e) {
        e.preventDefault();
        e.stopPropagation();

        this.window.minimize();
    },

    handleMaximize: function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (this.maximized) {
            this.window.unmaximize();
        }
        else {
            this.window.maximize();
        }

        this.maximized = !this.maximized;
    },

    handleClose: function(e) {
        e.preventDefault();
        e.stopPropagation();

        this.window.close(true);
    },

    handleConsole: function(e) {
        e.preventDefault();
        e.stopPropagation();

        this.window.showDevTools();
    },

    handleReload: function(e) {
        e.preventDefault();
        e.stopPropagation();

        this.window.reloadDev();
    },


    render: function() {
        return (
            <div id="header">
                <div id="title">ASTROFOX</div>
                <div id="control-box">
                    <ul className="box-group">
                        <li className="box icon-code" onClick={this.handleConsole}></li>
                        <li className="box icon-cw" onClick={this.handleReload}></li>
                        <li className="box icon-minus" onClick={this.handleMinimize}></li>
                        <li className="box icon-plus" onClick={this.handleMaximize}></li>
                        <li className="box icon-cancel" onClick={this.handleClose}></li>
                    </ul>
                </div>
            </div>
        );
    }
});
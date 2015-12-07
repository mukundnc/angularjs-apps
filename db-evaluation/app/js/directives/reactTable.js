'use strict';

angular.module('myApp').
    factory('ReactTableComponent', [ReactTableComponent]).
    directive('reacttable', ['reactDirective', reacttable])

function reacttable(reactDirective) {
    return reactDirective('ReactTableComponent');    
}

function ReactTableComponent() {

    return React.createClass({
        propTypes: {
            table: React.PropTypes.object.isRequired
        },
        handleClick : function(ev){
            alert(ev);
        },
        render: function() {
            
            return (
                React.DOM.table({
                        className: "MyClassName"
                    },
                    React.DOM.thead(null,
                        React.DOM.tr(null,
                            this.props.table.titles.map(function(title) {
                                return React.DOM.th({
                                    key: title
                                }, title);
                            })
                        )
                    ),
                    React.DOM.tbody(null,
                        this.props.table.rows.map(function(row, i) {
                            return (
                                React.DOM.tr({
                                        key: i,
                                        onClick: this.handleClick.bind(this, i)
                                    },
                                    this.props.table.titles.map(function(key, j) {
                                        return React.DOM.td({
                                            key: j
                                        }, JSON.stringify(row[key]));
                                    })
                                )
                            );
                        }, this)
                    )
                )
            );
        }
    });
}
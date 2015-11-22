'use strict';

angular.module('myApp').
    factory('ReactComponent', ReactComponent).
    directive('reactcontainer', ['reactDirective', reactcontainer])

function reactcontainer(reactDirective) {
    return reactDirective('ReactComponent');    
}

function ReactComponent() {
    return React.createClass({
    	propTypes: {
			name: React.PropTypes.string.isRequired
		},
        render:function(){
            return React.DOM.span(null, 
            	this.props.name
            );
        }
    });
}
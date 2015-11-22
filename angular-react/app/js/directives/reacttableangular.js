'use strict';

angular.module('myApp').
    directive('reacttableangular', [reacttableangular])

function reacttableangular() {
    return {
    	restrict: 'E',
	    scope: {
	      table: '=table'
	    },
	    template: '<table>\
	    	<thead>\
	    		<tr>\
	    			<th ng-repeat="title in table.titles">{{title}}</td>\
	    		</tr>\
	    	</th>\
	    	<tbody>\
	    		<tr ng-repeat="row in table.rows">\
	    			<td ng-repeat="col in row">{{col}}:{{table.index}}</td>\
	    		</tr>\
	    	</tbody>\
	    </table'
    };    
}
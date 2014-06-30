/**
 * Wrap elements in a set number of container elements with specific classes.
 *
 * Example Usage: wrap every 3 <li> elements within a <div class="col"></div>
 *  jQuery('li').dividize(3, 'div', 'col');
 *
 * @param int columnNumber Number of columns.
 * @param string wrapperElement The wrapper container (e.g. div, span).
 * @param string className Class to add to the wrapper containers.
 *
 * @return jQuery
 */
(function($){
  $.fn.dividize = function( divNumber, wrapperElement, className ) {
    var length = this.length;

    // Calculate the number of elements per division - round up to ensure extra elements 
    var count = Math.ceil( length / divNumber, 10 );

    // Slice and wrap elements
    for ( var i = 0; i < length ; i += count ) {
      this.slice( i, i + count ).wrapAll( '<' + wrapperElement + ' class="' + className + '"/>' );
    }
    
    return this;
  }; 
})(jQuery);

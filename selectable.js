/* Wire up all checkboxes & radio buttons that can be checked by clicking their container.
 * A class of "selected" is automatically added to the container when the field is checked.
 *
 * To enable this behaviour:
 *   - Include jQuery 1.7+ and this script in your project.
 *   - Add a class of "selectable" to the container element (such as a row in a table).
 *   - Add a class of "select" to the checkbox or radio button within the container element.
 *
 * Example:
 *   <section class="selectable">
 *      <p>Click anywhere in this section to toggle the checkbox</p>
 *      <input type="checkbox" class="select" value="ooh-magic" />
 *   </section>
 */

(function ($,document) {
  
  $(document)

    // When a "selectable" element is clicked, toggle its child checkbox or radio button:
    // Trigger click event on child checkbox or radio field, which in turn triggers change event: 
    // (Ignore clicks on links & form elements)
    .on( 'click', '.selectable', function (e) {

      if ( !$(e.target).closest('A,INPUT,BUTTON').length ){

        $( 'INPUT.select', this ).trigger('click');

      }

    })

    // When a checkbox or radio button within a "selectable" element is clicked, toggle the container's "selected" class:
    .on( 'change', 'INPUT:radio.select, INPUT:checkbox.select', function (e) {

      // For radio buttons we must find all the radios in the same group:
      var field  = $(this),
          name   = field.attr('name'),
          fields = name && field.is(':radio') ? $("INPUT:radio[name='" + name + "']") : field;

      // Toggle the "selected" class on the container of the checkbox or radios:
      fields.each( function () {
        var field  = $(this);
        field.closest('.selectable').toggleClass( 'selected', field.prop('checked') );
      });
    
    })
  
  ;
  
})(jQuery,document);
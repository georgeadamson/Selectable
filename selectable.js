/*
 * Wire up checkboxes & radio buttons that can be checked and unchecked (toggled) by clicking their container.
 * A class of "selected" is automatically added to the container when the field is checked.
 *
 * To enable this behaviour:
 *   - Include jQuery 1.7+ and this script in your project.
 *   - Add a class of "selectable" to the container element (such as a row in a table).
 *   - Add a class of "select" to the checkbox or radio button within the container element.
 *
 * Special classes provide bonus features!
 *   - Add a class of "selectable-escape" to the "selectable" element to respond to Escape key to deselect it. (Ignores "selectable-only". Only works when a child element has focus).
 *   - Add a class of "selectable-focus"  to the "selectable" element to set focus on its first field when selected.
 *   - Add a class of "selectable-only"   to the "selectable" element to only respond to click to select it.
 *   - Add a class of "deselectable-only" to the "selectable" element to only respond to click to deselect it.
 *
 * Example:
 *   <section class="selectable">
 *      <p>Click anywhere in this section to toggle the checkbox</p>
 *      <input type="checkbox" class="select" value="ooh-magic" />
 *   </section>
 *
 * selectable.js
 * Copyright 2012 George Adamson
 * http://about.me/GeorgeAdamson
 * https://github.com/georgeadamson/Selectable
 *
 */

(function ($,document) {
  
  'use strict';
  
  $(document)

    // When a "selectable" element is clicked, toggle its child checkbox or radio button: (Ignore clicks on links & form elements)
    // Trigger click event on child checkbox or radio field, which in turn triggers change event:
    .on( 'click', '.selectable', function (e) {

      if ( !$(e.target).closest('A,INPUT,BUTTON').length ){

        $(this)
          .filter(':not(.selectable-only,.deselectable-only),' +          // Has no special restrictions or
                  '.selectable-only:has(INPUT.select:not(:checked)),' +   // only allows click to select or
                  '.deselectable-only:has(INPUT.select:checked)')         // only allows click to deselect.
          .find('INPUT.select').click();

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
        field
          .closest('.selectable').toggleClass( 'selected', field.prop('checked') )
          .filter('.selectable-focus').find('INPUT:text:first').focus();  // Set focus on a textbox in the container
      });
    
    })
    
    // Allow user to deselect the "selectable" container by pressing ESCAPE: (Note: This ignores "selectable-only")
    .on( 'keydown', '.selectable-escape.selected', function(e){
      if ( e.keyCode === 27 ){
        $('INPUT.select',this).click();
      }
    })
  
  ;
  
})(jQuery,document);
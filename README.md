Selectable
==========

Wire up checkboxes & radio buttons that can be checked and unchecked (toggled) by clicking their container.
A class of "selected" is automatically added to the container when the field is checked.

To enable this behaviour:
  - Include jQuery 1.7+ and this script in your project.
  - Add a class of "selectable" to the container element (such as a row in a table).
  - Add a class of "select" to the checkbox or radio button within the container element.

Special classes provide bonus features!
  - Add a class of "selectable-escape" to the "selectable" element to respond to Escape key to deselect it. (Ignores "selectable-only". Only works when a child element has focus).
  - Add a class of "selectable-focus"  to the "selectable" element to set focus on its first field when selected.
  - Add a class of "selectable-only"   to the "selectable" element to only respond to click to select it.
  - Add a class of "deselectable-only" to the "selectable" element to only respond to click to deselect it.

Example:
```html
  <section class="selectable">
    <p>Click anywhere in this section to toggle the checkbox</p>
    <input type="checkbox" class="select" value="ooh-magic" />
  </section>
```

selectable.js
Copyright 2012 George Adamson
http://about.me/GeorgeAdamson
https://github.com/georgeadamson/Selectable
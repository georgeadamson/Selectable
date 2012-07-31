Selectable
==========

Auto wire-up checkboxes &amp; radio buttons that can be checked by clicking their container

A class of "selected" is automatically added to the container when the field is checked.

To enable this behaviour:
  - Include jQuery 1.7+ and this script in your project.
  - Add a class of "selectable" to the container element (such as a row in a table).
  - Add a class of "select" to the checkbox or radio button within the container element.

Example:
    <section class="selectable">
      <p>Click anywhere in this section to toggle the checkbox</p>
      <input type="checkbox" class="select" value="ooh-magic" />
    </section>

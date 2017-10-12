# BsAlert
Bootstrap alert web component implemented in Slim.js

## Usage

### Basic alert
This code will show a basic alert with the bootstrap primary color:
```html
<bs-alert>
    <!-- Put the content here -->
</bs-alert>
```

Also, you can change the alert color setting the `bs-alert-type` attribute. For more information see [bootstrap default colors](https://getbootstrap.com/docs/4.0/utilities/colors/).
```html
<bs-alert bs-alert-type="danger">
    <!-- Put the content here -->
</bs-alert>
```

### Dismissible alert
You can create a dismissible alerts including the `bs-alert-dismissible` attribute. It will shows the alert close button. 
```html
<bs-alert bs-alert-dismissible>
    <!-- Put the content here -->
</bs-alert>
```

### Timeout alert
Setting a value (milliseconds) for the `bs-alert-timeout` attribute, the alert will be close automatically.
```html
<bs-alert bs-alert-timeout="3000">
    <!-- Put the content here -->
</bs-alert>
```

## Attributes 

Name | Default | Description
---- | ------- | -----------
bs-alert-type | `primary` | The alert color. See [bootstrap default colors](https://getbootstrap.com/docs/4.0/utilities/colors/).
bs-alert-dismissible | `false` | If the attribute is set, the close button will appear. See [bootstrap documentation](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing).
bs-alert-timeout | `undefined` | The number of milliseconds to wait before close the alert.

## Examples
```html
<bs-alert bs-alert-type="info" bs-alert-timeout="3000">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</bs-alert>
```

```html
<bs-alert bs-alert-type="danger" bs-alert-dismissible>
    <strong>ERROR:</strong> An error occurred while processing your request.
</bs-alert>
```

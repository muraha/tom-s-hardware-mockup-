
VSCode pref:
{
	"workbench.colorTheme": "Monokai",
	"window.menuBarVisibility": "toggle",
	"editor.minimap.enabled": false,
	"editor.wordWrap": "on",
	"workbench.startupEditor": "none",
	"workbench.panel.location": "right",
	"git.confirmSync": false,
	"editor.quickSuggestions": {
		"other": true,
		"comments": false,
		"strings": true
	},
	"editor.mouseWheelZoom": true,
	"window.zoomLevel": -1,
	"emmet.triggerExpansionOnTab": true,
	/*lint+beautify*/
	"editor.formatOnSave": true,
	"editor.tabSize": 2,
	"editor.detectIndentation": false,
	"beautify.config": {
		"indent_char": " ",
		"indent_size": 2,
		"css": {
			"newline_between_rules": true,
			"selector_separator_newline": true,
			"space_around_combinator": true
		},
		"indent_with_tabs": true,
		"end_with_newline": true
	}
}

Beautify pref: .jsbeautifyrc file
{
  "eol: "\n",
  "end_with_newline": true,
  "indent_char": " ",
  "indent_size": 4,
  "css": {
    "indent_size": 2,
	  "newline_between_rules": true,
	  "selector_separator_newline": true,
	  "space_around_combinator": true,
  },
   "indent_with_tabs": true,
  "preserve_newlines": true,
  "HTML":{
	  "extra_liners": ["head", "body","section","main", "/html"],
	  "indent_body_inner_html": true,
	  "indent_handlebars": false,
	  "indent_head_inner_html": true,
	  "indent_inner_html": false,
	  "indent_scripts": "normal",
	  "wrap_attributes": "auto",
	  "wrap_attributes_indent_size": false,
	  "unformatted": ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map","mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small",	"span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "address", "big", "dt", "ins", "small", "strike", "tt", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
	  "content_unformatted": ["pre"],
	  "void_elements": ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "?php", "basefont", "isindex"],
  },
  "brace_style": "collapse",
  "max_preserve_newlines":10,
  "wrap_line_length": 0,
  "JS":{
    "break_chained_methods": false,
    "comma_first": false,
    "e4x":false,
    "indent_level":0,
    "jslint_happy":false,
    "keep_array_indentation": false,
    "keep_function_indentation":false,
    "operator_position":"before-newline",
    "space_after_anon_function":false,
    "space_before_conditional":true,
    "space_in_empty_paren":false,
    "space_in_paren":false,
    "unescape_strings":false,
  }
}

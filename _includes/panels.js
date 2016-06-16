{
  {% for panel in site.panels %}'{{ panel.slug }}': {
    'start': {{ panel.start }},
    'end': {{ panel.end }},
    'data': '{{ panel.data.src | prepend: site.baseurl }}',
    'els':
      {{ panel.els | jsonify }},
    'class': '{{ panel.class }}'
  },{% endfor %}
}

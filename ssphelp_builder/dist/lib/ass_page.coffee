query_field = $('#query')
results_field = $('#results')
query_field.attr 'disabled', true
results_field.text '準備中...'

segmenter = new TinySegmenter()

$.ajax
	url: 'assdb.json'
	dataType: 'json'
	error: (xhr, status, error) ->
		console.warn 'error'
	success: (db) ->
		AllSiteSearch.load db
		query_field.keypress ->
			results_field.html('')
			query_elements = query_field.val().split /\s+/
			query_tokens = []
			for query_element in query_elements
				query_tokens = query_tokens.concat segmenter.segment query_element
			sections = AllSiteSearch.search_sections query_elements
			for section in sections
				contents = section.contents
				for query_token in query_tokens
					console.log query_token
					contents = contents.replace (new RegExp(query_token, 'gi')), '<span style="background:#ff0">' + query_token + '</span>'
				results_field.append """
					<dt><a href="#{section.id}">#{section.title}</a></dt>
					<dd>#{contents}</d>>
				"""
		query_field.removeAttr 'disabled'
		results_field.text 'ready'
		query_field.keypress()

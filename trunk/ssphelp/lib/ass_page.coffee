query_field = $('#query')
results_field = $('#main')
query_field.attr 'disabled', true

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
			results_field.scrollTop 0
			query_elements = query_field.val().split /\s+/
			query_tokens = []
			for query_element in query_elements
				query_tokens = query_tokens.concat segmenter.segment query_element
			sections = AllSiteSearch.search_sections query_elements
			for section in sections
				contents = section.contents
				for query_token in query_tokens
					contents = contents.replace (new RegExp(query_token, 'gi')), '<span style="background:#ff0">' + query_token + '</span>'
				results_field.append """
					<dt><a href="#{section.id}">#{section.title}</a></dt>
					<dd>#{contents}</d>>
				"""
			unless sections.length
				results_field.html '<p>該当する結果がありません</p>'
		query_field.removeAttr 'disabled'

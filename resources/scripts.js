var Movies = new Array();
		
		function AddMovie( name, fn )
		{		
			Movies[ name ] = fn;
		}
		
		function ShowMovie( name )
		{
			var movie = document.getElementById( 'movie' );
			
			movie.innerHTML = '<div class="movie"><object width="320" height="240"><param name="movie" value="resources/flv.swf?file='+name+'"></param><param name="wmode" value="transparent"></param><embed src="resources/flv.swf?file='+name+'" type="application/x-shockwave-flash" wmode="transparent" width="320" height="240"></embed></object></div>';
			
			return false;
		}

		function WriteLinks()
		{
			for ( var i in Movies )
			{
				document.write( '<div class="movielink"><a href=\'#\' onclick="return ShowMovie(\''+Movies[i]+'\');"></div>' );
				document.write( i );
				document.write( '</a>' );
			}
		}
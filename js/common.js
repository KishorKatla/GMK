// Show and hide submenu



function mycarousel_itemVisibleInCallback(carousel, item, i, state, evt)
	{
	    // The index() method calculates the index from a
	    // given index who is out of the actual item range.
	    var idx = carousel.index(i, mycarousel_itemList.length);
	    carousel.add(i, mycarousel_getItemHTML(mycarousel_itemList[idx - 1]));
 
	    // Pause autoscrolling if the user moves with the cursor over the clip.
	    carousel.clip.hover(function() {
	        carousel.stopAuto();
	    }, function() {
	        carousel.startAuto();
	    });
	};
 
	function mycarousel_itemVisibleOutCallback(carousel, item, i, state, evt)
	{
	    carousel.remove(i);
	};
 
 
	function mycarousel_getItemHTML(item)
	{
	    return '<img src="' + item.url + '" width="120" height="80" alt="' + item.title + '" /></a>';
	};	



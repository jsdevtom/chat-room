var menuSVG=document.querySelectorAll(".menuSVG")[0],dropdownMenu=document.querySelectorAll(".dropdownMenu")[0],wrapper=document.createElement("div");wrapper.class="wrapper",wrapper.style.position="absolute",wrapper.style.width="100vw",wrapper.style.top="0",wrapper.style.left="0",wrapper.style.height="100vh",menuSVG&&(menuSVG.addEventListener("click",function(e){var r=dropdownMenu.parentNode;r.replaceChild(wrapper,dropdownMenu),wrapper.appendChild(dropdownMenu),dropdownMenu.style.display="flex",wrapper.style.display="initial"}),wrapper.addEventListener("click",function(e){var r=dropdownMenu.parentNode.parentNode;r.replaceChild(dropdownMenu,wrapper),dropdownMenu.style.display="none",wrapper.style.display="none"}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJtZW51U1ZHIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZHJvcGRvd25NZW51Iiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzcyIsInN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5IiwiZ3JhbmRQYXJlbnQiXSwibWFwcGluZ3MiOiJBQUFBLEdBQUlBLFNBQVVDLFNBQVNDLGlCQUFpQixZQUFZLEdBQ2hEQyxhQUFlRixTQUFTQyxpQkFBaUIsaUJBQWlCLEdBQzFERSxRQUFVSCxTQUFTSSxjQUFjLE1BQ3JDRCxTQUFRRSxNQUFRLFVBQ2hCRixRQUFRRyxNQUFNQyxTQUFXLFdBQ3pCSixRQUFRRyxNQUFNRSxNQUFRLFFBQ3RCTCxRQUFRRyxNQUFNRyxJQUFNLElBQ3BCTixRQUFRRyxNQUFNSSxLQUFPLElBQ3JCUCxRQUFRRyxNQUFNSyxPQUFTLFFBRW5CWixVQUNGQSxRQUFRYSxpQkFBaUIsUUFBUyxTQUFVQyxHQUMxQyxHQUFJQyxHQUFTWixhQUFhYSxVQUUxQkQsR0FBT0UsYUFBYWIsUUFBU0QsY0FDN0JDLFFBQVFjLFlBQVlmLGNBQ3BCQSxhQUFhSSxNQUFNWSxRQUFVLE9BQzdCZixRQUFRRyxNQUFNWSxRQUFVLFlBRzFCZixRQUFRUyxpQkFBaUIsUUFBUyxTQUFVQyxHQUMxQyxHQUFJTSxHQUFjakIsYUFBYWEsV0FBV0EsVUFFMUNJLEdBQVlILGFBQWFkLGFBQWNDLFNBQ3ZDRCxhQUFhSSxNQUFNWSxRQUFVLE9BQzdCZixRQUFRRyxNQUFNWSxRQUFVIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtZW51U1ZHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVTVkcnKVswXVxudmFyIGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bk1lbnUnKVswXVxudmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxud3JhcHBlci5jbGFzcyA9ICd3cmFwcGVyJ1xud3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbndyYXBwZXIuc3R5bGUud2lkdGggPSAnMTAwdncnXG53cmFwcGVyLnN0eWxlLnRvcCA9ICcwJ1xud3JhcHBlci5zdHlsZS5sZWZ0ID0gJzAnXG53cmFwcGVyLnN0eWxlLmhlaWdodCA9ICcxMDB2aCdcblxuaWYgKG1lbnVTVkcpIHtcbiAgbWVudVNWRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwYXJlbnQgPSBkcm9wZG93bk1lbnUucGFyZW50Tm9kZVxuXG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZCh3cmFwcGVyLCBkcm9wZG93bk1lbnUpXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkcm9wZG93bk1lbnUpXG4gICAgZHJvcGRvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCdcbiAgfSlcblxuICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGdyYW5kUGFyZW50ID0gZHJvcGRvd25NZW51LnBhcmVudE5vZGUucGFyZW50Tm9kZVxuXG4gICAgZ3JhbmRQYXJlbnQucmVwbGFjZUNoaWxkKGRyb3Bkb3duTWVudSwgd3JhcHBlcilcbiAgICBkcm9wZG93bk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9KVxufVxuIl19
